import { TableService } from './table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Rivo Fausta Valiano';
  alamat = 'jln. Besar Ijen 77C/E11';

  tanggal = Date.now();

  hby: any[];
  constructor(private tableServ:TableService){}

  ngOnInit() {
    this.hby = this.tableServ.getRivo();
    
  }
}
