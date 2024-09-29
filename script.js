let arrButton = document.querySelectorAll('.bt-option');
let addArrButton = document.querySelectorAll('.add-bt-option');

let script = document.querySelectorAll('.script');
let list = document.querySelectorAll('.list');
let align = document.querySelectorAll('.align');
let dent = document.querySelectorAll('.dent');

let inputField = document.querySelector('.inputField');

let fontName = document.getElementById('fontName');
let fontSize = document.getElementById('fontSize');
let createLink = document.getElementById('createLink');


let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

function start() {


    activated(script);
    activated(list);
    activated(align);
    activated(dent);

    fontList.forEach((value) => {
        let option = document.createElement('option');
        option.value = value;
        option.innerHTML = value;
        fontName.append(option);
    });

    for( let i = 1; i <= 7; i++){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        fontSize.append(option);
    }

}



arrButton.forEach((button) => {
    button.addEventListener('click', () => {
        document.execCommand(button.id, false, null);
    })
});

addArrButton.forEach((button) => {
    button.addEventListener('change', () => {
        document.execCommand(button.id, false, button.value);
    })
});

createLink.addEventListener('click', () => {

        document.execCommand(createLink, false, value);
   
});

function activated(value) {
    value.forEach((element) => {
        element.addEventListener('click', () => {
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
            else{
                removeClassActive(value);
                element.classList.add('active');
            }
        })
    })
}

function removeClassActive(value){
    value.forEach((element) => {
        element.classList.remove('active');
    });
}

start();