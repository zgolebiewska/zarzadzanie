import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhViewComponent } from './seventh-view.component';

describe('SeventhViewComponent', () => {
  let component: SeventhViewComponent;
  let fixture: ComponentFixture<SeventhViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventhViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
