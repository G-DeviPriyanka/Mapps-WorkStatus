import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmarrayComponent } from './formmarray.component';

describe('FormmarrayComponent', () => {
  let component: FormmarrayComponent;
  let fixture: ComponentFixture<FormmarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormmarrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormmarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
