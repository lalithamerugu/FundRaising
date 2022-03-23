import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
//import { ButtonsComponent } from './components/buttons/buttons.component';


const appRoutes: Routes = [
    { path:' ',redirectTo:'cards',pathMatch:'full' },
  //{ path: 'cards', component: ButtonsComponent },
 { path: 'buttons', component: ButtonsComponent },
 { path: 'cards', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
