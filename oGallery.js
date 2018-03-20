const widthSection = 1000;
const itemsMaxHeight = 500;

window.onload = function () {
    document.getElementById('oGallery').style.width = widthSection + 'px';

    let itemsAll = document.getElementsByClassName('oImg');

    for (let i = 0; i < (itemsAll.length) ; i++ ){
        itemsAll[i].style.maxHeight = itemsMaxHeight + 'px';
        itemsAll[i].style.paddingBottom = 2 + 'px';
    }

    let itemsCount =0;
    let count = 0;
    let prewI = 0;
    for (let i = 0; i < (itemsAll.length) ; i++ ){


        // console.log(widthSection);
        // console.log(itemsCount);
        // console.log(itemsAll[i].width);

        if (widthSection > itemsCount) {
            count++;
            itemsCount += itemsAll[i].width;
            console.log('count ', count, 'width ', itemsCount,'item', itemsAll[i]);

        } else
        {
            let itemsMult = (widthSection -5) /itemsCount;
            console.log('prewI', prewI);

            for (let j = prewI; j < i ; j++){
                itemsAll[j].style.maxHeight = (itemsMaxHeight * itemsMult) + 'px';
            }

            prewI = i;
            console.log('prewI', prewI);

            itemsCount = 0;
            count = 0;
            i = i-1;
        }
    }

}





