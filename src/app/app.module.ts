import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//THIRD STEP: IMPORT ROUTING COMPONENTS CONST
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    //FOURTH STEP: ADD ROUTING COMPONENTS CONST:
    routingComponents,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
