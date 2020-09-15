import { Component, OnInit } from '@angular/core';
import {Addresse,Email,code,Gouvernerat} from '../contacter/contacter.component';
var mail;
var add;
var c;
var gouv;
@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {
 mail=Email;
 add=Addresse;
 c=code;
 gouv=Gouvernerat;
  constructor() { 
  
  }

  ngOnInit(): void {
   
  }

}
