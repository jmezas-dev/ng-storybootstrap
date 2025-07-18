import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownTd } from './drop-down-td';

describe('DropDownTd', () => {
  let component: DropDownTd;
  let fixture: ComponentFixture<DropDownTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownTd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownTd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
