import { combineReducers } from 'redux';

import { peopleReducer as people } from '../bus/people/reducer';
import { planetsReducer as planets } from '../bus/planets/reducer';

export const rootReducer = combineReducers({
    people,
    planets
});
