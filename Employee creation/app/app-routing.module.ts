import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
 
  {path:'comp1', component: Comp1Component},
  {path:'course/:id',component:CourseComponent},  
  { path: 'show', component: ShowComponent },
  {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    {path:'user',component:UserComponent},
      {path:'editcomponent',component:EditcomponentComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
