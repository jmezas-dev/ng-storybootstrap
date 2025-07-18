import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTd } from './textTd';

describe('TextTd', () => {
  let component: TextTd;
  let fixture: ComponentFixture<TextTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
