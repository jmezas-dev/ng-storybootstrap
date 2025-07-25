import { ComponentFixture, TestBed } from '@angular/core/testing';

import CustomTd from './custom-td';

describe('CustomVacancyTd', () => {
  let component: CustomTd;
  let fixture: ComponentFixture<CustomTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
