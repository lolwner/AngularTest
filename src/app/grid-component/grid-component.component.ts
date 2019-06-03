import { Component, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from '../core/services/youtube.service';
import { YoutubeResponseModel } from '../models/youtube-response-model';
import { CustomToolbarComponent } from '../custom-toolbar/custom-toolbar.component';
import 'ag-grid-enterprise';
import { GridOptions } from 'ag-grid-community';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: [
    '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css',
    '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css'
  ],
})
export class GridComponentComponent implements OnInit {
  private res: any;
  private items: any;
  private gridOptions: GridOptions;

  sideBar = {
    toolPanels: [
      {
        id: 'Toolbar',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'customToolBarComponent',
      }
    ],
    defaultToolPanel: 'filters'
  };

  frameworkComponents = { customToolBarComponent: CustomToolbarComponent };

  defaultColDef = {
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true,
    sortable: true,
    filter: true
  };

  rowSelection = 'multiple';

  columnDefs = [
    {
      field: '',
      checkboxSelection: true,
      width: 100,
      hide: true,
      colId: 'checkBoxCol',
      headerComponentFramework: CustomHeaderComponent
    },
    {
      headerName: '',
      field: 'thumbnail',
      cellRenderer: function (params) {
        return '<img src=' + params.value + '>';
      }
    },
    {
      headerName: 'Published on',
      field: 'publishedAt'
    },
    {
      headerName: 'Video Title',
      field: 'title',
      cellRenderer: function (params) {
        return '<a href="https://www.youtube.com/watch?v=' + params.data.videoLink + '" target="_blank">' + params.value + '</a>';
      }
    },
    {
      headerName: 'Description',
      field: 'description'
    },

  ];

  getContextMenuItems(params) {
    const result = [
      'copy',
      'copyWithHeaders',
      'paste',
      {
        name: 'Open in new tab',
        action: function() {
          window.open('https://www.youtube.com/watch?v=' + params.node.data.videoLink);
        }
      }

    ];
    return result;
  }

  constructor(private youtubeService: YoutubeService) {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this
      }
    };
  }

  ngOnInit() {
    this.youtubeService.getYoutubeData().subscribe((data: YoutubeResponseModel) => {
      this.res = data.items;
      this.items = this.res.map(x => {
        const model = {
          thumbnail: x.snippet.thumbnails.default.url,
          publishedAt: x.snippet.publishedAt,
          title: x.snippet.title,
          videoLink: x.id.videoId,
          description: x.snippet.description,
        };
        return model;
      });
    });
  }
}
