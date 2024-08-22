import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdestroyComponent } from './ngdestroy.component';

describe('NgdestroyComponent', () => {
  let component: NgdestroyComponent;
  let fixture: ComponentFixture<NgdestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
