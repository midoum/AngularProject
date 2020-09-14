import { Component, OnInit } from '@angular/core';
import {Input}from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {
@Input()Motivation:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
