import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import { By } from '@angular/platform-browser';
import { DataSourceToken } from '../../services/data-source.interface';
import { MockDataSourceService } from '../../services/mock-data-source.service';
import { ButtonComponent } from '../button/button.component';
import { CharacterCardComponent } from '../character-card/character-card.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayComponent, CharacterCardComponent, ButtonComponent],
    providers: [{provide: DataSourceToken, useClass: MockDataSourceService}]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display three cards', () => {
    fixture.detectChanges();
    const cardElements = fixture.debugElement.queryAll(By.css('app-character-card'));

    expect(cardElements.length).toBe(3);
  });

  it('should display the correct characters and flags', () => {
    component.character1.next({name: "Me", franchise: "irl"});
    component.character2.next({name: "You", franchise: "irl"});
    component.character3.next({name: "Us", franchise: "irl"});
    component.flag1.next("a flag");
    component.flag2.next("other flag");
    component.flag3.next("more different flag");
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.character p')[0].textContent).toContain("Me");
    expect(fixture.nativeElement.querySelectorAll('.character p')[1].textContent).toContain("You");
    expect(fixture.nativeElement.querySelectorAll('.character p')[2].textContent).toContain("Us");

    expect(fixture.nativeElement.querySelectorAll('.red-flag')[0].textContent).toContain("a flag");
    expect(fixture.nativeElement.querySelectorAll('.red-flag')[1].textContent).toContain("other flag");
    expect(fixture.nativeElement.querySelectorAll('.red-flag')[2].textContent).toContain("more different flag");
  });
});
