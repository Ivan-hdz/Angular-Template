import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // TODO los modulos se cargan de fomra perezosa, asi:
  // { path: 'console', loadChildren: () => import('./console/console.module').then(m => m.ConsoleModule) }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
