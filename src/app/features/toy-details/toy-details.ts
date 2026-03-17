import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ToyService } from '../../core/services/toy.service';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { Toy } from '../../core/models/toy.model';

@Component({
  selector: 'app-toy-details',
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './toy-details.html',
  styleUrl: './toy-details.scss'
})
export class ToyDetailsComponent implements OnInit {
  toy: Toy | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toyService: ToyService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.toy = this.toyService.getToyById(id);
  }

  reserveToy(): void {
    if (this.authService.isLoggedIn() && this.toy) {
      this.cartService.addToCart(this.toy);
    } else {
      alert('Morate se prijaviti da biste rezervisali igracku!');
      this.router.navigate(['/login']);
    }
  }
}