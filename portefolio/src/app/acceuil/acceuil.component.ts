import { Component, OnInit } from '@angular/core';



import {carte}from './carte';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
cartes:carte[]=[
  {title:'Pfe',description:'Project robot Arduino contrôler par une application java',link:'github.com/midoum/Projet-PFE.git',image:'1.jpg'},
  {title:'DesktopOrganizer',description:'application java qui permet de créer des pages des application à lancer directement',link:'github.com/midoum/DesktopOrganize',image:'2.png'},
  {title:'PorteFolio',description:'SiteWeb pour mon CV avec angulair',link:'github.com/midoum/AngularProject',image:'3.png'},
  {title:'E-shop',description:'SiteWeb pour e-shop avec angulair',link:'midoum.github.io/Echri/.',image:'shop.png'},
  

];
writer(){
  var i=0;
  var j=0;
  var txt = 'PorteFolio de:';
  var txt1='Ahmed Meskine.'
   function write (){
    if(i<txt.length){
      document.getElementById("title1").innerHTML += txt.charAt(i);
     
      i++;
      setTimeout(write, 100);
    }else if(j<txt1.length){
      
      document.getElementById("title2").innerHTML += txt1.charAt(j);
      j++;
      setTimeout(write, 100);
    }
   
  } return write()
  }
  constructor() { 
   
}


  ngOnInit(): void {
    this.writer();
  
}
}