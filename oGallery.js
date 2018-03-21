// https://github.com/emuratov/galleryFlex

const widthSection = 1000;  //px
const itemsMaxHeight = 400; //px
const bgColor = 'gray';
const offsetButtom = '1';   //px


window.onload = function () {
    document.getElementById('oGallery').style.width = widthSection + 'px';
    document.getElementById('oGallery').style.backgroundColor = bgColor;
    document.getElementById('oGallery').style.display = 'flex';
    document.getElementById('oGallery').style.flexDirection = 'row';
    document.getElementById('oGallery').style.flexWrap = 'wrap';
    document.getElementById('oGallery').style.justifyContent = 'start';

    let itemsAll = document.getElementsByClassName('oImg');
    for (let i = 0; i < (itemsAll.length) ; i++ ){
        itemsAll[i].style.maxHeight = itemsMaxHeight + 'px';
        itemsAll[i].style.paddingBottom = offsetButtom + 'px';
    }

    let itemsCount =0;
    let count = 0;
    let prewI = 0;
    for (let i = 0; i < itemsAll.length; i++ ){
        if (widthSection > itemsCount ) {
            count++;
            itemsCount += itemsAll[i].width;
        } else
        {
            let itemsMult = (widthSection-2) /itemsCount;
            for (let j = prewI; j < i ; j++){
                itemsAll[j].style.maxHeight = (itemsMaxHeight * itemsMult) + 'px';
            }
            prewI = i;
            itemsCount = 0;
            count = 0;
            i = i-1;
        }
    }

    if (itemsAll.length - prewI > 1){
        let itemsMult;
        for (let j = prewI; j < itemsAll.length ; j++){
            itemsMult = (widthSection-2) /itemsCount;
        }
        for (let j = prewI; j < itemsAll.length ; j++){
            itemsAll[j].style.maxHeight = (itemsMaxHeight * itemsMult) + 'px';
        }
    }
}