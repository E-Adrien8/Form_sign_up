import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor() {
  }

  models: User = new User("", "", "", "")


  onSubmit(): void {
    console.log(this.models);
  }

  ngOnInit(): void {
  }
}


