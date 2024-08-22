import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocomComponent } from './todocom.component';

describe('TodocomComponent', () => {
  let component: TodocomComponent;
  let fixture: ComponentFixture<TodocomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodocomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
