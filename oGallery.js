const widthSection = 1200;

const itemsMaxHeight = 60;

document.getElementById('oGallery').style.width = widthSection + 'px';

    let itemsAll = document.getElementsByClassName('oImg');

    for (let i = 0; i < (itemsAll.length) ; i++ ){
        itemsAll[i].style.maxHeight = itemsMaxHeight + 'vh';
    }


    let itemsCount =0;
    let count = 0;
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
            itemsCount = 0;
            count = 0;
        }
    }