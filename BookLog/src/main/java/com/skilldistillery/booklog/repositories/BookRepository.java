package com.skilldistillery.booklog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.booklog.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
	
}
