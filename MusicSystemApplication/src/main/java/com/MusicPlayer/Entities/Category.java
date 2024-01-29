package com.MusicPlayer.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="Cat")
public class Category {

	@Id
	private Long catId;
	private String catName;
	private String tagLine;
	public Long getCatId() {
		return catId;
	}
	public void setCatId(Long catId) {
		this.catId = catId;
	}
	public String getCatName() {
		return catName;
	}
	public void setCatName(String catName) {
		this.catName = catName;
	}
	public String getTagLine() {
		return tagLine;
	}
	public void setTagLine(String tagLine) {
		this.tagLine = tagLine;
	}
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
