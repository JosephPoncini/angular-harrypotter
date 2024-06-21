import { Component, OnInit, inject } from '@angular/core';
import { Characters } from '../../interface/ipotter';
import { PotterService } from '../../services/potter.service';
import { NgFor, CommonModule } from '@angular/common';
import { CharacterModalComponent } from '../character-modal/character-modal.component';


@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [NgFor, CommonModule, CharacterModalComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  potterService = inject(PotterService);
  characterList: Characters[] | null = null;
  nameSelected: string | null = null;
  isDivVisible: boolean = false

  loadCharacters() {
    this.potterService.getCharacterList().subscribe((list) => {
      // console.log(list);
      this.characterList = list;
      // console.log(this.characterList)
    });
  }

  setName(userInput: string){
    this.nameSelected = userInput;
    this.isDivVisible = true;
    console.log(userInput);
    // this.loadPokemon();
  }

  turnOffModal(){
    if(this.isDivVisible){
      this.isDivVisible = false;
    }
  }


  ngOnInit() {
    this.loadCharacters();
  }

  // @Input() characterList: Characters | null = null
}
