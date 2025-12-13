import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomp } from './mycomp';

describe('Mycomp', () => {
  let component: Mycomp;
  let fixture: ComponentFixture<Mycomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mycomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mycomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
