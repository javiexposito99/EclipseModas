import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebajasPage } from './rebajas.page';

describe('RebajasPage', () => {
  let component: RebajasPage;
  let fixture: ComponentFixture<RebajasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RebajasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
