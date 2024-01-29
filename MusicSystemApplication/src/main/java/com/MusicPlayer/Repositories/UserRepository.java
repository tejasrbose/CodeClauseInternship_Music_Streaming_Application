package com.MusicPlayer.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.MusicPlayer.Entities.User;

public interface UserRepository extends MongoRepository<User,Long>{

	
	public User findByUserName(String userName);
}
