import { createReducer, on } from '@ngrx/store'
import { addCard, removeCard } from './card.actions'
import { Card } from '../models/card.model'

export const initialState: Card[] = []

const _cardReducer = createReducer(
	initialState,
	on( addCard, ( state, { card } ) => [ ...state, card ] ),
	on( removeCard, ( state, { card } ) => state.filter( c => c !== card ) )
)

//Reducer for cards state
export function cardReducer( state: Card[] | undefined, action: any ) {
	return _cardReducer( state, action )
}


