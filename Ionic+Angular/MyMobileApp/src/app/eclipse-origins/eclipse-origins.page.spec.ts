import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EclipseOriginsPage } from './eclipse-origins.page';

describe('EclipseOriginsPage', () => {
  let component: EclipseOriginsPage;
  let fixture: ComponentFixture<EclipseOriginsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EclipseOriginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
