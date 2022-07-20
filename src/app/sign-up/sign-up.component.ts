import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form =  new FormGroup({

    credential : new FormGroup({

    username: new FormControl('',[Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
    password: new FormControl('',Validators.required)

    })
    
  })

  get username() {
    return this.form.get("credential.username")
  }

  login(){
    console.log(this.form.value)
  }

}
