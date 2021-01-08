import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamletsComponent } from './hamlets.component';

describe('HamletsComponent', () => {
  let component: HamletsComponent;
  let fixture: ComponentFixture<HamletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
