import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomToolbarComponent } from '../custom-toolbar/custom-toolbar.component';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { YoutubeService } from '../core/services/youtube.service';
import { HttpClientModule } from '@angular/common/http';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let params: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent, CustomToolbarComponent, CustomHeaderComponent],
      imports: [HttpClientModule, AgGridModule.withComponents([GridComponent, CustomToolbarComponent, CustomHeaderComponent])],
      providers: [YoutubeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return video menu', () => {
    params = {
      column: {
        colDef: {
          field: 'title'
        }
      }
    };
    const videoMenu = [
      'copy',
      'copyWithHeaders',
      'paste',
      {
        name: 'Open in new tab',
        action: function () {
          window.open('');
        }
      }
    ];
    expect(component.getContextMenuItems(params) === videoMenu);
  });

  it('should return default menu', () => {
    params = {
      column: {
        colDef: {
          field: 'some field'
        }
      }
    };
    const defaultMenu = [
      'copy',
      'copyWithHeaders',
      'paste'
    ];
    expect(component.getContextMenuItems(params) === defaultMenu);
  });


});
