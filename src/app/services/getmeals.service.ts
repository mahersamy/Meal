import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeal } from '../interfaces/imeal';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/'; // Replace with your actual API URL
  private httpClient=inject(HttpClient)
  filter:string="";
  mealId!:string;

  // Example method to get meals
  getCategory(): Observable<any> {
    return this.httpClient.get(this.apiUrl+"categories.php");
  }

  getAllMeals():Observable<any>{
    // return this.httpClient.get(this.apiUrl+"filter.php?c="+this.filter)
    if(this.filter===""){
      return this.httpClient.get(this.apiUrl+"search.php?s="+this.filter)
    }
    return this.httpClient.get(this.apiUrl+"filter.php?c="+this.filter)
  }

  getMealwithId():Observable<any>{
    return this.httpClient.get(this.apiUrl+"lookup.php?i="+this.mealId)
  }
}
