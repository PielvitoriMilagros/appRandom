import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'tab1',loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)},
  // {path: 'tab2',loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)},
  // {path: 'tab3',loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)},

  {path: '',loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},

  {path: 'home',loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {path: 'training',loadChildren: () => import('./pages/training/training.module').then( m => m.TrainingPageModule)},
  {path: 'settings',loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)},
  {path:'**', pathMatch:'full' ,redirectTo:'home'},
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then( m => m.ErrorPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
