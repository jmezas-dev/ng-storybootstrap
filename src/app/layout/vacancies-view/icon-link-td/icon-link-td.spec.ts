import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLinkTd } from './icon-link-td';

describe('IconLinkTd', () => {
  let component: IconLinkTd;
  let fixture: ComponentFixture<IconLinkTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLinkTd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLinkTd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
