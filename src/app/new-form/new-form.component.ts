import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  form = new FormGroup({
    topics : new FormArray([])
  })
  

  get listTopics() {

    return this.form.get('topics') as FormArray;

  }

  addTopic(topic : HTMLInputElement){

    this.listTopics.push(new FormControl(topic.value))
    topic.value=''

  }

  removeTopic(topic : AbstractControl){
    let index = this.listTopics.controls.indexOf(topic);
    this.listTopics.removeAt(index);


  }
  
}
