import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthViewComponent } from './fourth-view.component';

describe('FourthViewComponent', () => {
  let component: FourthViewComponent;
  let fixture: ComponentFixture<FourthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
