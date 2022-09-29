import { useDispatch } from "react-redux"
import { Cards } from "./cards/Cards"
import { SHOW_CARD_MODAL } from "./store"

export const DeckPage = (deckName: string) => {
  const dispatch = useDispatch()
  const showModal = () => {
    dispatch(SHOW_CARD_MODAL())
  }
  return (
    <div>
      <button
        onClick={() => showModal()}
        className="mb-8 mt-2 bg-sky-400 text-white font-bold w-4/5 p-2 rounded-3xl block mx-auto hover:bg-blue-500"
      >
        add
      </button>
      <Cards deckName={deckName}/>
    </div>
  )
}
