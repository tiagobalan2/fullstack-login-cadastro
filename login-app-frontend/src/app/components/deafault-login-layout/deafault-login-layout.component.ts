import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deafault-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './deafault-login-layout.component.html',
  styleUrl: './deafault-login-layout.component.scss'
})
export class DeafaultLoginLayoutComponent {
  @Input()  buttonText: string = "";
  @Input()  pText: string = "";
  @Input()  spanText: string = "";
  @Input()  disabledButton: boolean = true;

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }

}
