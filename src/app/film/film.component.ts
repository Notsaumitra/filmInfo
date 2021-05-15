import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films:any;
  directors:any[];
  dirNames=[];

  constructor(private filmSer:FilmService, private fb: FormBuilder) { }

  register:any=this.fb.group({
    _id:[null,Validators.required],
    name:['',Validators.required],
    boxOfficeCollection:[null,Validators.required],
    rating:[null,Validators.required],
    director:['',[Validators.required]]

  })
  ngOnInit(): void {
    this.showFilms();
    this.getDirectorNames();
  }

  get _id(){
    return this.register.get('_id');
  }

  get name(){
    return this.register.get('name');
  }

  get boxOfficeCollection(){
    return this.register.get('boxOfficeCollection');
  }

  get rating(){
    return this.register.get('rating');
  }

  get director(){
    return this.register.get('director');
  }

  showFilms(){
    this.filmSer.getFilms().subscribe(data=>{
      this.films=data;
      console.log(data);
    })
  }

  onSubmit(register) {
    //console.log(register.value);
    this.filmSer.registerFilm(this.register.value).
    subscribe(res=>{console.log(res)
    this.showFilms();
  })
  }

  getDirectorNames(){
    this.filmSer.getDirectors().subscribe(data=>{
      console.log(data);
      this.directors=data;
      for(let i=0;i<this.directors.length;i++){
        this.dirNames[i]=this.directors[i].name
      }
    })
  }

  showDirNames(){
    console.log(this.dirNames);
    return this.dirNames;
  }

  delFilm(name){
    console.log(name);
    this.filmSer.deleteFilm(name).subscribe(data=>{
      console.log(data);
    this.showFilms();
    })
  }
}
