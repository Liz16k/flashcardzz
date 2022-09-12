export const Deck = ({ title = "Title" }: any) => {
  return (
    <div className="w-56 h-32 p-4 mt-8 rounded-xl flex justify-center items-center bg-blue-400 text-white lowercase text-2xl shadow-[0_-15px_rgba(165,243,352)] cursor-pointer hover:bg-blue-500">
      {title}
    </div>
  )
}
