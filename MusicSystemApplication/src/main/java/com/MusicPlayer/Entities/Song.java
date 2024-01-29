package com.MusicPlayer.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection ="Song")
@Getter
@Setter
public class Song {
	
	@Id
	private Long  id;
    private String title;
    private String artist;
    private String album;
    private String img;
    private String genre;
    private String fileId;
    private Long playlistId;
    
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
	}
	public String getAlbum() {
		return album;
	}
	public void setAlbum(String album) {
		this.album = album;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public Long getPlaylistId() {
		return playlistId;
	}
	public void setPlaylistId(Long playlistId) {
		this.playlistId = playlistId;
	}
	
	
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Song() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Song(Long id, String title, String artist, String album, String img, String genre, String fileId,
			Long playlistId) {
		super();
		this.id = id;
		this.title = title;
		this.artist = artist;
		this.album = album;
		this.img = img;
		this.genre = genre;
		this.fileId = fileId;
		this.playlistId = playlistId;
	}
	
	
    
    
}
