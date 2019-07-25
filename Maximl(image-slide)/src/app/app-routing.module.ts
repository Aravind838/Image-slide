import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSliderComponent } from './image-slider/image-slider.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/image-slider',
    pathMatch: 'full'
  },
  { path: 'image-slider', component: ImageSliderComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
