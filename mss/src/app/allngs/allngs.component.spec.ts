import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllngsComponent } from './allngs.component';

describe('AllngsComponent', () => {
  let component: AllngsComponent;
  let fixture: ComponentFixture<AllngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllngsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
