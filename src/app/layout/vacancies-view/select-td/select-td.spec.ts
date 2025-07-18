import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTd } from './select-td';

describe('SelectTd', () => {
  let component: SelectTd;
  let fixture: ComponentFixture<SelectTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
