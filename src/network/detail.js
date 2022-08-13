import { request } from './request.js'
export function getdetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export class Goods {
    constructor(itemInfo, columns, service) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.service = service;
    }
}