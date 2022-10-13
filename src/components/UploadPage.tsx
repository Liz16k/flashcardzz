import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import { PageTitle } from "./PageTitle"

export const UploadPage = () => {
  return (
    <div>
      <PageTitle title={"Import from quizlet"} />
      <input
        className="block text-4xl w-4/5 mt-4 px-6 py-2 pb-3 border-2 rounded-2xl focus:outline-blue-500 mx-auto"
        placeholder="enter link"
      />
      <p className="text-center">*paste quizlet link </p>

      <div className="py-4 flex text-white">
        <button
          className="mx-auto bg-blue-500 p-2 w-32 rounded-xl hover:brightness-90"
          type="submit"
        >
          upload
        </button>
      </div>
    </div>
  )
}
