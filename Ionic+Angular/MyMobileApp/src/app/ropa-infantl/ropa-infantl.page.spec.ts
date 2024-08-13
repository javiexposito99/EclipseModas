import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RopaInfantlPage } from './ropa-infantl.page';

describe('RopaInfantlPage', () => {
  let component: RopaInfantlPage;
  let fixture: ComponentFixture<RopaInfantlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaInfantlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
