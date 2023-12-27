import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text when text is set', () => {
    const text = 'Click me!';
    component.text = text;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').textContent).toContain(text);
  });

  it('should emit click event when button is clicked', () => {
    const spy = jasmine.createSpy();
    component.click.subscribe(spy);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should use anchor tag when anchor reference is set', () => {
    component.anchorReference = 'https://www.example.com';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a')).toBeTruthy();
  });
});
