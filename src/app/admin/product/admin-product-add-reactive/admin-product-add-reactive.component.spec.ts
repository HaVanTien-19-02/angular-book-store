import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductAddReactiveComponent } from './admin-product-add-reactive.component';

describe('AdminProductAddReactiveComponent', () => {
  let component: AdminProductAddReactiveComponent;
  let fixture: ComponentFixture<AdminProductAddReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductAddReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
