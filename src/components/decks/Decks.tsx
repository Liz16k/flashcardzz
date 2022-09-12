import { AddDeck } from "./AddDeck"
import { Deck } from "./Deck"

export const Decks = () => {
  return (
    <div className="flex gap-12 flex-wrap justify-center">
      <Deck />
      <Deck />
      <Deck />
      <AddDeck/>
    </div>
  )
}
