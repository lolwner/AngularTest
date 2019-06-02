import { Component } from '@angular/core';
import { IToolPanel, IToolPanelParams, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent {

  private params: any;
  private isChecked: boolean;

  agInit(params): void {
    this.params = params;
    this.params.api.addEventListener('rowSelected', this.updateCheckBox.bind(this));
  }

  checkValue(event) {
    if (event.currentTarget.checked) {
      this.params.api.selectAll();
      return;
    }
    this.params.api.deselectAll();
  }
  updateCheckBox() {
    if (this.params.api.getSelectedRows().length > 0) {
      this.isChecked = false;
    }
  }

}
