package com.MusicPlayer.Repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import com.MusicPlayer.Entities.Song;

public interface SongRepository extends MongoRepository<Song,Long>{

	public List<Song> findByPlaylistId(Long playlistId);
	
	  @Query("{'$or': [{'title': {'$regex': ?0, '$options': 'i'}}, {'artist': {'$regex': ?0, '$options': 'i'}}, {'album': {'$regex': ?0, '$options': 'i'}}, {'genre': {'$regex': ?0, '$options': 'i'}}]}")
	    public List<Song> getSongsByText(@Param("text") String text);
}