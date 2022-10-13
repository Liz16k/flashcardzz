export type DeckType = { question: string; answer: string; deckName: string }
export type libType = {
  decks: { [deckName: string]: { [cardId: string]: DeckType } }
}
