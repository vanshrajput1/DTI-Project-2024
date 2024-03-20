document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('bookList');

    const books = [
        { title: 'Wings of Fire', author: 'Dr. APJ Abdul Kalam', summary: 'In this book, the authors tell us the story of a young Muslim boy who has big dreams about his future and what inspires him to become an eminent scientist. This real story tells us the role of family, relatives and friends in helping a person in achieving his goals....', cover: '../images/book1.jpg', audio: '../audio/book1.mp3', pdf: '../pdfs/book1.pdf' },
        { title: 'Book Title 2', author: 'Author Name 2', summary: 'Another short summary of the book goes here...', cover: 'book2.jpg', audio: 'book2.mp3', pdf: 'book2.pdf' },
        { title: 'Book Title 3', author: 'Author Name 3', summary: 'Yet another short summary of the book goes here...', cover: 'book3.jpg', audio: 'book3.mp3', pdf: 'book3.pdf' },
    ];

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover">
            <div class="book-details">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Summary: ${book.summary}</p>
                <audio controls>
                    <source src="${book.audio}" type="audio/mp3">
                    Your browser does not support the audio tag.
                </audio>
            </div>
            <div class="icons">
                <i class="fas fa-heart" onclick="toggleFavorite(this)"></i>
                <i class="fas fa-bookmark" onclick="toggleBookmark(this)"></i>
                <i class="fas fa-download" onclick="openPdfInNewTab('${book.pdf}')"></i>
            </div>
            
        `;
        bookList.appendChild(bookElement);
    });
});


function toggleFavorite(icon) {
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
}

function toggleBookmark(icon) {
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
}

function openPdfInNewTab(pdfUrl) {
    window.open(pdfUrl, '_blank');
}




