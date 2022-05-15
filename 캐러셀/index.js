const body = document.querySelector("body")

body.insertAdjacentHTML("afterbegin", `<ul class="carousel"></ul>`)
body.insertAdjacentHTML("afterbegin", `<ul class="carousel_copy"></ul>`)
body.insertAdjacentHTML("afterbegin", `<button class="upload">이미지 업로드</button>`)

const $carousel = document.querySelector(".carousel")
$carousel.insertAdjacentHTML("beforeend", `<li class="btn"><button class="move left">&lt;Prev</button></li>`)
$carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
$carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
$carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
$carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
$carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
$carousel.insertAdjacentHTML("beforeend", `<li class="btn"><button class="move right">Next&gt;</button></li>`)

const $left = document.querySelector(".left")
const $right = document.querySelector(".right")

$left.addEventListener("click", function(){
    for(let i=0; i<5; i++){
        $carousel.childNodes[i].style.transitionDuration = '500ms';
        $carousel.childNodes[i].style.transform = `translateX() perspective(800px) rotateY(-80deg)`;
    }
})

$right.addEventListener("click", function(){

})

