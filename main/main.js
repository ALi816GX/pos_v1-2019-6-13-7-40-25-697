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



const combineBardoces = (barcodes) => {

    return barcodes.reduce((all,one) => {
        const array = one.split("-");
        const barcode = array[0];
        let count = typeof(array[1]) === "undefined" ? 1 : parseFloat(array[1]);
        if (barcode in all) {
            all[barcode] += count;
        }
        else {
            all[barcode] = count;
        }
        return all;

    },{});
};


const calculateBardoces = (barcodes) =>{

    let itemsDeatails = [];

    for(let key in barcodes) {
        itemsDeatails.push(calculateBarcode(key,barcodes[key],));
    }

    return itemsDeatails;

};

const calculateBarcode = (barcode,count) => {

    let result = {};

    const promotion = loadPromotions();
    const itemsData = loadAllItems();


    for(let item of itemsData){
        if(barcode == item["barcode"]){
            result = item;
            result["count"] = count;
            break;
        }
    }

    const proItemList = promotion[0]["barcodes"];

    result["proCount"] = proItemList.includes(barcode) ? Math.floor(result["count"] / 3) : 0;
    result["count"] = result["count"] - result["proCount"];

    result["prototal"] = result["price"] * result["proCount"];
    result["total"] = result["price"] * result["count"];

    return result;

};


const printReceipt = (barcodes) => {

    if(!isBarCodesExist(barcodes)){
        return "Error[barcodes exist unvalid]";
    }

    else{

        let receipt = calculateBardoces(combineBardoces(barcodes));


        let totalAll = 0;
        let proTotalAll = 0;

        let result = `***<没钱赚商店>收据***\n`;

        receipt.forEach((one)=>{
            totalAll += one.total;
            proTotalAll += one.prototal;
            const totalCount = one["count"] + one["proCount"];
            result += `名称：${one.name}，数量：${totalCount}${one.unit}，单价：${one.price.toFixed(2)}(元)，小计：${one.total.toFixed(2)}(元)\n`
        });

        result += `----------------------\n`;
        result += `总计：${totalAll.toFixed(2)}(元)\n`
        result += `节省：${proTotalAll.toFixed(2)}(元)\n`
        result += `**********************`;


        return result;

    }

};









