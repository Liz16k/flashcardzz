export const PageTitle = ({ title = "title" }: any) => {
  return (
    <h2 className="p-2 font-bold text-2xl">
      {title}
      <div className="my-2 w-full h-1 bg-gradient-to-r from-cyan-200 to-blue-500"></div>
    </h2>
  )
}
