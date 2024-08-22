import { Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list-page.component';
import { ChildOneComponent } from './components/childOne.component';
import { ChildTwoComponent } from './components/childTwo.component';

export const routes: Routes = [
  {
    path: 'client',
    component: ClientListPage,
    children: [
      { path: 'childOne', title: 'Filho Um', component: ChildOneComponent  },
      { path: 'childTwo', title: 'Filho Dois', component: ChildTwoComponent }
    ]
  }
];
