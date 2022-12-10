const html1 = "<li>First item</li><li>Second item</li><li>Third item</li>";
const a=document.createElement('li')
a.textContent = "First item"
const b=document.createElement('li')
b.textContent = "Second item"
b.className='my-item'
const c=document.createElement('li')
c.textContent = "Third item"

const somelist = document.getElementById("target");
somelist.appendChild(a)
somelist.appendChild(b)
somelist.appendChild(c)