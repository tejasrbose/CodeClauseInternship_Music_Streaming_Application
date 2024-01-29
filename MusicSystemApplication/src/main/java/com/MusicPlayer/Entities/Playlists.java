package com.MusicPlayer.Entities;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection ="PLaylist")
@Getter
@Setter
@AllArgsConstructor
public class Playlists {

	private Long playlistId;
	private String playlistName;
	private String playlistGenre;
	private String img;
	private Long catId;
 	private List<Song> playlistSongs;
	public Long getPlaylistId() {
		return playlistId;
	}
	public void setPlaylistId(Long playlistId) {
		this.playlistId = playlistId;
	}
	public String getPlaylistName() {
		return playlistName;
	}
	public void setPlaylistName(String playlistName) {
		this.playlistName = playlistName;
	}
	public String getPlaylistGenre() {
		return playlistGenre;
	}
	public void setPlaylistGenre(String playlistGenre) {
		this.playlistGenre = playlistGenre;
	}
	public List<Song> getPlaylistSongs() {
		return playlistSongs;
	}
	public void setPlaylistSongs(List<Song> playlistSongs) {
		this.playlistSongs = playlistSongs;
	}
	
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	
	public Long getCatId() {
		return catId;
	}
	public void setCatId(Long catId) {
		this.catId = catId;
	}
	public Playlists() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
