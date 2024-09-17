<<<<<<< HEAD
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
import { AdminattendanceComponent } from './adminattendance/adminattendance.component';
import { ObservablesModule } from './observables/observables.module';

import { EmployeeService } from './employee.service';

import { PerformanceReviewComponent } from './performance-review/performance-review.component';


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
    AdminattendanceComponent,
  
    PerformanceReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ObservablesModule
  ],
  providers: [SerService,BnNgIdleService,EmployeeService,{
    
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> master
