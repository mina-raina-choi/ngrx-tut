import { Injectable } from '@angular/core'
import  { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'

export const ADD_TUTORIAL ='[TUTORIAL] Add'
export const REMOVE_TUTORIAL ='[TUTORIAL] Remove'


// 만약 constructor에서 파라미터로 받을 것이 없다면 굳이 필요없는 부분
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL
    constructor(public payload: Tutorial) { }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL
    constructor(public payload: number) { }
}

export type Actions = AddTutorial | RemoveTutorial