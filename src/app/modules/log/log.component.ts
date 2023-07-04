import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/service/employe.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  dataSource: MatTableDataSource<any> | undefined;
  logEntries: any[] = [];

  constructor(private logService: EmployeService) {}

  ngOnInit() {
    this.getLogEntries();
  }

  getLogEntries() {
    this.logService.getLogEntries().subscribe(
      (data) => {
        this.logEntries = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching log entries:', error);
      }
    );
  }
}
