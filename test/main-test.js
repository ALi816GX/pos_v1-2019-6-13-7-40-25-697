'use strict';


const barcodes = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];

const barcodes1 = [
];

const barcodes2 = [
    'ITEM0000011',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];


const combineBarcodes = {
    ITEM000001: 5,
    ITEM000003: 2,
    ITEM000005: 3
};


const itemsDeatails = [
    {barcode: "ITEM000001", count: 4, name: "雪碧", price: 3, proCount: 1, prototal: 3, total: 12, unit: "瓶"},
    {barcode: "ITEM000003",count: 2,name: "荔枝", price: 15, proCount: 0, prototal: 0, total: 30, unit: "斤"},
    {barcode: "ITEM000005",count: 2,name: "方便面", price: 4.5, proCount: 1, prototal: 4.5, total: 9, unit: "袋"}
    ];




describe('Test function isBarCodesExist',()=>{
        it('should return true',()=>{

            const result = isBarCodesExist(barcodes);

            expect(result).toBe(true);

        });

    it('should return false',()=>{

        const result = isBarCodesExist(barcodes1);

        expect(result).toBe(false);

    });

    it('should return false',()=>{

        const result = isBarCodesExist(barcodes2);

        expect(result).toBe(false);

    });

    }
);




describe('Test function combineBardoces',()=>{
        it('should return true',()=>{

            let result = combineBardoces(barcodes);

            expect(result).toEqual(combineBarcodes);

        })


    }
);


describe('Test function calculateBardoces',()=>{

        it('should return trueData',()=>{

            let result = calculateBardoces(combineBarcodes);

            expect(result).toEqual(itemsDeatails);

        })
    }
);




describe('pos', () => {

  it('should print text', () => {

    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

//       const expectText = `***<没钱赚商店>收据***
// 名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
// 名称：荔枝，数量：2.5斤，单价：15.00(元)，小计：37.50(元)
// 名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)
// ----------------------
// 总计：58.50(元)
// 节省：7.50(元)
// **********************`;

    const expectText = `***<没钱赚商店>收据***
名称：雪碧，数量：5瓶，单价：3(元)，小计：12(元)
名称：荔枝，数量：2斤，单价：15(元)，小计：30(元)
名称：方便面，数量：3袋，单价：4.5(元)，小计：9(元)
----------------------
总计：51(元)
节省：7.5(元)
**********************`;
    console.log(expectText);
    console.log(printReceipt(barcodes));

    expect(printReceipt(barcodes)).toBe(expectText);
  });

});
