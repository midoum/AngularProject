import { Component, OnInit } from '@angular/core';

import {gouver}from './gouver';

@Component({
  selector: 'app-contacter',
  templateUrl: './contacter.component.html',
  styleUrls: ['./contacter.component.css']
})
export class ContacterComponent implements OnInit {
 
 gouvers:gouver[]=[
   {name:'Monastir'},
   {name:'Sousse'},
   {name:'Mahdia'},
    {name:'Ariana'},	
	  {name:'Béja'},	
  { name:'Ben Arous'},	
  {name:'Bizerte'},	
	{name:'Gabès'},		
	{name:'Gafsa'},	
	{name:'Jendouba'},		
	{name:'Kairouan'},		
	{name:'Kasserine'},	
	{name:'Kebili'},		
	{name:'Kef'},		
  	
		
  {name:'anouba'},	
  {name:'Medenine'},		
	{name:'Nabeul'},		
		
	{name:'sidi Bouzid	'},		
	{name:'Siliana'},		
	{name:'Sfax'},	
	{name:'Tataouine'},		
	
  {name:'Tozeur'},
  {name:'Tunis'},					
  {name:'Zaghouan'},	
		
 ]
   
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
