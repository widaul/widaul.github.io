const texts = [
  "Backend Developer",
  "Laravel Developer",
  "Node.js Developer",
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = texts[i];

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting) {
    j++;

    if (j > current.length) {
      isDeleting = true;

      setTimeout(type, 1200);

      return;
    }
  } else {
    j--;

    if (j === 0) {
      isDeleting = false;

      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();

window.addEventListener("scroll", () => {
  let winScroll = document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (winScroll / height) * 100;

  document.getElementById("progress").style.width = scrolled + "%";
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
