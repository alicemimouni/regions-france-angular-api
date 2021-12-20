import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartementsByRegionComponent } from './departements-by-region/departements-by-region.component';
import { DepartementsComponent } from './departements/departements.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    DepartementsByRegionComponent,
    DepartementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, //pour les requetes http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
