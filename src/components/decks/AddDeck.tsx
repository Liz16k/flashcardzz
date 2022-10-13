import { useDispatch } from "react-redux"
import { SHOW_DECK_MODAL } from "../store/actions"

export const AddDeck = () => {
  const dispatch = useDispatch()
  const showModal = () => {
    dispatch(SHOW_DECK_MODAL())
  }
  return (
    <div
      className="w-56 h-32 p-4 mt-8 rounded-xl flex justify-center items-center border-4 border-dashed border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer"
      onClick={() => showModal()}
    >
      <button>
        <span className="material-symbols-outlined text-6xl font-bold">
          add
        </span>
      </button>
    </div>
  )
}
