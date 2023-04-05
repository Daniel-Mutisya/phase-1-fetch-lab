function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  let fetchData= fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data));
return  fetchData;
}

function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});



// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   let retrieveData = fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((data) => renderBooks(data));
//   return retrieveData;
// }
// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }
// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });