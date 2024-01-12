import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAnnoncePage } from './my-annonce.page';

describe('MyAnnoncePage', () => {
  let component: MyAnnoncePage;
  let fixture: ComponentFixture<MyAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
