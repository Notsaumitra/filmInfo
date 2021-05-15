import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-update-director',
  templateUrl: './update-director.component.html',
  styleUrls: ['./update-director.component.css']
})
export class UpdateDirectorComponent implements OnInit {
  isEditable:boolean;
  gen=["male","female","other"];

  constructor(private ser:FilmService, private route:ActivatedRoute, private fb:FormBuilder, private router:Router) { }
  updateDirector:any=this.fb.group({
    _id:[''],
    name:['',Validators.required],
    age:[null,Validators.required],
    gender:['',Validators.required],
    awards:[null,[Validators.required]]
  })


  ngOnInit(): void {
    this.ser.getDirector(this.route.snapshot.params._id).subscribe(data=>{
      console.log(data);
      this.updateDirector=new FormGroup({
        _id:new FormControl(data['_id']),
        name:new FormControl(data['name']),
        age:new FormControl(data['age'],Validators.required),
        gender:new FormControl(data['gender']),
        awards:new FormControl(data['awards'],Validators.required),
      })
      this.isEditable=true;
    })
  }

 

  get age(){
    return this.updateDirector.get('age');
  }

  
  get awards(){
    return this.updateDirector.get('awards');
  }

  onSubmit(form){
    this.router.navigate(['/directors']);
    this.ser.updateDirector(form.value.name,form.value).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }

}
