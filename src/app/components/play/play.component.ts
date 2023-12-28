import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { ButtonComponent } from "../button/button.component";
import { DataSource, DataSourceToken } from '../../services/data-source.interface';
import { BehaviorSubject, Subject, takeUntil, timer } from 'rxjs';
import { Character } from '../../models/character';

@Component({
    selector: 'app-play',
    standalone: true,
    templateUrl: './play.component.html',
    styleUrl: './play.component.scss',
    imports: [CharacterCardComponent, ButtonComponent]
})
export class PlayComponent implements OnInit, OnDestroy{
    character1 = new BehaviorSubject<Character | null>(null);
    character2 = new BehaviorSubject<Character | null>(null);
    character3 = new BehaviorSubject<Character | null>(null);

    flag1 = new BehaviorSubject<string | null>(null);
    flag2 = new BehaviorSubject<string | null>(null);
    flag3 = new BehaviorSubject<string | null>(null);

    cancelled$ = new Subject<void>();

    constructor(@Inject(DataSourceToken) private dataSource: DataSource){}

    ngOnInit(): void {
        this.getNewOptions();
    }
    
    ngOnDestroy(): void {
        this.cancelled$.next();
        this.cancelled$.complete();
    }

    onNextRound(){
        this.cancelled$.next();
        this.nullifyOldValues();
        this.getNewOptions();
    }

    private getNewOptions(){
        const [char1, char2, char3] = this.dataSource.getThreeCharacters();
        const [flag1, flag2, flag3] = this.dataSource.getThreeFlags();
        timer(500).pipe(takeUntil(this.cancelled$)).subscribe(() => this.character1.next(char1));
        timer(1000).pipe(takeUntil(this.cancelled$)).subscribe(() => this.character2.next(char2));
        timer(1500).pipe(takeUntil(this.cancelled$)).subscribe(() => this.character3.next(char3));

        timer(3500).pipe(takeUntil(this.cancelled$)).subscribe(() => this.flag1.next(flag1));
        timer(4000).pipe(takeUntil(this.cancelled$)).subscribe(() => this.flag2.next(flag2));
        timer(4500).pipe(takeUntil(this.cancelled$)).subscribe(() => this.flag3.next(flag3));
    }

    private nullifyOldValues(){
        this.character1.next(null);
        this.character2.next(null);
        this.character3.next(null);

        this.flag1.next(null);
        this.flag2.next(null);
        this.flag3.next(null);
    }
}
