import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {
    obs=new Observable((listener)=>{
      listener.next("devipriyanka");
      setTimeout(()=>{listener.next("sai") ;
      setTimeout(()=>{listener.next("divya");
      setTimeout(()=>{listener.next("priya");
      setTimeout(()=>{listener.next("ram");

      },1000);
      },1000);
      },1000);
      },1000);
     } );
  
     unsub:any;
    test()
    {
      this.unsub=this.obs.subscribe(
      
        (data: any)=>{console.log(data);},
        (error: any)=>{console.log(error);},
        ()=>{console.log("Completed");}
      )
    }
    unsubfun()
    {
      this.unsub.unsubscribe();
    }
}
