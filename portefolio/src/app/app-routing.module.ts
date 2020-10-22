import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent} from "./acceuil/acceuil.component";
import { ContacterComponent} from "./contacter/contacter.component";
import {FooterComponent} from "./footer/footer.component";



const routes: Routes = [
{ path: "footer",   component:FooterComponent },
{ path: '',   redirectTo:"acceuil", pathMatch: 'full' },
{path:"acceuil",component: AcceuilComponent},
{path:"contacter",component: ContacterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
