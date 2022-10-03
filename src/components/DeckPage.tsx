import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { Cards } from "./cards/Cards"
import { PageTitle } from "./PageTitle"
import { SHOW_CARD_MODAL } from "./store"

export const DeckPage = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.lib)
  const showModal = () => {
    dispatch(SHOW_CARD_MODAL())
  }
  const params: any = useParams()
  const deckName: string = params.deckName.split("-").join(" ")

  return (
    <div>
      {state.decks.hasOwnProperty(deckName) ? (
        <>
          <PageTitle title={deckName} />
          <button
            onClick={() => showModal()}
            className="mb-8 mt-2 bg-sky-400 text-white font-bold w-1/5 p-4 rounded-3xl block mx-auto hover:bg-blue-500"
          >
            add
          </button>
          <Cards deckName={deckName} />
        </>
      ) : (
        <Navigate to="../*" />
      )}
    </div>
  )
}
