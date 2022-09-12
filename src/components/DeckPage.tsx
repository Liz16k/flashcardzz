import { Cards } from "./cards/Cards"

export const DeckPage = () => {
  return (
    <div>
      <button className="mb-8 mt-2 bg-sky-400 text-white font-bold w-4/5 p-2 rounded-3xl block mx-auto hover:bg-blue-500">
        add
      </button>
      <Cards />
    </div>
  )
}
