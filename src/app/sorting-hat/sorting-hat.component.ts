import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service';

@Component({
  selector: 'app-sorting-hat',
  templateUrl: './sorting-hat.component.html',
  styleUrls: ['./sorting-hat.component.css']
})
export class SortingHatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hatSort() {
    let number: number = Math.floor(Math.random() * Math.floor(2));
    console.log(number);
    if (number == 1) {
      alert("Slytherin!")
    } else {
      alert("Gryffindor!")
    }
  }
}
