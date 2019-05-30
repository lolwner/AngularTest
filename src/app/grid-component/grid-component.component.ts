import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { RedComponentComponent } from '../red-component/red-component.component';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: [
    '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css',
    '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css'
  ],
})
export class GridComponentComponent {
  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
        width: 100
      },
      {
        headerName: 'Value',
        field: 'value',
        cellRendererFramework: RedComponentComponent,
        width: 100
      },

    ];
    this.gridOptions.rowData = [
      { id: 5, value: 10 },
      { id: 10, value: 15 },
      { id: 15, value: 20 }
    ];
  }

}
