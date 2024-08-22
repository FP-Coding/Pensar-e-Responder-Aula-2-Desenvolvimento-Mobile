import { Component } from '@angular/core';

@Component({
  selector: 'childOne',
  templateUrl: './child.component.html',
  standalone: true,
  imports: []
})
export class ChildOneComponent {
  client = { nome: 'Felipe', idade: 24}
}
