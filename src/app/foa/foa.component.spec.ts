import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOAComponent } from './foa.component';

describe('FOAComponent', () => {
  let component: FOAComponent;
  let fixture: ComponentFixture<FOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
