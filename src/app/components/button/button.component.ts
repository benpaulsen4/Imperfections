import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  anchorReference?: string;

  @Input()
  text!: string;

  @Output()
  buttonClicked = new EventEmitter<void>();
}
