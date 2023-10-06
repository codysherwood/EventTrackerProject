package com.skilldistillery.booklog.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Locale.Category;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BookTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Book book;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf =Persistence.createEntityManagerFactory("JPABookLog");
	}

	@AfterAll
	
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		book = em.find(Book.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		book=null;
	}

	@Test
	void basic_mapping_test() {
	assertNotNull(book);
	assertEquals("The Way of Kings", book.getTitle());
	}

}
