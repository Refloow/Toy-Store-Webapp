import { Injectable } from '@angular/core';
import { Toy, Review } from '../models/toy.model';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
  private toys: Toy[] = [];

  private defaultToys: Toy[] = [
    { id: 1, name: 'Lego Dvorac', description: 'Veliki dvorac sa vitezovima', type: 'slagalica', age: '8+', targetGroup: 'svi', productionDate: new Date('2023-01-15'), price: 12000, reviews: [{username: 'Marko M.', rating: 5}, {username: 'Jovan K.', rating: 4}, {username: 'Petar T.', rating: 5}] },
    { id: 2, name: 'Barbi Princeza', description: 'Lutka u roze haljini', type: 'figura', age: '3+', targetGroup: 'devojčica', productionDate: new Date('2023-05-10'), price: 3500, reviews: [{username: 'Milica S.', rating: 5}, {username: 'Ana V.', rating: 4}, {username: 'Sanja R.', rating: 3}, {username: 'Jelena P.', rating: 5}] },
    { id: 3, name: 'Spajdermen Akciona', description: 'Figura koja ispaljuje mrežu', type: 'figura', age: '5+', targetGroup: 'dečak', productionDate: new Date('2023-08-20'), price: 2500, reviews: [{username: 'Nikola D.', rating: 5}, {username: 'Filip B.', rating: 5}, {username: 'Luka M.', rating: 4}] },
    { id: 4, name: 'Mali Princ', description: 'Ilustrovana bajka', type: 'slikovnica', age: '3+', targetGroup: 'svi', productionDate: new Date('2022-11-05'), price: 800, reviews: [{username: 'Dragana K.', rating: 5}, {username: 'Ivana J.', rating: 5}, {username: 'Mirjana L.', rating: 4}, {username: 'Zoran P.', rating: 5}] },
    { id: 5, name: 'Drveni vozić', description: 'Edukativna igračka od drveta', type: 'slagalica', age: '2+', targetGroup: 'svi', productionDate: new Date('2021-04-12'), price: 1500, reviews: [{username: 'Stefan N.', rating: 4}, {username: 'Dejan C.', rating: 4}, {username: 'Bojan S.', rating: 5}] },
    { id: 6, name: 'Hot Wheels Staza', description: 'Trkačka staza sa 2 autića', type: 'karakter', age: '6+', targetGroup: 'dečak', productionDate: new Date('2023-10-01'), price: 4500, reviews: [{username: 'Uroš Z.', rating: 5}, {username: 'Miloš V.', rating: 4}, {username: 'Lazar P.', rating: 5}, {username: 'Aleksa K.', rating: 4}] },
    { id: 7, name: 'Plišani Meda', description: 'Veliki mekani medved', type: 'figura', age: '0+', targetGroup: 'svi', productionDate: new Date('2023-12-01'), price: 3000, reviews: [{username: 'Marija N.', rating: 5}, {username: 'Tamara S.', rating: 5}, {username: 'Katarina D.', rating: 5}] },
    { id: 8, name: 'Frozen Zamak', description: 'Zamak sa Elzom i Anom', type: 'slagalica', age: '4+', targetGroup: 'devojčica', productionDate: new Date('2023-07-15'), price: 8500, reviews: [{username: 'Sofija R.', rating: 4}, {username: 'Dunja M.', rating: 5}, {username: 'Nina J.', rating: 5}] },
    { id: 9, name: 'Rubikova Kocka', description: 'Logička slagalica 3x3', type: 'slagalica', age: '8+', targetGroup: 'svi', productionDate: new Date('2022-02-28'), price: 1000, reviews: [{username: 'Nemanja P.', rating: 3}, {username: 'Ilija D.', rating: 4}, {username: 'Vuk T.', rating: 5}, {username: 'Darko R.', rating: 4}] },
    { id: 10, name: 'Dinosaurus T-Rex', description: 'Dinosaurus koji ispušta zvuke', type: 'figura', age: '4+', targetGroup: 'dečak', productionDate: new Date('2023-09-10'), price: 2800, reviews: [{username: 'Pavle K.', rating: 4}, {username: 'Andrej M.', rating: 4}, {username: 'Ognjen V.', rating: 5}] }
  ];

  constructor() { 
    const savedToys = localStorage.getItem('toysData');
    if (savedToys) {
      this.toys = JSON.parse(savedToys);
    } else {
      this.toys = this.defaultToys;
      this.saveToys();
    }
  }

  private saveToys(): void {
    localStorage.setItem('toysData', JSON.stringify(this.toys));
  }

  getAllToys(): Toy[] {
    return this.toys;
  }

  getToyById(id: number): Toy | undefined {
    return this.toys.find(t => t.id === id);
  }

searchToys(searchTerm: string, type: string, targetGroup: string, age: string): Toy[] {
  return this.toys.filter(toy => {
    const matchesKeyword = toy.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           toy.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = type ? toy.type === type : true;
    const matchesGroup = targetGroup ? toy.targetGroup === targetGroup : true;
    const matchesAge = age ? toy.age.includes(age) : true;

    return matchesKeyword && matchesType && matchesGroup && matchesAge;
  });
}

  addReview(toyId: number, review: Review): void {
    const toy = this.getToyById(toyId);
    if (toy) {
      toy.reviews.push(review);
      this.saveToys();
    }
  }
}