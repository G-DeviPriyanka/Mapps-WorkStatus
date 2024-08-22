import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgviewComponent } from './ngview.component';

describe('NgviewComponent', () => {
  let component: NgviewComponent;
  let fixture: ComponentFixture<NgviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
