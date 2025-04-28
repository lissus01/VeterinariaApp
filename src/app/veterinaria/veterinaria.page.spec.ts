import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeterinariaPage } from './veterinaria.page';

describe('VeterinariaPage', () => {
  let component: VeterinariaPage;
  let fixture: ComponentFixture<VeterinariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
