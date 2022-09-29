import { useSelector } from "react-redux"
import { Card } from "./Card"

export const Cards = (deckName: string) => {
  const state = useSelector((state: any) => state.lib)
  return (
    <div className="flex flex-col gap-6 items-center">
      {state.decks[deckName].cards.map(()=>{(<Card />)})}
    </div>
  )
}
