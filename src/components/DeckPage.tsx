import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useParams } from "react-router-dom"
import { Cards } from "./cards/Cards"
import { PageTitle } from "./PageTitle"
import { SHOW_CARD_MODAL } from "./store/actions"

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
          <div className="flex justify-center gap-8">
            <button
              onClick={() => showModal()}
              className="mb-8 mt-2 text-xl text-blue-800 font-bold w-1/5 p-4 round-3xl shadow-xl shadow-blue-100 rounded-lg hover:text-blue-900 hover:bg-sky-100"
            >
              add
            </button>
            <button className="mb-8 mt-2 text-xl bg-blue-200 text-blue-800 font-bold w-1/5 p-4 round-3xl shadow-xl shadow-blue-100 rounded-lg hover:text-blue-900 hover:bg-blue-300">
              <Link to="learn">learn</Link>
            </button>
          </div>
          <Cards deckName={deckName} />
        </>
      ) : (
        <Navigate to="../*" />
      )}
    </div>
  )
}
