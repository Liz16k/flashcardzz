import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Cards } from "./cards/Cards"
import { PageTitle } from "./PageTitle"
import { SHOW_CARD_MODAL } from "./store"
import { toAddress } from "./decks/Deck"

export const DeckPage = () => {
  const dispatch = useDispatch()
  const store: { decks: [{ deckName: "string" }] } = useSelector(
    (state: any) => state.lib
  )

  const params = useParams()

  const showModal = () => {
    dispatch(SHOW_CARD_MODAL())
  }
  const index: number = store.decks?.findIndex(
    (deck: any) => toAddress(deck?.deckName) === params.deckName
  )

  return (
    <div>
      <PageTitle title={store.decks[index]?.deckName} />
      <button
        onClick={() => showModal()}
        className="mb-8 mt-2 bg-sky-400 text-white font-bold w-1/5 p-4 rounded-3xl block mx-auto hover:bg-blue-500"
      >
        add
      </button>
      <Cards deckName={params.deckName} index={index} />
    </div>
  )
}
