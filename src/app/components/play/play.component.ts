import { Component, Inject, OnInit, signal } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { ButtonComponent } from "../button/button.component";
import { DataSource, DataSourceToken } from '../../services/data-source.interface';
import { MockDataSourceService } from '../../services/mock-data-source.service';
import { BehaviorSubject, from, takeUntil } from 'rxjs';
import { Character } from '../../models/character';

@Component({
    selector: 'app-play',
    standalone: true,
    templateUrl: './play.component.html',
    styleUrl: './play.component.scss',
    imports: [CharacterCardComponent, ButtonComponent],
    providers: [{provide: DataSourceToken, useClass: MockDataSourceService}]
})
export class PlayComponent implements OnInit{
    character1 = new BehaviorSubject<Character | null>(null);
    character2 = new BehaviorSubject<Character | null>(null);
    character3 = new BehaviorSubject<Character | null>(null);

    flag1 = new BehaviorSubject<string | null>(null);
    flag2 = new BehaviorSubject<string | null>(null);
    flag3 = new BehaviorSubject<string | null>(null);

    constructor(@Inject(DataSourceToken) private dataSource: DataSource){}

    ngOnInit(): void {
        this.getNewOptions();
    }

    onNextRound(){
        this.getNewOptions();
    }

    private getNewOptions(){
        const [char1, char2, char3] = this.dataSource.getThreeCharacters();
        const [flag1, flag2, flag3] = this.dataSource.getThreeFlags();
        this.character1.next(char1);
        this.character2.next(char2);
        this.character3.next(char3);

        this.flag1.next(flag1);
        this.flag2.next(flag2);
        this.flag3.next(flag3);
    }
}
