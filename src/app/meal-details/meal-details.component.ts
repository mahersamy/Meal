import { Component, inject, OnInit } from '@angular/core';
import { MealsService } from '../services/getmeals.service';
import { IMeal } from '../interfaces/imeal';
import { AsideComponent } from "../aside/aside.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-meal-details',
  imports: [AsideComponent, FooterComponent],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent implements OnInit{
    meal!:IMeal;
    ngOnInit(): void {
      this._getmealservices.getMealwithId().subscribe(
        {
          next: (res) => {
            this.meal=res.meals[0];
            console.log(this.meal);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log("compeleted");
          },
        }
      )
    }
    private readonly _getmealservices=inject(MealsService);



}
