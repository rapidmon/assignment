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
    $carousel.childNodes[1].style.transitionDuration = '500ms';
    $carousel.childNodes[1].style.left = `${document.defaultView.getComputedStyle($carousel.childNodes[5]).getPropertyValue("left")}`;
    $carousel.childNodes[1].style.transform = `${document.defaultView.getComputedStyle($carousel.childNodes[5]).getPropertyValue("transform")}`;
    $carousel.childNodes[1].style.width = `${document.defaultView.getComputedStyle($carousel.childNodes[5]).getPropertyValue("width")}`;
    $carousel.childNodes[1].style.height = `${document.defaultView.getComputedStyle($carousel.childNodes[5]).getPropertyValue("height")}`;
    $carousel.childNodes[1].style.zIndex = `${document.defaultView.getComputedStyle($carousel.childNodes[5]).getPropertyValue("z-index")}`;
    for(let i=5; i>1; i--){
        // console.dir(document.defaultView.getComputedStyle($carousel.childNodes[i+1]).getPropertyValue("transform"))
        $carousel.childNodes[i].style.transitionDuration = '500ms';
        $carousel.childNodes[i].style.width = `${document.defaultView.getComputedStyle($carousel.childNodes[i-1]).getPropertyValue("width")}`;
        $carousel.childNodes[i].style.height = `${document.defaultView.getComputedStyle($carousel.childNodes[i-1]).getPropertyValue("height")}`;
        $carousel.childNodes[i].style.left = `${document.defaultView.getComputedStyle($carousel.childNodes[i-1]).getPropertyValue("left")}`;
        $carousel.childNodes[i].style.transform = `${document.defaultView.getComputedStyle($carousel.childNodes[i-1]).getPropertyValue("transform")}`;
        $carousel.childNodes[i].style.zIndex = `${document.defaultView.getComputedStyle($carousel.childNodes[i-1]).getPropertyValue("z-index")}`;
    }
})

$right.addEventListener("click", function(){
    $carousel.childNodes[5].style.transitionDuration = '500ms';
    $carousel.childNodes[5].style.left = `${document.defaultView.getComputedStyle($carousel.childNodes[1]).getPropertyValue("left")}`;
    $carousel.childNodes[5].style.transform = `${document.defaultView.getComputedStyle($carousel.childNodes[1]).getPropertyValue("transform")}`;
    $carousel.childNodes[5].style.width = `${document.defaultView.getComputedStyle($carousel.childNodes[1]).getPropertyValue("width")}`;
    $carousel.childNodes[5].style.height = `${document.defaultView.getComputedStyle($carousel.childNodes[1]).getPropertyValue("height")}`;
    $carousel.childNodes[5].style.zIndex = `${document.defaultView.getComputedStyle($carousel.childNodes[1]).getPropertyValue("z-index")}`;
    for(let i=4; i>0; i--){
        $carousel.childNodes[i].style.transitionDuration = '500ms';
        $carousel.childNodes[i].style.width = `${document.defaultView.getComputedStyle($carousel.childNodes[i+1]).getPropertyValue("width")}`;
        $carousel.childNodes[i].style.height = `${document.defaultView.getComputedStyle($carousel.childNodes[i+1]).getPropertyValue("height")}`;
        $carousel.childNodes[i].style.left = `${document.defaultView.getComputedStyle($carousel.childNodes[i+1]).getPropertyValue("left")}`;
        $carousel.childNodes[i].style.transform = `${document.defaultView.getComputedStyle($carousel.childNodes[i+1]).getPropertyValue("transform")}`;
        $carousel.childNodes[i].style.zIndex = `${document.defaultView.getComputedStyle($carousel.childNodes[i+1]).getPropertyValue("z-index")}`;
    }
})

