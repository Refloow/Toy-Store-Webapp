import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { UserProfile } from '../../core/models/user.model';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  currentUser: UserProfile | null = null;
  formData: UserProfile = this.getEmptyUser();
  toyTypes = ['slagalica', 'slikovnica', 'figura', 'karakter'];
  
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.updateUserState();
  }

  updateUserState(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.formData = this.currentUser ? { ...this.currentUser } : this.getEmptyUser();
    this.errorMessage = '';
  }

  getEmptyUser(): UserProfile {
    return { id: 0, firstName: '', lastName: '', email: '', phone: '', address: '', favoriteToyTypes: [], password: '' };
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (this.currentUser) {
      // Editovanje profila
      this.authService.updateProfile(this.formData); 
      alert('Profil je uspešno ažuriran!');
      this.updateUserState();

    } else if (this.isLoginMode) {
      // prijava
      const success = this.authService.login(this.formData.email, this.formData.password!);
      if (success) {
        this.updateUserState();
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Pogrešan email ili lozinka. Pokušajte ponovo.';
      }

    } else {
      // Registracija
      const success = this.authService.register(this.formData);
      if (success) {
        alert('Uspešna registracija!');
        this.updateUserState();
      } else {
        this.errorMessage = 'Korisnik sa ovim email-om već postoji!';
      }
    }
  }

  logout(): void {
    this.authService.logout();
    this.updateUserState();
  }
}