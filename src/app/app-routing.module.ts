import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dolphin', loadChildren: './dolphin/dolphin.module#DolphinPageModule' },
  { path: 'eagle', loadChildren: './eagle/eagle.module#EaglePageModule' },
  { path: 'hippo', loadChildren: './hippo/hippo.module#HippoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
