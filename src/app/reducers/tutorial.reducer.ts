import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            console.log("state", state, action.payload)
            // 기존 state배열에 action.payload의 값을 추가한다
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}