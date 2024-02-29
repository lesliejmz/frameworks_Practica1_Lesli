import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  menu: Food[] = [
    {
      id: 1,
      name: 'pizza',
      description: 'Hawaiana',
      category: 'food',
      image:
        'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      price: 250,
    },
    {
      id: 2,
      name: 'pizza',
      description: 'Peperoni',
      category: 'food',
      image:
        'https://unareceta.com/wp-content/uploads/2016/08/receta-Pizza-pepperoni.jpg',
      price: 250,
    },
    {
      id: 3,
      name: 'spaghetti',
      description: 'spaghetti rojo',
      category: 'food',
      image:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/36C4D0A8-A26C-438B-9871-27ABEABB2E66/Derivates/A94C5717-A483-4ADF-B8AE-6D170994FEA1.jpg',
      price: 250,
    },
    {
      id: 4,
      name: 'Lasaña de pollo',
      description: 'Lasaña de carne molida',
      category: 'food',
      image:
        'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/6594a07290c4cc5ed88f682560cc2e49.jpg',
      price: 150,
    },
    {
      id: 5,
      name: 'Coca cola',
      description: 'Refresco',
      category: 'drink',
      image:
        'https://www.benavides.com.mx/media/catalog/product/cache/13134524bf2f7c32f6bea508eba7e730/5/3/531480_2.jpg',
      price: 20,
    },
    {
      id: 6,
      name: 'Pepsi',
      description: 'Refresco',
      category: 'drink',
      image: 'https://m.media-amazon.com/images/I/51h232yC+zL.jpg',
      price: 25,
    },
    {
      id: 7,
      name: 'café',
      description: 'Café sin azucar',
      category: 'drink',
      image:
        'https://s1.elespanol.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg',
      price: 30,
    },
    {
      id: 8,
      name: 'Fuzetea',
      description: 'Té Negro Frutos Rojos 600 ml ',
      category: 'drink',
      image:
        'https://store.loscorrales.com.mx/cdn/shop/products/FRUTOS1-01_1200x1200.jpg',
      price: 250,
    },
  ];

  constructor() {}

  public getAllFoods(): Food[] {
    return this.menu;
    //return this.http.get<Food[]>('');
  }


  //Regresa una comida
  public getOne(id:number) :Food | undefined {
    return this.menu.find(item =>item.id === id );
  }

  public addFood(food: Food) {
    this.menu.push(food);
  }

  public updateFood(newFood: Food) {
    this.menu.forEach((food, index) => {
      if (food.id == newFood.id) {
        food = newFood;
      }
    });
  }

  public deleteFood(deletefood: Food) {
    console.log(this.menu.length);
    
    this.menu.forEach((food, index)=>{
      if (food.id == deletefood.id) {
        this.menu.splice(index,1);
        console.log(this.menu.length);
        

      }
    })
   
  }
}
