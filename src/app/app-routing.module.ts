import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { HelloComponent } from'./views/hello/hello.component'
import { WorldComponent } from './views/world/world.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "hello",
    component: HelloComponent
  },
  {
    path: "world",
    component: WorldComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
