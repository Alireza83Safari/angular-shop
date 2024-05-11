import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'panel/dashboard', pathMatch: 'full' },
  {
    path: 'panel',
    loadChildren: () =>
      import('../app/modules/panel/panel-routing.module').then(
        (m) => m.PanelRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
