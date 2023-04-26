import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthViewComponent } from './sixth-view.component';

describe('SixthViewComponent', () => {
  let component: SixthViewComponent;
  let fixture: ComponentFixture<SixthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
