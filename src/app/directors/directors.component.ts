import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit, AfterViewInit {
  directors:any;
  display:boolean;

  gen=["male","female","other"];

  constructor(private filSer:FilmService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.showDirectors();
    this.display=true;
  }

  ngAfterViewInit():void{
    
  }

  register:any=this.fb.group({
    name:['',Validators.required],
    age:[null,Validators.required],
    gender:['',Validators.required],
    awards:[null,[Validators.required]]
  })

  
  get name(){
    return this.register.get('name');
  }
  get age(){
    return this.register.get('age');
  }

  get gender(){
    return this.register.get('gender');
  }
  get awards(){
    return this.register.get('awards');
  }

  showDirectors(){
    this.filSer.getDirectors().subscribe(data=>{
      this.directors=data;
      console.log(data);
    })
  }


  onSubmit(register) {
    //console.log(register.value);
    this.filSer.registerDirector(this.register.value).
    subscribe(res=>{
      this.showDirectors();
      console.log(res)})
  }

}
