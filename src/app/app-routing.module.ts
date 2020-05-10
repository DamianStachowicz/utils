import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalsDemoComponent } from './modals-demo/modals-demo.component';

const routes: Routes = [
  { path: 'modals', component: ModalsDemoComponent },
  { path: '', redirectTo: '/modals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
