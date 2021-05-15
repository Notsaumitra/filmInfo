import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmComponent } from './film/film.component';
import { AboutComponent } from './about/about.component';
import { DirectorsComponent } from './directors/directors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UpdateDirectorComponent } from './update-director/update-director.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmComponent,
    AboutComponent,
    DirectorsComponent,
    UpdateDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
