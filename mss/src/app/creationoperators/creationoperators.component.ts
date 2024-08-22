import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { of ,from,range,interval,fromEvent,map,filter, debounceTime, merge, take, pluck,pipe, skip, distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-creationoperators',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './creationoperators.component.html',
  styleUrl: './creationoperators.component.css'
})
export class CreationoperatorsComponent implements OnInit,OnChanges,AfterViewInit {
  
  @ViewChild('en')b:any
  ngAfterViewInit(): void {
    // fromEvent(this.b.nativeElement,'keyup').pipe(debounceTime(5000)).subscribe((data:any)=>console.log(data))
   
  }
  ngOnInit(): void {
  
  //   console.log('ngOnInit')
  //   of(1,2,3,4,5,6,7,8,9,10).pipe(map((data)=>{return data})).subscribe((data)=>console.log(data))
  //   of(1,2,3,4,5,6,7,8,9,10).pipe(filter((data)=>{return data>5})).subscribe((data)=>console.log(data))
//   const obs1=of(2,3,4,5,6)
//   const obs2=from([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8])
//   const obs3=merge(obs1,obs2)
//   obs3.pipe(take(6)).subscribe((data)=>console.log(data))
//  let users=from([
    // {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // },
    // {
    //     "userId": 1,
    //     "id": 2,
    //     "title": "qui est esse",
    //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    // },
    // {
    //     "userId": 1,
    //     "id": 3,
    //     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    // },
    // {
    //     "userId": 1,
    //     "id": 4,
    //     "title": "eum et est occaecati",
    //     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    // },
    // {
    //     "userId": 1,
    //     "id": 5,
    //     "title": "nesciunt quas odio",
    //     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    // },
    // {
    //     "userId": 1,
    //     "id": 6,
    //     "title": "dolorem eum magni eos aperiam quia",
    //     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque"
    //      }])
    // users.pipe(skip(2)).pipe(pluck('title')).subscribe((users) => {console.log(users)});
    // let d=of(8,8,8,8,8,8,9,9,4,5,6,9)
    // d.pipe(distinctUntilChanged()).subscribe((users) => {console.log(users)});
  }
  ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Onchanges')
  //  of(1,2,3,5,6,7,8,9,10,11).subscribe((data)=>console.log(data))
  //  from([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]).subscribe((data)=>console.log(data))
  // range(5,8).subscribe((data)=>console.log(data))
  //  interval(1000).subscribe((data)=>console.log(data))
  // let d= of(1,2,3,4,5,6,7,8,9,10).pipe(map((data)=>{return data}))
  // console.log(d)
  // d.subscribe((data)=>console.log(data))

  }
  
    constructor(private http:HttpClient){
      this.http.get('https://fakestoreapi.com/products/').subscribe((data)=>{console.log(data)});
    }
}

