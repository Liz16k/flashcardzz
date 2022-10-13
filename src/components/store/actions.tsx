//actions
export const SHOW_DECK_MODAL = () => ({
  type: "SHOW_DECK_MODAL",
})
export const SHOW_CARD_MODAL = (cardId?: string, deckName?: string) => ({
  type: "SHOW_CARD_MODAL",
  cardId,
  deckName,
})
export const HIDE_MODAL = () => ({
  type: "HIDE_MODAL",
})

//---------------
export const ADD_CARD = (
  deckName: string,
  question: string,
  answer: string,
  cardId: string
) => ({
  type: "ADD_CARD",
  deckName,
  answer,
  question,
  cardId,
})
export const ADD_DECK = (deckName: string) => ({
  type: "ADD_DECK",
  deckName,
})
export const REMOVE_CARD = (cardId: string, deckName: string) => ({
  type: "REMOVE_CARD",
  cardId,
  deckName,
})
export const REMOVE_DECK = (deckName: string) => ({
  type: "REMOVE_DECK",
  deckName,
})
