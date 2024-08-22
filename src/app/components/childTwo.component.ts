import { Component } from '@angular/core';

@Component({
  selector: 'childTwo',
  templateUrl: './child.component.html',
  standalone: true,
  imports: []
})
export class ChildTwoComponent {
  client = { nome: 'Eduarda', idade: 22}
}
