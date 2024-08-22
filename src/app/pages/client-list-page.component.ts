import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'client-list-page',
  templateUrl: './client-list-page.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive]

})
export class ClientListPage {
  yourName = new FormControl('')
  clients = [{ nome: 'Felipe', idade: 24, link: 'childOne'}, { nome: 'Eduarda', idade: 22, link: 'childTwo'}]
}
