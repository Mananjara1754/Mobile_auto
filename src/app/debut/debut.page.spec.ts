import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebutPage } from './debut.page';

describe('DebutPage', () => {
  let component: DebutPage;
  let fixture: ComponentFixture<DebutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DebutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
