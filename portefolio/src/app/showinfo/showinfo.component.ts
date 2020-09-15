import { Component, OnInit } from '@angular/core';
import {Email,Addresse,Gouvernerat,code} from '../contacter/contacter.component';
var mail:any;
var add:any;
var c:any;
var gouv:any;
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
