import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

// ADD_TUTORIAL action을 call
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url) {
    // name, url속성을 가진 객체를 받음
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}))
  }

  ngOnInit() {
  }

}
