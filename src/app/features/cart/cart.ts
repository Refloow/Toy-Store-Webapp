import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CartService } from '../../core/services/cart.service';
import { CartItem } from '../../core/models/toy.model';
import { AuthService } from '../../core/services/auth.service';
import { ToyService } from '../../core/services/toy.service';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule, 
    FormsModule, 
    MatTableModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatIconModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  displayedColumns: string[] = ['name', 'price', 'status', 'rating', 'actions'];

constructor(
  private cartService: CartService, 
  private authService: AuthService, 
  private toyService: ToyService
) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = [...this.cartService.getCartItems()];
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  onStatusChange(item: CartItem, newStatus: 'rezervisano' | 'pristiglo' | 'otkazano'): void {
    this.cartService.updateStatus(item.cartItemId!, newStatus);
    this.loadCart();
  }

  removeItem(cartItemId: number): void {
    this.cartService.removeFromCart(cartItemId);
    this.loadCart();
  }

rateItem(item: CartItem, rating: number): void {
    if (item.status === 'pristiglo' && !item.userRating) {
      item.userRating = rating;
      
      this.cartService.updateRating(item.cartItemId!, rating);

      const user = this.authService.getCurrentUser();
      let reviewerName = 'Anonimni K.';
      if (user) {
        reviewerName = `${user.firstName} ${user.lastName.charAt(0)}.`; 
      }

      this.toyService.addReview(item.id, {
        username: reviewerName,
        rating: rating
      });

      alert('Hvala! Vaša ocena je zabeležena.');
    } else if (item.userRating) {
      alert('Već ste ocenili ovu narudžbinu!');
    }
  }


}