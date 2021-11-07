const date = document.getElementsByClassName('date')
const anc = document.querySelectorAll('.anc')
const nav = document.getElementById('nav-bar')
const dateData = [...date]

//dynamic navbar

var content = document.createElement('div');
	content.innerHTML = "";
	var liststart = document.createElement('ul');
	var listelement1 = document.createElement('li');
	var listelement2 = document.createElement('li');
  var listelement3 = document.createElement('li');
  var listelement4 = document.createElement('li');

  listelement1.classList = 'sec-1'
  listelement2.classList = 'sec-2'
  listelement3.classList = 'sec-3'
  listelement4.classList = 'sec-4'


	listelement1.innerHTML = '<a href="#sec-1">section 1</a>';
	listelement2.innerHTML = '<a href="#sec-2">section 2</a>';
  listelement3.innerHTML = '<a href="#sec-3">section 3</a>';
  listelement4.innerHTML = '<a href="#sec-4">section 4</a>';

	liststart.appendChild(listelement1);
	liststart.appendChild(listelement2);
  liststart.appendChild(listelement3);
  liststart.appendChild(listelement4);


	nav.appendChild(liststart);
 
  // navigate to section dynamically

document.querySelector('#sec-1').addEventListener('click', function() {
  document.querySelector('#sec-1').scrollIntoView();
});

document.querySelector('#sec-2').addEventListener('click', function() {
  document.querySelector('#sec-2').scrollIntoView();
});

document.querySelector('#sec-3').addEventListener('click', function() {
  document.querySelector('#sec-3').scrollIntoView();
});

document.querySelector('#sec-4').addEventListener('click', function() {
  document.querySelector('#sec-4').scrollIntoView();
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
      current = section.getAttribute("id")
     }
  });

  navLi.forEach((li) => {
    li.classList.remove("active")
    if (li.classList.contains(current)) {
      li.classList.add("active")
    }
  });
};

