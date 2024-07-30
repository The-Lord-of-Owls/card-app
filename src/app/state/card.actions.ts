import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.model';

export const addCard = createAction('[Card] Add Card', props<{ card: Card }>());	//For adding a card to the state
export const removeCard = createAction('[Card] Remove Card', props<{ card: Card }>());	//For removing a card from the state


