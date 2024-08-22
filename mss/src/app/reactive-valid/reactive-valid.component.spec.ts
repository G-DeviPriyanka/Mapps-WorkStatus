import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidComponent } from './reactive-valid.component';

describe('ReactiveValidComponent', () => {
  let component: ReactiveValidComponent;
  let fixture: ComponentFixture<ReactiveValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveValidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
