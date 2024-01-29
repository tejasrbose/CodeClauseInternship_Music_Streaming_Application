package com.MusicPlayer.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.MusicPlayer.Entities.Category;


public interface CatRepository extends MongoRepository<Category,Long>{

}
