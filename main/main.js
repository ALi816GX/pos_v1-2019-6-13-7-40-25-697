'use strict';


const isBarCodeExist = (barcode) => {

    const newbarcode = barcode.split("-")[0];
    const itemDatas = loadAllItems();

    let result = false;
    itemDatas.forEach(item => {
        if(newbarcode == item["barcode"]){
            result =  true;
        }
    });

    return result;
};


const isBarCodesExist = (barcodes) => {

    if(barcodes.length == 0){
        return false;
    }

    for(let barcode of barcodes){
        if(!isBarCodeExist(barcode)){
            return false;
        }
    }

    return true;
};

