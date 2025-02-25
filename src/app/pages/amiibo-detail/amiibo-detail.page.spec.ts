import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmiiboDetailPage } from './amiibo-detail.page';

describe('AmiiboDetailPage', () => {
  let component: AmiiboDetailPage;
  let fixture: ComponentFixture<AmiiboDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiiboDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
