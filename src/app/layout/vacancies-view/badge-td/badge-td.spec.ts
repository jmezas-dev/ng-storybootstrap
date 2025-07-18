import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTd } from './badge-td';

describe('BadgeTd', () => {
  let component: BadgeTd;
  let fixture: ComponentFixture<BadgeTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeTd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeTd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
