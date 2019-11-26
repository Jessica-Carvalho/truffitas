import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './services/session.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './pages/public/cadastro/cadastro.module#CadastroPageModule' },
  {
    path: 'recuperar-senha',
    loadChildren: './pages/public/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule'
  },
  {
    path: 'trufa',
    loadChildren: './pages/private/trufa/trufa.module#TrufaPageModule',
    canActivate: [SessionGuard]
  },
  
  { path: 'api', loadChildren: './pages/private/api/api.module#ApiPageModule' }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
