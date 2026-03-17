# Toy-Store-Webapp
Prebuilt toy store web application interface free for commercial use published under Appache 2.0 license built by Veljko Vuckovic following specifications listed in angular collage course

<div align="center">
  <h1>🧸 UI Video Showcase</h1>
  <a href="https://www.youtube.com/watch?v=yIGibSB-NXg" target="_blank">
    <img src="https://img.youtube.com/vi/yIGibSB-NXg/maxresdefault.jpg" alt="Video Demo" width="600" style="border-radius: 10px;">
  </a>
  <br>
  <p><b><a href="https://www.youtube.com/watch?v=yIGibSB-NXg">Full youtube video showcase</a></b></p>
</div>


## Tech & versions used:
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

## Developer's Note
This project was built strictly according to academic specifications. 
- **State Management:** Uses LocalStorage for simulation purposes.
- **SEO & Performance:** As a standard SPA (Single Page Application), this prototype is not optimized for SEO.
- **Stability:** Due to the heavy reliance on the Angular ecosystem, long-term compatibility depends on the framework's versioning cycle (use exact versions provided in Tech & versions used section)

## License
Licensed under the [Apache License, Version 2.0](LICENSE). 

Built by **Veljko Vuckovic** for the Client-side Web Applications course.


## Disclamer
- Images used here in the example toy interface display were sourced from google, they might be copyrighted and are soly used for educational non commercial purposes


## Showcase Screenshots
<img width="1902" height="945" alt="Screenshot 2026-03-17 204010" src="https://github.com/user-attachments/assets/cfbb0c6a-fcc7-4928-aa0b-0fcf7120a64e" />
<img width="1913" height="944" alt="Screenshot 2026-03-17 194842" src="https://github.com/user-attachments/assets/dc6b9e31-d03a-48b2-b860-f9b22ce653de" />
<img width="2550" height="1252" alt="Screenshot 2026-03-17 200841" src="https://github.com/user-attachments/assets/7dff10c4-bfd2-45b7-916b-8536ecdc712e" />
<img width="1912" height="830" alt="Screenshot 2026-03-17 200606" src="https://github.com/user-attachments/assets/75d31227-b096-418f-9135-f58d9506bd88" />
<img width="1910" height="941" alt="Screenshot 2026-03-17 200738" src="https://github.com/user-attachments/assets/5238e7c1-b1ec-4b4e-be77-38692280d0a2" />



