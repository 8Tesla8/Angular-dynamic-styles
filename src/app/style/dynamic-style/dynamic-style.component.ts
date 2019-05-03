import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.css']
})
export class DynamicStyleComponent implements OnInit {

  public list: {
    text: string,
    color: string,
    width: number,
    height: number,
  } [] = [];

  constructor() { 
    this.list.push({
      text: 'RED element',
      color: 'red',
      width: 70,
      height: 30,
    });
    this.list.push({
      text: 'BLUE element',
      color: 'blue',
      width: 100,
      height: 30,
    });
    this.list.push({
      text: 'BLACK element',
      color: 'black',
      width: 120,
      height: 30,
    });
  }

  public changeSize(value: number): void{
    this.list.forEach(element => {
      element.height += value;
    });
  }

  
  public buttonRed= false;
  public changeClass(): void{
    this.buttonRed = !this.buttonRed;
  }


  ngOnInit() {
  }

}
