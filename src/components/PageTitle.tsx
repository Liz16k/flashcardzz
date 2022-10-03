import { useSelector } from "react-redux"

export const PageTitle = ({ title }: any) => {
  const state = useSelector((state: any) => state.lib)
  return (
    <h2 className="p-2 font-bold text-2xl">
      <div className="flex justify-between">
        <div>{title}</div>
        <div className="px-2 py-1 text-xl text-blue-800 bg-blue-200 rounded-md ">
          {Object.keys(state.decks[title]).length}
        </div>
      </div>
      <div className="my-2 w-full h-1 bg-gradient-to-r from-cyan-200 to-blue-500"></div>
    </h2>
  )
}
