import { store } from "./components/store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

export const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}
