import { Injectable } from '@angular/core';
import { CartItem, Toy } from '../models/toy.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() { 
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(toy: Toy): void {
    const newItem: CartItem = { ...toy, status: 'rezervisano', cartItemId: Date.now() };
    this.cartItems.push(newItem);
    this.saveCart();
    alert('Igracka je uspesno rezervisana i dodata u korpu!');
  }

removeFromCart(cartItemId: number): void {
    this.cartItems = this.cartItems.filter(item => {
      return item.cartItemId !== cartItemId;
    });
    this.saveCart();
  }

  updateStatus(cartItemId: number, newStatus: 'rezervisano' | 'pristiglo' | 'otkazano'): void {
    const item = this.cartItems.find(i => i.cartItemId === cartItemId);
    if (item && item.status === 'rezervisano') {
      item.status = newStatus;
      this.saveCart();
    }
  }

  updateRating(cartItemId: number, rating: number): void {
    const item = this.cartItems.find(i => i.cartItemId === cartItemId && i.status === 'pristiglo');
    if (item) {
      item.userRating = rating;
      this.saveCart();
    }
  }

getTotalPrice(): number {
    return this.cartItems
      .filter(item => item.status === 'rezervisano')
      .reduce((total, item) => total + item.price, 0);
  }
}