import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  CourseService(): any[]{
    throw new Error("Method not implemented.");
  }
  constructor() { }

  getRivo(){
    return[
      {id:0, hobby:"Bermain musik", ket:"bermain musik bersama band saya untuk mengisi acara dll"},
      {id:1, hobby:"Bermain game", ket:"menghilangkan bosan dan jenuh dengan bermain game bersama teman"},
      {id:2, hobby:"Tidur", ket:"sering mengantuk"}
    ]
  }
}
