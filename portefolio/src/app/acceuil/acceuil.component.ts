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
  {title:'DesktopOrganizer',description:'application java qui permet de créer des pages des application à lancer directement',link:'github.com/midoum/DesktopOrganize',image:'2.PNG'},
  {title:'PorteFolio',description:'SiteWeb pour mon CV avec angulair',link:'www.instagram.com',image:'3.PNG'},
  

];
  constructor() { }
  showCv: boolean = true;
  showMotiv:boolean=false;
  toggleCV(){
    this.showCv = !this.showCv;
    this.showMotiv = false;
}
toggleMotiv(){
  this.showMotiv = !this.showMotiv;
  this.showCv = false;
}
  ngOnInit(): void {
  }

}