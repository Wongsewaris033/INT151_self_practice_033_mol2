const form = document.getElementById('styleForm');
const bg = document.getElementById('bgColor');
const fontColor = document.getElementById('fontColor');
const fontSize = document.getElementById('fontSize');
const example = document.getElementById('example-text');

function applyStyle(bgColor, color, size) {
  document.body.style.backgroundColor = bgColor;
  example.style.color = color;
  example.style.fontSize =
    size === 'small' ? '14px' :
    size === 'medium' ? '20px' : '28px';
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('styleSettings'));
  if (saved) {
    bg.value = saved.bgColor;
    fontColor.value = saved.fontColor;
    fontSize.value = saved.fontSize;
    applyStyle(saved.bgColor, saved.fontColor, saved.fontSize);
  }
});

[bg, fontColor, fontSize].forEach(select => {
  select.addEventListener('change', () => {
    applyStyle(bg.value, fontColor.value, fontSize.value);
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.setItem('styleSettings', JSON.stringify({
    bgColor: bg.value,
    fontColor: fontColor.value,
    fontSize: fontSize.value
  }));
});

form.addEventListener('reset', () => {
  setTimeout(() => {
    localStorage.removeItem('styleSettings');
    bg.value = 'white';
    fontColor.value = 'black';
    fontSize.value = 'small';
    applyStyle('white', 'black', 'small');
  });
});
//โจทย์ในห้องท้ายคาบ เอากลับมาลองทำและทบทวนอีกครั้ง

//--------------------

function loadQuotes() { 
    const data = localStorage.getItem('load')
    if (!data) return
    try {
      const parsedQuotes = JSON.parse(data)
      parsedQuotes.forEach( e => {
        if( !e.content || !e.author ) return
        addQuote(e.content , e.author)
      })
      quotes = getAllQuotes()
      renderQuotes()
    } catch (e) {
      console.log(" Error parsing data" , e)
    }
  }
  
  function saveQuotes() {
    const data = getAllQuotes()
    if (!data) return
    if(data.length === 0) localStorage.removeItem('load')
    const parsedQuotes = JSON.stringify(data)
    localStorage.setItem('load', parsedQuotes)
  }

//จากโจทย์ที่อาจารย์ให้ทำเป็น self-practice