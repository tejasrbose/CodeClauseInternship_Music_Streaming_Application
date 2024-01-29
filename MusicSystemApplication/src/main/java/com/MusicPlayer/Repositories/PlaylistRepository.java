package com.MusicPlayer.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.MusicPlayer.Entities.Playlists;

public interface PlaylistRepository extends MongoRepository<Playlists,Long>{

	public Playlists findByPlaylistId(Long playlistId);
	
}
