import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Characters } from '../interface/ipotter';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  http = inject(HttpClient);

  getCharacterList() {
    return this.http.get<Characters[]>(`https://potterhead-api.vercel.app/api/characters`)
  }

  getCharacterData( name:string) {
    return this.http.get<Characters>(`https://potterhead-api.vercel.app/api/characters/${name}`)
  }
}
