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

  @Output() selectModeEvent = new EventEmitter();

  agInit(params: any): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.updateCount.bind(this));
    this.params.api.addEventListener('rowSelected', this.updateCount.bind(this));
  }

  updateCount() {
    this.recordsCount = this.params.api.getDisplayedRowCount();
    this.selectedCount = this.params.api.getSelectedRows().length;
  }

  onSelectionModeClick() {
    if (!this.params.api.columnController.columnApi.getColumn('checkBoxCol').visible) {
      this.params.api.columnController.columnApi.setColumnVisible('checkBoxCol', true);
      return;
    }
    this.params.api.columnController.columnApi.setColumnVisible('checkBoxCol', false);
  }

}
