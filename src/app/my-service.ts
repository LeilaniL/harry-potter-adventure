import { Injectable } from '@angular/core';
import { Character } from './models/character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MyService {
    characters: FirebaseListObservable<any[]>;

    constructor(private database: AngularFireDatabase) {
        this.characters = database.list('characters');
    }
    getCharacters() {
        return this.characters;
    }

    createCharacter(newCharacter) {
        this.characters.push(newCharacter);
    }

}
