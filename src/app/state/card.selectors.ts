import { createSelector, createFeatureSelector } from '@ngrx/store'
import { Card } from '../models/card.model'

export const selectCards = createFeatureSelector<Card[]>( 'cards' )

export const selectAllCards = createSelector(
	selectCards,
	( cards: Card[] ) => cards
)


