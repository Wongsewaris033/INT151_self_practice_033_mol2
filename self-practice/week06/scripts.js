// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const index = quotes.findIndex(quote => quote.id === id);
   if(index !== -1){
    quotes.splice(index,1)
   }
   else {
    console.log(`Quote with id ${id} not found.`);
  }
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const index = quotes.findIndex(quote => quote.id === id);
   if(index !== -1){
     quotes[index] = { ...quotes[index], ...updatedQuote };
}
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: 'Let your joy be in your journey - not in some distant goal.', author: 'Tim Cook' })
addQuote({ id: 2, content: 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.', author: 'Albert Einstein' })
addQuote({ id: 3, content: 'The roots of education are bitter, but the fruit is sweet.', author: 'Aristotle'})
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2)
// TODO: Update 1 quote using updateQuote()
updateQuote(1, { content: 'Stay Hungry, Stay Foolish', author: 'Steve Jobs' })
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())