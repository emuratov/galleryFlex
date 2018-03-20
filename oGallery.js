const itemsRow = 3;

let itemsAll = document.getElementsByClassName('oImg');


let lineW = itemsAll[0].width + itemsAll[1].width + itemsAll[2].width;

// console.log(document.body.offsetWidth);
console.log(itemsAll);

if (document.body.offsetWidth < lineW) {
    console.log('true');
} else{
    console.log('false');
}