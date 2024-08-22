import { Component, NgModule, ViewChild, ViewChildren } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestpipePipe } from "./testpipe.pipe";
import { RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { NgcontentComponent } from "./ngcontent/ngcontent.component";
import { FormcontrolComponent } from "./formcontrol/formcontrol.component";
import { ReactiveformsComponent } from "./reactiveforms/reactiveforms.component";
import { ReactiveValidComponent } from "./reactive-valid/reactive-valid.component";
import { FormmarrayComponent } from "./formmarray/formmarray.component";
import { AyncpipeComponent } from "./ayncpipe/ayncpipe.component";
import { OnchangesComponent } from "./onchanges/onchanges.component";
import { NgviewComponent } from "./ngview/ngview.component";
import { NgdestroyComponent } from "./ngdestroy/ngdestroy.component";
import { AllngsComponent } from "./allngs/allngs.component";
import { RcustomDirective } from './rcustom.directive';
import { SessionsComponent } from "./sessions/sessions.component";
import { MyformComponent } from "./myform/myform.component";
import { TestModule } from './test/test.module';
import { TestcomComponent } from "./test/testcom/testcom.component";
import { SubjectcomponentComponent } from "./subjectcomponent/subjectcomponent.component";
import { BehaviouralComponent } from "./behavioural/behavioural.component";
import { CreationoperatorsComponent } from "./creationoperators/creationoperators.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, CommonModule, TestpipePipe, RouterModule, AboutComponent, NgcontentComponent, ReactiveformsComponent, ReactiveValidComponent, FormmarrayComponent, AyncpipeComponent, OnchangesComponent, NgviewComponent, NgdestroyComponent, AllngsComponent, RcustomDirective, SessionsComponent, MyformComponent, TestModule, TestcomComponent, SubjectcomponentComponent, BehaviouralComponent, CreationoperatorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent 
{
  show=false;
  dob=new Date();
  name1="devi priyanka"
  counter=0;
  shiva="text";
  title = 'mss';
  city="Hyderabad";
  display=false;
  hidden=false;
  color1="green";
  mystyle={
    color:"blue",
    background:"grey",
    padding:10,
    border:'dotted'
  }
  demo1="this is text"
  demo1update()
  {
    this.demo1="Hyderabad"
  }
  increment()
  {
    this.counter+=1;
  }
  decrement()
  {
    this.counter-=1;
  }
  name="";
  change(e:any)
  {
    this.name=e.target.value;
  }
  place="Banglore";
  modify(e:any)
  {
     this.place=e.target.value;
  }
  link="https://chatgpt.com/";
  replace()
  {
    this.place="USA"
  }
  span=2;
  data=["apple","bat","car"]
  data1=[{
    name:"car",
    price:5200,
    model:"samsung"
  },
  {
    name:"car1",
    price:52001,
    model:"samsung1"
  }
]

 dis={
     "textcolor":true,
     "teststyle":true
 }

op=""
num1=5
num2=5

person={
  name:"Ravi",
  Gender:"m"
}
wish="Good Night";
pdata:any;

@ViewChild(HeaderComponent) header:any
testfun()
{
   console.log(this.header.parent());
}
@ViewChild('day3') header1:any
testfun1()
{
  console.log(this.header1.nativeElement.innerText)
}
@ViewChildren('day3') header2:any
testfun2()
{
  for(let m of this.header2){
  console.log(m.nativeElement.innerText)
  }
}
clients=['ram','pavan','ganesh','sita','divya']
emp=['e1','e2','e3','e4','e5','e6','e7']
test="Hello world!"
}
