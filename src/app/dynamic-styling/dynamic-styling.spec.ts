import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStyling } from './dynamic-styling';

describe('DynamicStyling', () => {
  let component: DynamicStyling;
  let fixture: ComponentFixture<DynamicStyling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicStyling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicStyling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
