package com.skilldistillery.booklog.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.booklog.entities.Book;
import com.skilldistillery.booklog.services.BookService;

@RestController
@RequestMapping("api")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("books")
	public List<Book> listBooks() {
		return bookService.getAllBooks();
	}
	@GetMapping("books/{bookId}")
	public Book getBook(@PathVariable int bookId, HttpServletResponse res) {
		Book book = bookService.getBookById(bookId);
		if (book == null) {
			res.setStatus(404);
		}
		return book;
	}
	@PostMapping("books")
	public Book createBook(@RequestBody Book book, HttpServletResponse res) {
		Book created = bookService.createBook(book);
		if (created != null) {
			res.setStatus(201);
		}
		return created;
	}
	@PutMapping("books/{id}")
	public Book updateBooke(@RequestBody Book book, @PathVariable int id, HttpServletResponse res) {
		Book updated = bookService.update(id, book);
		return updated;
		
	}
	@DeleteMapping("books/{id}")
	public void delete(@PathVariable int id, HttpServletResponse resp) {
		try {
			bookService.delete(id);
			resp.setStatus(204);
		} catch (Exception e) {
			resp.setStatus(404);
		}
	}
}
