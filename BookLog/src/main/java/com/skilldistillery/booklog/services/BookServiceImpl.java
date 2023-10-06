package com.skilldistillery.booklog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.booklog.entities.Book;
import com.skilldistillery.booklog.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookRepository bookRepo;

	@Override
	public List<Book> getAllBooks() {
	return	bookRepo.findAll();
	}

	@Override
	public Book getDiveById(int bookId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Book createBook(Book book) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Book update(int diveId, Book updatingBook) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int bookId) {
		// TODO Auto-generated method stub
		return false;
	}

}
