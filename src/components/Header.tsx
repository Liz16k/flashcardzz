export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white">
      <nav className="flex justify-between max-w-screen-lg mx-auto">
        <p className="nav-link">flashcardzz</p>
        <div className="w-1/4 flex gap-4 py-1 px-2">
          <button className="flex justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
          <input
            className="bg-transparent placeholder:text-white rounded-md px-2"
            type="text"
            placeholder="Search..."
          />
        </div>
        <ul className="flex gap-4 font-bold">
          <li className="nav-link">add</li>
          <li className="nav-link">decks</li>
          <li className="nav-link">signUp</li>
        </ul>
      </nav>
    </header>
  )
}
