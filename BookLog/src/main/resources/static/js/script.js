console.log('scrip.js loaded')

window.addEventListener('load', function(e) {
	console.log('page loaded')
	init();
})

function init() {
	loadAllBooks();



	createBookButton.addEventListener('click', function(e) {
		e.preventDefault();
		let newBook = {
			title: document.createBookForm.title.value,
			numberOfWords: document.createBookForm.numberOfWords.value,
			imageUrl: document.createBookForm.imageUrl.value,
			dateFinished: document.createBookForm.dateFinished.value
		}
		createBook(newBook);
	})
	
	

	//Load initial data to page

}


function loadAllBooks() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/books');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let books = JSON.parse(xhr.responseText);
				displayAllBooks(books);
			}
			else {
				//TODO
			}
		}
	}
	xhr.send();

}
function displayAllBooks(bookList) {
	//DOM
	// Get div
	let div = document.getElementById("bookListDiv")
	div.textContent = '';
	// Append child for each list item
	let table = document.createElement('table');
	div.appendChild(table);
	let tableRow = document.createElement('tr');
	table.appendChild(tableRow);
	let tableHead = document.createElement('th');
	tableHead = document.createElement('th');
	tableHead.textContent = 'Title';
	tableRow.appendChild(tableHead);
	let tableBody = document.createElement('tbody');
	table.appendChild(tableBody);

	if (bookList && Array.isArray(bookList) && bookList.length > 0) {
		for (let book of bookList) {
			let tr = document.createElement('tr');
			tr.bookId = book.id;
			tableBody.appendChild(tr);
			let tdId = document.createElement('td');
			tdId.textContent = book.id;
			let tdTitle = document.createElement('td');
			tdTitle.id = book.id;
			let bookDiv = document.createElement('div');
			tdTitle.appendChild(bookDiv);
			let paragraph = document.createElement('p');
			paragraph.textContent = book.title;
			let imgImage = document.createElement('img')
			imgImage.src = book.imageUrl;
			imgImage.width = 125;
			tr.appendChild(tdTitle);
			bookDiv.appendChild(paragraph);
			bookDiv.appendChild(imgImage);

			let editBookFormDiv = document.getElementById('editBookFormDiv');
			bookDetailDiv.style.display = 'none';
			editBookFormDiv.style.display = 'none';
			bookListDiv.style.display = 'block';
			newBookFormDiv.style.display = 'block';
			imgImage.addEventListener('click', function(e) {

				let id = e.target.parentElement.parentElement.id;
				console.log(id);
				getBookDetails(id);
			})


		}
	}

}
function getBookDetails(id) {
	let xhr = new XMLHttpRequest
	xhr.open('GET', 'api/books/' + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let book = JSON.parse(xhr.responseText);
				displayBookDetails(book);
			}
		}
		else {

		}
	}
	xhr.send();
}
function displayBookDetails(book) {

	let div = document.getElementById('bookDetailDiv');
	div.textContent = '';
	let table = document.createElement('table');
	div.appendChild(table);
	let tableRow = document.createElement('tr');
	table.appendChild(tableRow);
	let tableHead = document.createElement('th');
	tableHead.textContent = 'ID';
	tableRow.appendChild(tableHead);
	tableHead = document.createElement('th');
	tableHead.textContent = 'Title';
	tableRow.appendChild(tableHead);
	tableHead = document.createElement('th');
	tableHead.textContent = 'Word Count';
	tableRow.appendChild(tableHead);
	tableHead = document.createElement('th');
	tableHead.textContent = 'Date Finished';
	tableRow.appendChild(tableHead);
	let tableBody = document.createElement('tbody');
	table.appendChild(tableBody);

	if (book != null) {
		let tr = document.createElement('tr');
		tr.bookId = book.id;
		tableBody.appendChild(tr);
		let tdId = document.createElement('td');
		tdId.textContent = book.id;
		let tdTitle = document.createElement('td');
		let bookDiv = document.createElement('div');
		tdTitle.appendChild(bookDiv);
		let paragraph = document.createElement('p');
		paragraph.textContent = book.title;
		let imgImage = document.createElement('img')
		imgImage.src = book.imageUrl;
		imgImage.width = 125;
		tr.appendChild(tdId);
		tr.appendChild(tdTitle);
		td = document.createElement('td');
		td.textContent = book.numberOfWords;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = book.dateFinished;
		tr.appendChild(td);
		bookDiv.appendChild(paragraph);
		bookDiv.appendChild(imgImage);
		let br = document.createElement('br');
		div.appendChild(br);
		let button = document.createElement('button');
		button.textContent = 'Delete Book';
		button.type = 'button';
		button.id = 'deleteButton'
		div.appendChild(button);
			button.addEventListener('click', function(e) {	
			
			e.preventDefault();
			deleteBook(book.id);
		})
		let editBookFormDiv = document.getElementById('editBookFormDiv');
		editBookFormDiv.style.display = 'block';
		let bookListDiv = document.getElementById('bookListDiv');
		bookListDiv.style.display = 'none';
		let newBookFormDiv = document.getElementById('newBookFormDiv');
		newBookFormDiv.style.display = 'none';
		let form = editBookFormDiv.firstElementChild.nextElementSibling;
		document.getElementById('title').value = book.title;
		document.getElementById('numberOfWords').value = book.numberOfWords;
		document.getElementById('imageUrl').value = book.imageUrl;
		document.getElementById('dateFinished').value = book.dateFinished;
		document.getElementById('id').value = book.id;
		
			bookDetailDiv.style.display = 'block';
		document.getElementById('updateBookButton').addEventListener('click', function(e) {
			e.preventDefault();
			let updatedBook = {
				id: document.updateBookForm.id.value,
				title: document.updateBookForm.title.value,
				numberOfWords: document.updateBookForm.numberOfWords.value,
				imageUrl: document.updateBookForm.imageUrl.value,
				dateFinished: document.updateBookForm.dateFinished.value
			}
			upadateBook(updatedBook);
		})

	}
}
function createBook(book) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "api/books");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let createdBook = JSON.parse(xhr.responseText);
				displayBookDetails(createdBook);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	console.log("" + book);
	let newBookJson = JSON.stringify(book);
	xhr.send(newBookJson);
}
function upadateBook(book) {
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", "api/books/" + book.id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let updatedBook = JSON.parse(xhr.responseText);
				displayBookDetails(updatedBook);
			}
			else {
				console.error("PUT request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	console.log("" + book);
	let newBookJson = JSON.stringify(book);
	xhr.send(newBookJson);
}

function deleteBook(id) {
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "api/books/" + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 204) {
				loadAllBooks();
			}
			else {
				console.error("DELETE request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	}
	xhr.send();
	loadAllBooks();
}
//function generateUpdateBookFormDetails(id) {
//	let xhr = new XMLHttpRequest
	//xhr.open('GET', 'api/books/' + id);
//	xhr.onreadystatechange = function() {
	//	if (xhr.readyState === 4) {
	//		if (xhr.status === 200) {
	//			let book = JSON.parse(xhr.responseText);
	//			displayUpdateForm(book);
	//		}
	//	}
	//	else {
	//	}
//}
	//xhr.send();
//}
//function displayUpdateForm(book) {	
//}
