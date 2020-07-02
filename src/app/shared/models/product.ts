export interface IProduct {
    id: string;
    title: string;
    imageUrl: string;
    author: string;
    finalPrice: number;
    regularPrice: number;
    publisher: string;
    publishedDate: string;
    size: string;
    pageCount: number;
    isTikiNow: boolean;
}

export class Product implements IProduct {
  id: string;
  title: string;
  imageUrl: string;
  author: string;
  finalPrice: number;
  regularPrice: number;
  publisher: string;
  publishedDate: string;
  size: string;
  pageCount: number;
  isTikiNow: boolean;

  constructor(product?: object) {
    for (const key in product) {
      if (product.hasOwnProperty(key)) {
        this[key] = product[key];
      }
    }
  }
}
