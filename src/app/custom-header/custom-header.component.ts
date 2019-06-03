import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html'
})
export class CustomHeaderComponent {

  private params: any;
  public isChecked: boolean;

  agInit(params): void {
    this.params = params;
    this.params.api.addEventListener('rowSelected', this.updateCheckBox.bind(this));
  }

  checkValue(event) {
    if (event.currentTarget.checked) {
      this.params.api.selectAll();
      this.isChecked = true;
      return;
    }
    this.params.api.deselectAll();
  }

  getSelectedRowsWrapper() {
    return this.params.api.getSelectedRows().length;
  }

  getDisplayedRowCountWrapper() {
    return this.params.api.getDisplayedRowCount();
  }


  updateCheckBox() {
    if (this.getSelectedRowsWrapper() === this.getDisplayedRowCountWrapper()) {
      this.isChecked = true;
      return;
    }
    if (this.getSelectedRowsWrapper() > 0) {
      this.isChecked = false;
    }
  }

}
