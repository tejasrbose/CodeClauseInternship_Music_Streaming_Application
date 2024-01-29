package com.MusicPlayer.Services;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.multipart.MultipartFile;

import com.MusicPlayer.Entities.Category;
import com.MusicPlayer.Entities.Playlists;
import com.MusicPlayer.Entities.Song;
import com.MusicPlayer.Entities.User;
import com.MusicPlayer.Repositories.CatRepository;
import com.MusicPlayer.Repositories.PlaylistRepository;
import com.MusicPlayer.Repositories.SongRepository;
import com.MusicPlayer.Repositories.UserRepository;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;

@Service
public class BussinessLogic {

	@Autowired
	private GridFsTemplate gridFsTemplate;

	@Autowired
	private PlaylistRepository playListRepository;

	@Autowired
	private SongRepository songRepository;
	
	@Autowired
	private UserRepository userRepository;
	
//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private CatRepository catRepository;

	public String uplodFile(MultipartFile file) throws IOException {
		DBObject obj = new BasicDBObject();
		obj.put("fileName", file.getOriginalFilename());
		obj.put("contentType", file.getContentType());
		obj.put("size", file.getSize());
		ObjectId id = this.gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), obj);
		return id.toHexString();
	}

	public InputStream getObjectFileById(String id) throws RuntimeException, IOException {
		GridFSFile gridFsFile = this.gridFsTemplate.findOne(new Query(Criteria.where("_id").is(new ObjectId(id))));
		if (gridFsFile != null)
			return gridFsTemplate.getResource(gridFsFile).getInputStream();
		return null;
	}

	public List<Playlists> getAllPlayLists() {
		return this.playListRepository.findAll();
	}

	public Song getSongByid(Long id) {
		Optional<Song> sng = this.songRepository.findById(id);

		return sng.get();
	}

	public List<Song> getAllSongs() {
		return this.songRepository.findAll();
	}

	public List<Song> getSongsByPlaylist(Long id) {
		return this.playListRepository.findById(id).get().getPlaylistSongs();
	}

	public Song addSong(Song song) throws IOException {
		this.songRepository.save(song);
		return song;
	}

	public Playlists createPlayList(Playlists playlist) {
		this.playListRepository.save(playlist);
		return playlist;
	}

	public Playlists getPlaylist(Long id) {

		return this.playListRepository.findByPlaylistId(id);
	}

	
	  public List<Song> getAllSongByPlayListId(Long id) { 
		  return this.songRepository.findByPlaylistId(id);
	  }
	  
//	  public ResponseEntity<HttpStatus> createUser(User user)
//	  {
////		  try 
////      	{
////      	
////      		user.setPassWord(this.passwordEncoder.encode(user.getPassWord()));
////      		user.setRole("ROLE_USER");
////      		this.userRepository.save(user);
////      		System.out.println(user);
////      		return new ResponseEntity<>(HttpStatus.OK);
////      	}
////		 catch(Exception e)
////      	{
////			 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
////      	}
//      	
//	  }
	  
	  public ResponseEntity<HttpStatus> createCat(Category cat)
	  {
		  try {
			  
			 this.catRepository.save(cat);
			 return new ResponseEntity<>(HttpStatus.OK);
		  }catch(Exception e)
		  {
			  return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	  }
	  
	  public List<Song> getSongsFromSearch(String text)
	  {
		 return  this.songRepository.getSongsByText(text);
	  }
}
