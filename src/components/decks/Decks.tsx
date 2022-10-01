import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import { PageTitle } from "../PageTitle"
import { AddDeck } from "./AddDeck"
import { Deck } from "./Deck"

export const Decks = () => {
  const store = useSelector((state:any) => state.lib)
  return (
    <>
      <PageTitle title="my decks" />
      <div className="flex gap-12 flex-wrap justify-center">
        {store.decks
          ? Object.keys(store.decks).map((deck)=>(
              <Deck deckName={deck} key={nanoid(6)} />
            ))
          : null}
        <AddDeck />
      </div>
    </>
  )
}
