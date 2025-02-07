import { Component, ElementRef, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MealsService } from '../services/getmeals.service';
import { ICategory } from '../interfaces/icategory';
import { MealCardComponent } from "../meal-card/meal-card.component";
import { AsideComponent } from "../aside/aside.component";
import { RouterLink } from '@angular/router';
import { IMeal } from '../interfaces/imeal';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [MealCardComponent, AsideComponent, RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChildren('cateItem') myLinks!: QueryList<ElementRef<HTMLAnchorElement>>;
  category:ICategory[]=[];
  homeMeals:IMeal[]=[];
  text:string="hi samy";
  private readonly _getmealservices=inject(MealsService);

  getCategories() {

    this._getmealservices.getCategory().subscribe(
      {
        next: (res) => {
          this.category=[{idCategory:"0",strCategory:"All",strCategoryThumb:"",strCategoryDescription:""},...res.categories];
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

  getMeals(){
    this._getmealservices.getAllMeals().subscribe(
      {
        next: (res) => {
          this.homeMeals=res.meals;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log("compeleted");
        },
      }
    );
  }

  ngOnInit(): void {
    this.getCategories();
    this.getMeals()
  }


  changeCategory(event:MouseEvent){
    const anchorElement = event.target as HTMLAnchorElement;
    const anchorText = anchorElement.innerText;
    this.myLinks.forEach((e)=>{
      e.nativeElement.classList.remove("active-category")
    })
    anchorElement.classList.add("active-category");
    this._getmealservices.filter=anchorText==="All"?'':anchorText;
    this.getMeals();

  }
}
