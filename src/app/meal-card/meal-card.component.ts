import { Component, inject, Input, OnInit } from '@angular/core';
import { MealsService } from '../services/getmeals.service';
import { IMeal } from '../interfaces/imeal';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-meal-card',
  imports: [RouterLink],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss'
})
export class MealCardComponent{


  @Input() myMeals:IMeal[]=[];
  private readonly _getmealservices=inject(MealsService);


  setId(id:string):void{
    this._getmealservices.mealId=id;
    
  }


}
