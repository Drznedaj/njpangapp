import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  user123: User = {
    id: 0,
    username: '',
    password: ''
  };
  currentUser: User;

  constructor() { }

  ngOnInit() {
  }

}
