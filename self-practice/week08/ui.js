import { addQuote, getAllQuotes } from './quote.js'

addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('Do or do not. There is no try.', 'Yoda')
addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
//ใช้ addQuote() เพื่อเพิ่ม quote แต่ละอัน

let quotes = getAllQuotes()
const quoteList = document.getElementById('quote-list') //ดึง element ที่มี id "quote-list" (getElementById) มาเพื่อใช้เป็นที่แสดงqouteทั้งหมด

function renderQuotes() {
  quoteList.innerHTML = '' //เคลียร์เนื้อหาเก่าของ quoteList ก่อน (innerHTML = '')
  quotes.forEach((quote) => {
    const p = document.createElement('p') //ลูปทุก quote แล้วสร้าง <p> ใหม่
    p.textContent = `"${quote.content}" — ${quote.author}`
    quoteList.appendChild(p) //เอา <p> ที่สร้างนั้นไปเพิ่มไว้ใน quoteList (เพิ่มต่อท้ายเพราะใช้ append)
  })
}

renderQuotes() //เรียกฟังก์ชันเพื่อให้ๆนีะำทั้งหมดไปแสดงบนหน้าเว็บ