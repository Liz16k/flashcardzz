import { useSelector } from "react-redux"
import { AddDeck } from "./AddDeck"
import { Deck } from "./Deck"

export const Decks = () => {
  const state = useSelector((state: { lib: { decks: [] } }) => state.lib)
  return (
    <div className="flex gap-12 flex-wrap justify-center">
      {state.decks.map((deck: { deckName: string }) => {
        return <Deck title={deck.deckName} key={deck.deckName} />
      })}
      <AddDeck />
    </div>
  )
}
