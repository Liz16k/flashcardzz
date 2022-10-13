export const loadState = () => {
  try {
    const savedState = localStorage.getItem("state")
    if (savedState === null) return undefined
    return JSON.parse(savedState)
  } catch (error) {
    return undefined
  }
}
export const setState = (state: any) => {
  try {
    const stateToSave = JSON.stringify(state)
    localStorage.setItem("state", stateToSave)
  } catch (error) {
    console.log(error)
  }
}
