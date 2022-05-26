//ul, button 생성
const body = document.querySelector("body");

const $input = document.createElement("input");
$input.setAttribute("class", "hidden");
$input.setAttribute("type", "file");
$input.setAttribute("id", "file_upload");
$input.setAttribute("accept", "image/*");
body.appendChild($input);

const $label = document.createElement("label");
$label.setAttribute("class", "upload");
$label.setAttribute("for", "file_upload");
$label.innerText = "이미지 업로드";
body.appendChild($label);

const $div = document.createElement("div");
$div.setAttribute("class", "wrapper");
body.appendChild($div);

const $btn_left = document.createElement('button');
$btn_left.setAttribute("class", "move left");
$btn_left.innerText = "<Prev";
$div.appendChild($btn_left);

const $carousel = document.createElement('ul')
$carousel.setAttribute("class", "carousel");
$div.appendChild($carousel);

const $btn_right = document.createElement('button');
$btn_right.setAttribute("class", "move right");
$btn_right.innerText = "Next>";
$div.appendChild($btn_right);

for(let i=0; i<6; i++){
    const $carousel_list = document.createElement('li');
    $carousel_list.setAttribute("class", "card");
    $carousel.appendChild($carousel_list)
}

let current_angle = 0;

$btn_left.addEventListener("click", ()=>{
    current_angle = current_angle + 360/$carousel.childNodes.length;
    $carousel.style.transform = `rotateY(${current_angle}deg)`
})

$btn_right.addEventListener("click", ()=>{
    current_angle = current_angle - 360/$carousel.childNodes.length;
    $carousel.style.transform = `rotateY(${current_angle}deg)`
})

document.documentElement.style.setProperty('--item-number', $carousel.childNodes.length);

//좋지 못한 html 생성 코드
// body.insertAdjacentHTML("afterbegin", `<ul class="carousel"></ul>`)
// body.insertAdjacentHTML("afterbegin", `<input type="file" class="hidden" id="file_upload" accept="image/*">`)
// body.insertAdjacentHTML("afterbegin", `<label type="file" class="upload" for="file_upload">이미지 업로드</label>`)

//li 생성
// const $carousel = document.querySelector(".carousel")
// $carousel.insertAdjacentHTML("beforeend", `<li class="btn"><button class="move left">&lt;Prev</button></li>`)
// $carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
// $carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
// $carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
// $carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
// $carousel.insertAdjacentHTML("beforeend", `<li class="card"></li>`)
// $carousel.insertAdjacentHTML("beforeend", `<li class="btn"><button class="move right">Next&gt;</button></li>`)