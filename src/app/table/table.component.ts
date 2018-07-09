import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  title = 'JSON to Table';

  constructor(private httpService: HttpClient) { }

  data: string [];

  ngOnInit() {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.data = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
