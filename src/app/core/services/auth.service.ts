import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: UserProfile | null = null;
  private registeredUsers: UserProfile[] = [];

  constructor() { 
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }
    const savedUsers = localStorage.getItem('registeredUsers');
    if (savedUsers) {
      this.registeredUsers = JSON.parse(savedUsers);
    }
  }

  login(email: string, pass: string): boolean {
    const user = this.registeredUsers.find(u => u.email === email && u.password === pass);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(user: UserProfile): boolean {
    const exists = this.registeredUsers.find(u => u.email === user.email);
    if (exists) {
      return false;
    }

    user.id = Math.floor(Math.random() * 10000);
    this.registeredUsers.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
    
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }

  updateProfile(user: UserProfile) {
    const index = this.registeredUsers.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.registeredUsers[index] = user;
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
    }
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): UserProfile | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}