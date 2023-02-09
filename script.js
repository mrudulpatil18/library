let myLibrary = [];
let lib = document.querySelector(".books");

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return (
      "The " + title + " by " + author + ", " + pages + " pages, " + haveRead
    );
  };
}

function Remove(book) {
  let index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  displayLib();
}

function Toggle(card) {
  let read = card.querySelector(".read");
  if (read.textContent == "not read") {
    read.textContent = "read";
  } else {
    read.textContent = "not read";
  }
}

function newCard(book) {
  let card = document.createElement("div");
  card.classList.add("card");

  let title = document.createElement("div");
  title.textContent = book.title;
  title.classList.add("title");
  card.appendChild(title);

  let author = document.createElement("div");
  author.textContent = book.author;
  author.classList.add("author");
  card.appendChild(author);

  let pages = document.createElement("div");
  pages.textContent = book.pages;
  pages.classList.add("pages");
  card.appendChild(pages);

  let haveRead = document.createElement("div");
  haveRead.textContent = book.haveRead;
  haveRead.classList.add("read");
  card.appendChild(haveRead);

  let remove = document.createElement("button");
  remove.textContent = "remove";
  remove.classList.add("remove");

  remove.addEventListener("click", function () {
    Remove(book);
  });

  let toggle = document.createElement("button");
  toggle.textContent = "toggle";
  toggle.classList.add("toggle");

  toggle.addEventListener("click", function () {
    Toggle(card);
  });

  card.appendChild(toggle);
  card.appendChild(remove);

  return card;
}

function displayLib() {
  while (lib.firstElementChild) {
    lib.firstElementChild.remove();
  }
  for (let book of myLibrary) {
    let temp = newCard(book);
    lib.appendChild(temp);
  }
}

function getData() {
  let form = document.querySelector("form");
  form.innerHTML = `
        <div class="area">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="area">
          <label for="author">Author:</label>
          <input type="text" id="author" name="author" required>
        </div>

        <div class="area">
          <label for="pages">Pages:</label>
          <input type="number" id="pages" name="pages" required>
        </div>

        <div class="area">
          <label for="read">Read:</label>
          <select name="read" id="read" required>
              <option value="read">Yes</option>
              <option value="not read yet">No</option>
          </select>
        </div>

        <button type="submit" id="submit">Submit</button>
    `;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function update(e) {
  e.preventDefault();
  let form = document.querySelector("form");
  const name = form.querySelector("#name");
  const author = form.querySelector("#author");
  const pages = form.querySelector("#pages");
  const read = form.querySelector("#read");
  let book = new Book(name.value, author.value, pages.value, read.value);
  addBookToLibrary(book);
  form.innerHTML = "";
  displayLib();
}

const Hobbit0 = new Book("Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary(Hobbit0);

const Hobbit1 = new Book("Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary(Hobbit1);

const Hobbit2 = new Book("Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary(Hobbit2);

const Hobbit3 = new Book("Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary(Hobbit3);

const Hobbit4 = new Book("Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary(Hobbit4);

displayLib();

let button = document.querySelector("#addItem");
button.addEventListener("click", getData);

let form = document.querySelector("form");
form.addEventListener("submit", update);
