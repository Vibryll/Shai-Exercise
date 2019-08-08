import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//New Component 1
import { FirstViewComponent } from './first-view/first-view.component';
//New Component 2
import { SecondViewComponent } from './second-view/second-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

//Add Components here1:
//FIRST STEP: CONFIGURE THE ROUTES:
const routes: Routes = [
  { path: "homePage", component: HomePageComponent},
  { path: "firstView", component: FirstViewComponent}, 
  { path: "secondView", component: SecondViewComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//SECOND STEP: EXPORT CONST ROUTING COMPONENTS ARRAY:
export const routingComponents = [
  HomePageComponent, FirstViewComponent,
  SecondViewComponent, PageNotFoundComponent]
