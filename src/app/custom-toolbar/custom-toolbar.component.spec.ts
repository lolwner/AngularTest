import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToolbarComponent } from './custom-toolbar.component';

describe('GridComponentComponent', () => {
  let component: CustomToolbarComponent;
  let fixture: ComponentFixture<CustomToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomToolbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update DisplayedRowCount', () => {
    spyOn(component, 'getDisplayedRowCountWrapper').and.returnValue(5);
    spyOn(component, 'getSelectedRowsWrapper').and.returnValue(5);
    component.updateCount();
    expect(component.recordsCount === 5);
  });

  it('should update SelectedRows', () => {
    spyOn(component, 'getDisplayedRowCountWrapper').and.returnValue(5);
    spyOn(component, 'getSelectedRowsWrapper').and.returnValue(5);
    component.updateCount();
    expect(component.selectedCount === 5);
  });
});
