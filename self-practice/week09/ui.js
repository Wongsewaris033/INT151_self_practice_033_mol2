import { addQuote, deleteQuote, updateQuote, getAllQuotes } from "./quote.js";

let quotes = getAllQuotes();

const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

function createQuoteElement(quote) {
  const div = document.createElement("div");
  div.dataset.id = quote.id;

  const contentP = document.createElement("p");
  contentP.textContent = quote.content;

  const authorP = document.createElement("p");
  authorP.textContent = quote.author;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.dataset.id = quote.id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.dataset.id = quote.id;

  div.appendChild(contentP);
  div.appendChild(authorP);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  return div;
}

function addQuoteToDOM(quote) {
  const quoteEl = createQuoteElement(quote);
  quoteList.appendChild(quoteEl);
}

function updateQuoteInDOM(quote) {
  const div = quoteList.querySelector(`div[data-id='${quote.id}']`);
  if (div) {
    const ps = div.querySelectorAll("p");
    ps[0].textContent = quote.content;
    ps[1].textContent = quote.author;
  }
}

function deleteQuoteFromDOM(id) {
  const div = quoteList.querySelector(`div[data-id='${id}']`);
  if (div) {
    div.remove();
  }
}

function renderQuotes() {
  quoteList.innerHTML = "";
  quotes = getAllQuotes();
  quotes.forEach((quote) => addQuoteToDOM(quote));
}

function showRandomQuote() {
  const allQuotes = getAllQuotes();
  if (allQuotes.length === 0) {
    randomDisplay.textContent = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  const randomQuote = allQuotes[randomIndex];
  randomDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = Number(idInput.value);
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();

  if (!content || !author) return;

  if (id) {
    const updated = updateQuote(id, content, author);
    updateQuoteInDOM(updated);
  } else {
    const newQuote = addQuote(content, author);
    addQuoteToDOM(newQuote);
  }

  quotes = getAllQuotes();
  form.reset();
  idInput.value = "";
});

quoteList.addEventListener("click", (e) => {
  const target = e.target;
  const id = Number(target.dataset.id);

  if (target.classList.contains("edit-btn")) {
    quotes = getAllQuotes();
    const quote = quotes.find((q) => q.id === id);
    if (quote) {
      contentInput.value = quote.content;
      authorInput.value = quote.author;
      idInput.value = quote.id;
    }
  }

  if (target.classList.contains("delete-btn")) {
    deleteQuote(id);
    deleteQuoteFromDOM(id);
    quotes = getAllQuotes();
  }
});

randomBtn.addEventListener("click", showRandomQuote);

renderQuotes();