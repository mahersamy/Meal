import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:"home",component:HomeComponent},
    {path:"detail",component:MealDetailsComponent},
    {path:"**",component:HomeComponent}
];
