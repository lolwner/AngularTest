import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderComponent } from './custom-header.component';

describe('CustomHeaderComponent', () => {
  let component: CustomHeaderComponent;
  let fixture: ComponentFixture<CustomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set checkbox to true', () => {
    spyOn(component, 'getSelectedRowsWrapper').and.returnValue(5);
    spyOn(component, 'getDisplayedRowCountWrapper').and.returnValue(5);
    component.updateCheckBox();
    expect(component.isChecked).toBe(true);
  });

  it('should set checkbox to false', () => {
    spyOn(component, 'getSelectedRowsWrapper').and.returnValue(6);
    spyOn(component, 'getDisplayedRowCountWrapper').and.returnValue(5);
    component.updateCheckBox();
    expect(component.isChecked).toBe(false);
  });
});
