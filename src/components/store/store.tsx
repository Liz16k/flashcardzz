import { combineReducers, createStore } from "redux"
import { libInitialState, modalInitialState } from "./initialStates"
import { loadState, setState } from "./lstorage"
import { libReducer, modalReducer } from "./reducers"

const rootReducer = combineReducers({ modal: modalReducer, lib: libReducer })

export const configureStore = () => {
  const persistedState = {
    lib: libInitialState,
    modal: modalInitialState,
  }
  const store = createStore(rootReducer, persistedState)

  store.subscribe(() => {
    return setState({
      decks: { ...store.getState().lib.decks },
    })
  })
  return store
}
