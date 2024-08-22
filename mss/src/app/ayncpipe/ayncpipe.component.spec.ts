import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyncpipeComponent } from './ayncpipe.component';

describe('AyncpipeComponent', () => {
  let component: AyncpipeComponent;
  let fixture: ComponentFixture<AyncpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyncpipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyncpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
