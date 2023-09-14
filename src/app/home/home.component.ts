import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodBySearchTearm(
          params.searchTerm
        );
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodByTag(params.tag);
      } else {
        this.foods = foodService.getAllImages();
      }
    });
  }

  ngOnInit(): void {}
}
