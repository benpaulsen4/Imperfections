import { Component } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-play',
    standalone: true,
    templateUrl: './play.component.html',
    styleUrl: './play.component.scss',
    imports: [CharacterCardComponent, ButtonComponent]
})
export class PlayComponent {

}
