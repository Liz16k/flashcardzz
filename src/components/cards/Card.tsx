export const Card = () => {
  return (
    <div className="text-white flex rounded-xl hover:bg-sky-300">
      <div className="rounded-xl hover:bg-blue-600 hover:text-cyan-200 bg-blue-500 w-96 h-56 flex flex-col justify-center items-center ">
        <h4 className="font-bold text-xl">Question</h4>
        <p className="text-blue-200">answer</p>
      </div>
      <div className="hover:flex p-4 gap-2">
        <span className="material-symbols-outlined cursor-pointer hover:scale-105">
          delete_forever
        </span>
        <span className="material-symbols-outlined cursor-pointer hover:scale-105">
          edit_square
        </span>
      </div>
    </div>
  )
}
