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


describe('Test function isBarCodesExist',()=>{
        it('should return true',()=>{

            const result = isBarCodesExist(barcodes);

            expect(result).toBe(true);

        })

    it('should return false',()=>{

        const result = isBarCodesExist(barcodes1);

        expect(result).toBe(false);

    })

    it('should return false',()=>{

        const result = isBarCodesExist(barcodes2);

        expect(result).toBe(false);

    })
    }
);




describe('Test function combineBardoces',()=>{
        it('should return true',()=>{

            const result = combineBardoces(barcodes);
            console.log(result);
            console.log(combineBarcodes);

            expect(result).toEqual(combineBarcodes);

        })


    }
);



// describe('method1',()=>{
//         it('should return true',()=>{
//
//             const result = judge(2,1);
//
//             console.log(result);
//
//             expect(result).toBe(true);
//
//         })
//     }
// );
//
//
// describe('method2',()=>{
//         it('should return 3',()=>{
//
//             const result = add(2,1);
//
//             console.log(result);
//
//             expect(result).toBe(3);
//
//         })
//     }
// );


// describe('pos', () => {

//   it('should print text', () => {

//     const tags = [
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000003-2.5',
//       'ITEM000005',
//       'ITEM000005-2',
//     ];

//     spyOn(console, 'log');

//     printReceipt(tags);

//     const expectText = `***<没钱赚商店>收据***
// 名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
// 名称：荔枝，数量：2.5斤，单价：15.00(元)，小计：37.50(元)
// 名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)
// ----------------------
// 总计：58.50(元)
// 节省：7.50(元)
// **********************`;

//     expect(console.log).toHaveBeenCalledWith(expectText);
//   });

// });
