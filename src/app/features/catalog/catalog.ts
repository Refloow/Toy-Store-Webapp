import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

import { ToyService } from '../../core/services/toy.service';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service'; 
import { Toy } from '../../core/models/toy.model';

@Component({
  selector: 'app-catalog',
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    MatCardModule, 
    MatButtonModule, 
    MatInputModule, 
    MatSelectModule, 
    MatFormFieldModule
  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class CatalogComponent implements OnInit {
  toys: Toy[] = [];
  searchTerm: string = '';
  selectedType: string = '';
  selectedTargetGroup: string = '';
  selectedAge: string = '';

  constructor(
    private toyService: ToyService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toys = this.toyService.getAllToys();
  }

  onSearch(): void {
    this.toys = this.toyService.searchToys(this.searchTerm, this.selectedType, this.selectedTargetGroup, this.selectedAge);
  }

  reserveToy(toy: Toy): void {
    if (this.authService.isLoggedIn()) {
      this.cartService.addToCart(toy);
    } else {
      alert('Morate se prijaviti da biste rezervisali igračku!');
      this.router.navigate(['/login']);
    }
  }
}