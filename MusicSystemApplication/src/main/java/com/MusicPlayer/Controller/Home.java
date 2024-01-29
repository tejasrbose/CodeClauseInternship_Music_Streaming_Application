package com.MusicPlayer.Controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.MusicPlayer.Entities.Category;
import com.MusicPlayer.Entities.Playlists;
import com.MusicPlayer.Entities.Song;
import com.MusicPlayer.Services.BussinessLogic;

@RestController
@CrossOrigin
public class Home {

	@Autowired
	 private BussinessLogic bussinessLogic;
		
	@PostMapping("/addsong")
	public String addSong(@RequestParam("songfile") MultipartFile songfile) throws IOException
	{
		String id=this.bussinessLogic.uplodFile(songfile);
		System.out.println("Audio File Id :"+id);
		return id;
	}
	
	@PostMapping("/addimg")
	public String addImg(@RequestParam("imgfile") MultipartFile imgfile) throws IOException
	{
		String id=this.bussinessLogic.uplodFile(imgfile);
		System.out.println("Img File Id :"+id);
		return id;
	}
	
	@GetMapping("/songobject/{id}")
	public ResponseEntity<InputStreamResource> getSong(@PathVariable String id) throws RuntimeException, IOException {
	    if (!ObjectId.isValid(id)) {
	        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }

	    try {
	        InputStream audioStream = this.bussinessLogic.getObjectFileById(id);
	        if (audioStream != null) {
	            HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
	            headers.setContentDispositionFormData("attachment", "audio.mp3");
	            return new ResponseEntity<>(new InputStreamResource(audioStream), headers, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    } catch (IOException e) {
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	@GetMapping("/imageobject/{id}")
	public ResponseEntity<InputStreamResource> getImage(@PathVariable String id) throws RuntimeException, IOException {
	    if (!ObjectId.isValid(id)) {
	        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }

	    try {
	        InputStream imageStream = this.bussinessLogic.getObjectFileById(id);
	        if (imageStream != null) {
	            HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.IMAGE_JPEG); // Adjust content type based on your image type
	            headers.setContentDispositionFormData("attachment", "image.jpg"); // Adjust filename based on your image file
	            return new ResponseEntity<>(new InputStreamResource(imageStream), headers, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    } catch (IOException e) {
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@PostMapping("/addaudio")
	public Song addAudioToRepo(@RequestBody Song song) throws IOException
	{
		 return this.bussinessLogic.addSong(song);
	}
	
	@PostMapping("/makeplaylist")
	public Playlists addPlayList(@RequestBody Playlists playlist)
	{
		return this.bussinessLogic.createPlayList(playlist);
	}
	
	@GetMapping("/getalllists")
	public List<Playlists> getAllLists()
	{	
	return	this.bussinessLogic.getAllPlayLists();
	}	
	
	@GetMapping("/getplaylist/{id}")
	public Playlists getListById(@PathVariable String id)
	{
		return this.bussinessLogic.getPlaylist(Long.parseLong(id));
	}
	
	@GetMapping("/getSongs/{id}")
	public List<Song> getSongs(@PathVariable String id)
	{
		return this.bussinessLogic.getAllSongByPlayListId(Long.parseLong(id));
	}
	
	@GetMapping("/getSong/{id}")
	public Song getSongById(@PathVariable String id)
	{
		return this.bussinessLogic.getSongByid(Long.parseLong(id));
	}
	
	@PostMapping("/saveCat")
	public ResponseEntity<HttpStatus> addCat(@RequestBody Category cat)
	{
		return this.bussinessLogic.createCat(cat);
	}
	
	@GetMapping("/getSongBySearch/{text}")
	public List<Song> getSongsBySearch(@PathVariable String text)
	{
		return this.bussinessLogic.getSongsFromSearch(text);
	}
}
