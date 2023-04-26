import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondViewComponent } from './second-view.component';

describe('SecondViewComponent', () => {
  let component: SecondViewComponent;
  let fixture: ComponentFixture<SecondViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
