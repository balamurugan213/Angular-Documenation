import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamletDetailComponent } from './hamlet-detail.component';

describe('HamletDetailComponent', () => {
  let component: HamletDetailComponent;
  let fixture: ComponentFixture<HamletDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamletDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamletDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
