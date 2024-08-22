import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1comComponent } from './test1com.component';

describe('Test1comComponent', () => {
  let component: Test1comComponent;
  let fixture: ComponentFixture<Test1comComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test1comComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1comComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
