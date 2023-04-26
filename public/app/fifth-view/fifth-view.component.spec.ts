import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthViewComponent } from './fifth-view.component';

describe('FifthViewComponent', () => {
  let component: FifthViewComponent;
  let fixture: ComponentFixture<FifthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
