package com.MusicPlayer.Entities;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection ="User")
@Getter
@Setter
@AllArgsConstructor
public class User {
	
	private String userId;
	private String userName;
	private String passWord;
	private String role;
	private List<Song> likedS;
	private List<Playlists> addedPL;
	
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public List<Song> getLikedS() {
		return likedS;
	}
	public void setLikedS(List<Song> likedS) {
		this.likedS = likedS;
	}
	public List<Playlists> getAddedPL() {
		return addedPL;
	}
	public void setAddedPL(List<Playlists> addedPL) {
		this.addedPL = addedPL;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
