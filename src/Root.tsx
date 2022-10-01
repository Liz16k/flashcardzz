import { configureStore } from "./components/store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

export const Root = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}
