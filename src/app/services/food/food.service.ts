import { Injectable } from '@angular/core';

import { Food } from '../../shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Food {
    return this.getAllImages().find((food) => food.id == id)!;
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 16 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
      { name: 'Dessert', count: 2 },
    ];
  }

  getAllFoodBySearchTearm(searchTerm: string) {
    return this.getAllImages().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllFoodByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAllImages()
      : this.getAllImages().filter((food) => food.tags?.includes(tag));

    // if (tag == 'All') {
    //   return this.getAllImages();
    // } else {
    //   return this.getAllImages().filter((food) => food.tags?.includes(tag));
    // }
  }

  getAllImages(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Persia', 'Middle East', 'China'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany', 'USA'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgium', 'France'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Pancake',
        price: 6,
        cookTime: '5-10',
        favorite: true,
        origins: ['Greece', 'Rome'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['Dessert'],
      },
      {
        id: 8,
        name: 'Cheesecake',
        price: 4,
        cookTime: '15-20',
        favorite: true,
        origins: ['Greece'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['Dessert'],
      },
    ];
  }
}
