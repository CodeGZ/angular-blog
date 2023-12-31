import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ContentComponent } from './modules/home/pages/content/content.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  {path:'content/:id', component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
