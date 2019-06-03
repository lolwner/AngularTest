import { Component, EventEmitter, Output } from '@angular/core';
import { IToolPanel, IToolPanelParams, GridOptions } from 'ag-grid-community';
@Component({
  selector: 'app-custom-toolbar-component',
  templateUrl: './custom-toolbar.component.html',
})
export class CustomToolbarComponent {
  private params: any;
  public gridOptions: GridOptions;
  public recordsCount: any;
  public selectedCount: any;

  agInit(params): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.updateCount.bind(this));
    this.params.api.addEventListener('rowSelected', this.updateCount.bind(this));
  }

  getDisplayedRowCountWrapper() {
    return this.params.api.getDisplayedRowCount();
  }

  getSelectedRowsWrapper() {
    return this.params.api.getSelectedRows().length;
  }

  updateCount() {
    this.recordsCount = this.getDisplayedRowCountWrapper();
    this.selectedCount = this.getSelectedRowsWrapper();
  }

  onSelectionModeClick() {
    if (!this.params.api.columnController.columnApi.getColumn('checkBoxCol').visible) {
      this.params.api.columnController.columnApi.setColumnVisible('checkBoxCol', true);
      return;
    }
    this.params.api.columnController.columnApi.setColumnVisible('checkBoxCol', false);
  }

}
