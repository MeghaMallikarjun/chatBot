import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  btnName = 'Request';
  constructor() { }

  ngOnInit(): void {
  }
  
  onRequest(){
    const vm = this;
    vm.btnName = 'Requested'
  }
}
