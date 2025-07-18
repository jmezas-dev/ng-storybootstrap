import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVacancyTd } from './custom-td';

describe('CustomVacancyTd', () => {
  let component: CustomVacancyTd;
  let fixture: ComponentFixture<CustomVacancyTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomVacancyTd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomVacancyTd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
