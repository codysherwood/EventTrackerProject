package com.skilldistillery.booklog.services;

import java.util.List;

import com.skilldistillery.booklog.entities.Book;

public interface BookService {
	
	List<Book> getAllBooks();
	Book getDiveById(int bookId);
	Book createBook(Book book);
	Book update(int diveId, Book updatingBook);
	boolean delete(int bookId);

}
