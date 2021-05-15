import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DirectorsComponent } from './directors/directors.component';
import { FilmComponent } from './film/film.component';
import { UpdateDirectorComponent } from './update-director/update-director.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/films',
  pathMatch:'full'
},
{
  path:'films',
  component:FilmComponent
},
{
  path:'directors',
  component:DirectorsComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'update/:_id',
  component:UpdateDirectorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
