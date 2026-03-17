# Toy-Store-Webapp
Prebuilt toy store web application interface free for commercial use published under Appache 2.0 license built by Veljko Vuckovic following specifications listed in angular collage course


Tech & versions used:
> Built with node.js 22.22.1
> 
> Angular 21.2.2
> 
> Typescript 5.9.2

## Features
- **Dynamic Catalog:** Search and filter toys by name, type, and target group.
- **Product Details:** Dedicated routing for each toy with a "Review Wall".
- **Shopping Cart:** Full CRUD operations on reservations with automated price calculation.
- **Persistent Storage:** LocalStorage integration to keep user data and cart items after page refresh.
- **Auth System:** Mock login/registration system with email validation and profile management.
- **Role-based Actions:** Rating and deletion logic based on order status ('Reserved' vs 'Arrived').

## Project Structure
- `src/app/core`: Services, Models, and Guards (Business logic).
- `src/app/features`: Main application modules (Catalog, Cart, Auth, Details).
- `public/`: Assets and static toy images.

- ## Setup Instructions
1. Clone the repository:
   `git clone https://github.com/Refloow/Toy-Store-Webapp.git`
2. Install dependencies:
   `npm install`
3. Launch the development server:
   `npm start`
4. Open your browser at `http://localhost:4200`

Images used here in the example toy interface display were sourced from google, they might be copyrighted and are soly used for educational non commercial purposes
