import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllAnnoncePage } from './all-annonce.page';

describe('AllAnnoncePage', () => {
  let component: AllAnnoncePage;
  let fixture: ComponentFixture<AllAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
