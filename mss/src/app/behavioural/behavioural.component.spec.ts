import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviouralComponent } from './behavioural.component';

describe('BehaviouralComponent', () => {
  let component: BehaviouralComponent;
  let fixture: ComponentFixture<BehaviouralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviouralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviouralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
