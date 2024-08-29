import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptInterceptor } from './intercept.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { SerService } from './ser.service';
import { LoginComponent } from './login/login.component';
import { CustomDirective } from './custom.directive';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { CourseComponent } from './course/course.component';
import { BnNgIdleModule, BnNgIdleService } from 'bn-ng-idle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { UsertaskComponent } from './usertask/usertask.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ShowComponent,
    LoginComponent,
    CustomDirective,
    AdminComponent,
    UserComponent,
    EditcomponentComponent,
    CourseComponent,
    DashboardComponent,
    AttendanceComponent,
    CertificationsComponent,
    EmployeeComponent,
    TaskmanagerComponent,
    UsertaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  providers: [SerService,BnNgIdleService,{
    
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
