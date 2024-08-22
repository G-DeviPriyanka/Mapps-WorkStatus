import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteguardsComponent } from './routeguards.component';

describe('RouteguardsComponent', () => {
  let component: RouteguardsComponent;
  let fixture: ComponentFixture<RouteguardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteguardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteguardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
