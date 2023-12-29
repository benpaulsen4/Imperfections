import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input()
  character!: Observable<Character | null>;

  @Input()
  flag!: Observable<string | null>;
}
