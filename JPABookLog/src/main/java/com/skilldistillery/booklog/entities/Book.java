package com.skilldistillery.booklog.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	@Column(name="number_of_words")
	private Integer numberOfWords;
	
	@Column(name="image_url")
	private String imageUrl;
	
	@Column(name="date_finished")
	private LocalDate dateFinished;

	public Book() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	public Integer getNumberOfWords() {
		return numberOfWords;
	}

	public void setNumberOfWords(Integer numberOfWords) {
		this.numberOfWords = numberOfWords;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public LocalDate getDateFinished() {
		return dateFinished;
	}

	public void setDateFinished(LocalDate dateFinished) {
		this.dateFinished = dateFinished;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", numberOfWords=" + numberOfWords + ", imageUrl=" + imageUrl
				+ ", dateFinished=" + dateFinished + "]";
	}

	
	
	
}
