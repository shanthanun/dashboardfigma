import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'lorem', 'ipsum', 'loremm', 'ipsumm', 'loremmm', 'ipsummm'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 5;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  lorem: string;
  ipsum: string;
  loremm: string;
  ipsumm: string;
  loremmm: string;
  ipsummm: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'lorem', weight: 1.0079, symbol: 'H', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 2, name: 'lorem', weight: 4.0026, symbol: 'He', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 3, name: 'lorem', weight: 6.941, symbol: 'Li', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 4, name: 'lorem', weight: 9.0122, symbol: 'Be', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 5, name: 'lorem', weight: 10.811, symbol: 'B', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 6, name: 'lorem', weight: 12.0107, symbol: 'C', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 7, name: 'lorem', weight: 14.0067, symbol: 'N', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 8, name: 'lorem', weight: 15.9994, symbol: 'O', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 9, name: 'lorem', weight: 18.9984, symbol: 'F', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 10, name: 'lorem', weight: 20.1797, symbol: 'Ne', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 11, name: 'lorem', weight: 22.9897, symbol: 'Na', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 12, name: 'lorem', weight: 24.305, symbol: 'Mg', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 13, name: 'lorem', weight: 26.9815, symbol: 'Al', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 14, name: 'lorem', weight: 28.0855, symbol: 'Si', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 15, name: 'lorem', weight: 30.9738, symbol: 'P', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 16, name: 'lorem', weight: 32.065, symbol: 'S', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 17, name: 'lorem', weight: 35.453, symbol: 'Cl', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 18, name: 'lorem', weight: 39.948, symbol: 'Ar', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 19, name: 'lorem', weight: 39.0983, symbol: 'K', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', lorem: 'data1', ipsum: 'data2', loremm: 'data3', ipsumm: 'data4', loremmm: 'data5', ipsummm: 'data6'}
];
