import { useSelector } from "react-redux"
import { PageTitle } from "../PageTitle"
import { AddDeck } from "./AddDeck"
import { Deck } from "./Deck"

export const Decks = () => {
  const store = useSelector((state: { lib: { decks: [] } }) => state.lib)
  return (
    <>
      <PageTitle title="my decks" />
      <div className="flex gap-12 flex-wrap justify-center">
        {store.decks
          ? store.decks.map((deck: any) => (
              <Deck deckName={deck.deckName} key={deck.deckName} />
            ))
          : null}
        <AddDeck />
      </div>
    </>
  )
}
