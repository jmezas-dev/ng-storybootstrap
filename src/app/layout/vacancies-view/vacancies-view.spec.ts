import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesView } from './vacancies-view';

describe('VacanciesView', () => {
  let component: VacanciesView;
  let fixture: ComponentFixture<VacanciesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
