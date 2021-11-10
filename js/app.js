const date = document.getElementsByClassName('date')
const anc = document.querySelectorAll('.anc')
const nav = document.getElementById('nav-bar')
const dateData = [...date]
const sec = ['sec-1', 'sec-2', 'sec-3', 'sec-4']

//dynamic navbar

const ul = document.createElement('ul')
  sec.map((section, i) => {
    const li = document.createElement('li')
    li.classList = `${section} container `
    li.innerHTML = `<a id="${section}" href="">section ${i+1}</a>`
    ul.appendChild(li)
    nav.appendChild(ul);
  })
 
  // navigate to section dynamically

document.getElementById('sec-1').addEventListener('click', function(e) {
  e.preventDefault()
  document.querySelector('#section-1').scrollIntoView();
});

document.getElementById('sec-2').addEventListener('click', function(e) {
  e.preventDefault()
  document.querySelector('#section-2').scrollIntoView();
});

document.getElementById('sec-3').addEventListener('click', function(e) {
  e.preventDefault()
  document.querySelector('#section-3').scrollIntoView();
});

document.getElementById('sec-4').addEventListener('click', function(e) {
  e.preventDefault()
  document.querySelector('#section-4').scrollIntoView();
});
	
 anc.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.id === item.id) {
      item.style.fontSize = '40px'
      item.style.color = 'rgb(24, 24, 153)'
    }
    const data = [...anc].filter((el) => el !== item)
    data.forEach((el) => {
       el.style.fontSize = '20px'
    })
     dateData.forEach((el) => {
       if(el.children[0] === item) {
         el.children[1].style.display = 'none'
         el.children[2].style.display = 'block'
         el.style.flexDirection = 'column'
       }
       else {
        el.children[1].style.display = 'block'
        el.children[2].style.display = 'none'
        el.style.flexDirection = 'row'
       }
     })
  })
}) 


const sections = document.querySelectorAll("section")
const navLi = document.querySelectorAll(".container ul li")
window.onscroll = () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop-300) {
      current = section.getAttribute("class")
     }
  });

  navLi.forEach((li) => {
    li.classList.remove("active")
    if (li.classList.value === current) {
      li.classList.add("active")
    }
  });
};

