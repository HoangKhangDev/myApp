import { Component } from '@angular/core';
import { Product } from './app.product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      image:
        'https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/mobile/dien-thoai-9.jpg',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      price: '5200000',
      numberProduct: 1,
    },
    {
      id: 2,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-blue-thumbnew-600x600.jpg',
      name: 'Oppo reno 10 128gb',
      description: 'Description for product item number 1',
      price: '4500000',
      numberProduct: 11,
    },
    {
      id: 3,
      image:
        'https://cdn.mediamart.vn/images/product/dien-thoai-oppo-cph2325-a55-den-manh-me-qZC39z.jpg',
      name: 'Oppo CPH2535',
      description: 'Description for product item number 1',
      price: '6100000',
      numberProduct: 3,
    },
  ];
  CountProduct: Number = this.products.length;
  setCountProduct(coutn: Number) {
    this.CountProduct = coutn;
  }
}
