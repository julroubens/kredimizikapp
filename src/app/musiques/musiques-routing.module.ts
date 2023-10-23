import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusiquesPage } from './musiques.page';
import { MusiqueDetailsPage } from '../musique-details/musique-details.page';

const routes: Routes = [
  {
    path: '',
    component: MusiquesPage,
    children: [
      {
        path: 'musique-details/',
        loadChildren: () => import('../musique-details/musique-details.module').then( m => m.MusiqueDetailsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusiquesPageRoutingModule {}
