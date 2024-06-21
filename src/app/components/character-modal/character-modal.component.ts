import { Component, Input, OnInit, inject } from '@angular/core';
import { Characters } from '../../interface/ipotter';
import { PotterService } from '../../services/potter.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.css'
})
export class CharacterModalComponent {

  @Input() name: string | null = null; // Input property

  potterService = inject(PotterService);
  allCharacterData: Characters[] | undefined = undefined;
  characterData: Characters | undefined = undefined;



  loadCharacter() {
    this.potterService.getCharacterList().subscribe((list) => {
      this.allCharacterData = list;
      this.characterData = list.find((e)=> e.name == this.name)
      console.log(this.characterData);
    });
  }

  ngOnInit() {
    this.loadCharacter();
  }

}
