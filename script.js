let divChilds;
let grid = 256;
let divFather = document.querySelector('#father');


for (i = 1; i <= grid; i++) {
    divChilds = document.createElement('div');
    divChilds.classList.toggle('div-childs');
    divFather.appendChild(divChilds);
}