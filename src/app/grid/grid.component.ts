import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../core/services/youtube.service';
import { YoutubeResponseModel } from '../models/youtube-response-model';
import 'ag-grid-enterprise';
import { GridOptions } from 'ag-grid-community';
import { CustomToolbarComponent } from '../custom-toolbar/custom-toolbar.component';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: [
    '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css',
    '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css'
  ],
})
export class GridComponent implements OnInit {
  private res: any;
  private items: any;
  private gridOptions: GridOptions;
  private youtubeEndpoint: string;

  rowSelection = 'multiple';

  frameworkComponents = { customToolBarComponent: CustomToolbarComponent };

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

  columnDefs = [
      {
          field: '',
          checkboxSelection: true,
          width: 50,
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
              return '<a href="' + YoutubeService.youtubeEndpoint +
               params.data.videoLink + '" target="_blank">' + params.value + '</a>';
          }
      },
      {
          headerName: 'Description',
          field: 'description'
      },
  ];

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

  getContextMenuItems(params) {

    if (params.column.colDef.field === 'title') {
      const videoMenu = [
        'copy',
        'copyWithHeaders',
        'paste',
        {
          name: 'Open in new tab',
          action: function () {
            window.open(YoutubeService.youtubeEndpoint + params.node.data.videoLink);
          }
        }
      ];
      return videoMenu;
    }
    const defaultMenu = [
      'copy',
      'copyWithHeaders',
      'paste'
    ];
    return defaultMenu;
  }
}
