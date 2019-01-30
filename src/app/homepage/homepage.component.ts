import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MyService } from '../my-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MyService]
})
export class HomepageComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;

  constructor(private myService: MyService, private router: Router) { }

  ngOnInit() {
    this.characters = this.myService.getCharacters();
  }
  submitForm(name: string, attr: string) {
    let newCharacter: Character = new Character(name, [attr]);
    this.myService.createCharacter(newCharacter);
    let characters = this.myService.getCharacters;

  }

  sorting() {

  }
}
