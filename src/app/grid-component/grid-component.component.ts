import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../core/services/youtube.service';
import { YoutubeResponseModel } from '../models/youtube-response-model';
import { CustomComponentComponent } from '../custom-toolbar/custom-component.component';
import 'ag-grid-enterprise';

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

  sideBar = {
    toolPanels: [
      {
        id: 'Toolbar',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'customComponentComponent',
      }
    ],
    defaultToolPanel: 'filters'
  };

  frameworkComponents = { customComponentComponent: CustomComponentComponent };

  defaultColDef = {
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true,
    sortable: true,
    filter: true
  };

  columnDefs = [
    {
      headerName: 'thumbnail',
      field: 'thumbnail',
      checkboxSelection: true
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

  constructor(private youtubeService: YoutubeService) {
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

  test() {
    debugger;
    console.log("work");
  }

}
