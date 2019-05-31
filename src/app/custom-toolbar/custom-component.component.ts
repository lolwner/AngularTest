import { Component, EventEmitter, Output } from '@angular/core';
import { IToolPanel, IToolPanelParams, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
})
export class CustomComponentComponent {
  private params: any;
  public gridOptions: GridOptions;

  @Output() selectModeEvent = new EventEmitter();
  agInit(params: any): void {
    this.params = params;
  }

  onSelectionModeClick() {
    this.selectModeEvent.emit();
    // const columnDefs = this.gridOptions;
    // debugger;
    // columnDefs.push({ field: 'SOME RANDOM', headerName: 'SOME RANDOM' });
    //$scope.gridOptions.api.setColumnDefs(columnDefs);
  }

}
