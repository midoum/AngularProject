import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portefolio';
constructor(){
  var prevScrollpos = window.pageYOffset;
  
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos<250) {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("brand").style.color = "white";
    document.getElementById("item1").style.color = "white";
    document.getElementById("item2").style.color = "white"; 
  } else {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("brand").style.color = "white";
    document.getElementById("item1").style.color = "white";
    document.getElementById("item2").style.color = "white";
    document.getElementById("item1").style.color = "white";
   
    
   
  }
  prevScrollpos = currentScrollPos;
} 
}
  
  
}
