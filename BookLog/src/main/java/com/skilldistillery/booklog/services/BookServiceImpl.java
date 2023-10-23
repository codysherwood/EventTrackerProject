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
		return bookRepo.findAll();
	}

	@Override
	public Book getBookById(int bookId) {
		return bookRepo.searchById(bookId);
	}

	@Override
	public Book createBook(Book book) {
		bookRepo.saveAndFlush(book);
		return book;
	}

	@Override
	public Book update(int id, Book updatingBook) {
			Book existingBook = bookRepo.searchById(id);
			if (existingBook != null) {
				existingBook.setDateFinished(updatingBook.getDateFinished());
				existingBook.setImageUrl(updatingBook.getImageUrl());
				existingBook.setTitle(updatingBook.getTitle());
				existingBook.setNumberOfWords(updatingBook.getNumberOfWords());
				bookRepo.saveAndFlush(existingBook);
			}
			return existingBook;
	}

	@Override
	public boolean delete(int bookId) {
		boolean deleted = false;
		Book toDelete = bookRepo.searchById(bookId);
		if(toDelete != null) {
			bookRepo.deleteById(bookId);
			deleted = true;
		}
		return deleted;
	}

}
