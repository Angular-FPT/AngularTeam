import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:8081/api/products`);
  }

  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:8081/api/products/${id}`);
  }
  getProductById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:8081/api/products/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:8081/api/products`, product);
  }
<<<<<<< HEAD

  uploadImage(image: File): Observable<IProduct> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>('http://localhost:8081/api/images/upload', formData);
  }

  // updateProduct(product: IProduct): Observable<IProduct> {
  //   return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  // }
=======
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`http://localhost:3000/products/${product._id}`, product);
  }
>>>>>>> 1ff7d5b (style: edit-product)
}