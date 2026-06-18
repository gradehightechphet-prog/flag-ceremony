let data = [];
let current = 0;

async function loadData(){

const response =
await fetch(SHEET_URL);

data =
await response.json();

showPage();
}

function showPage(){

document.getElementById("title")
.innerText =
data[current].Title;

document.getElementById("content")
.innerText =
data[current].Content;
}

function nextPage(){

current++;

if(current >= data.length){

current = 0;
}

showPage();
}

function prevPage(){

current--;

if(current < 0){

current = data.length - 1;
}

showPage();
}

loadData();