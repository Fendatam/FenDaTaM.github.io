const txtEl = document.querySelector(".txt");

let lol = 'Lana Del Rey';
let charIndex = 0
updateTxt()

function updateTxt() {
       
        txtEl.innerHTML = `<h1>${lol.slice(0, charIndex)}</h1>`;
        charIndex++;
        setTimeout(updateTxt, 400);
        
};

const activeClass = 'active';
const IMAGES = document.querySelectorAll('.slider'); 
   
IMAGES[2].classList.add(activeClass);

function removeActiveClass() {
        const elm = document.querySelector(`.${activeClass}`);
        if (elm) {
                elm.classList.remove(activeClass);
                }
}

function addClass($event) {
        $event.stopPropagation();
        removeActiveClass();
        const target = $event.currentTarget;
        target.classList.add(activeClass);
}

IMAGES.forEach(image => {
        image.addEventListener('click', addClass);    
})

$(document).ready(function () { 
        $('.fa-bars').click(function () {
                $(this).toggleClass('fa-times');
                $('nav').toggleClass('nav-toggle');

        })
})

const albums = document.querySelectorAll(".album");
const observer = new IntersectionObserver(entries => {
        // console.log(entries);
        entries.forEach(entry => {
                if (entry.isIntersecting) {
                   entry.target.classList.add('show');     
                } else {
                        entry.target.classList.remove('show');
                }
                
        })
}, {
        threshold: 0.01,
})
albums.forEach(album => {
        observer.observe(album);
        
})
