import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function UserQuoteInput() {
  const [userQuote, setUserQuote] = useState("")

  function handleUserQuoteBtn() {
    setUserQuote("")
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUserQuoteBtn()
    }
  }

  return (
    <div className="h-40 mt-28 w-full flex justify-center">
      <div className="flex justify-center relative w-3/5">
        <textarea
          onChange={(e) => setUserQuote(e.target.value)}
          onKeyDownCapture={(e) => handleKey(e)}
          value={userQuote}
          placeholder="ESCREVA UMA PODEROSA FRASE AQUI!"
          className="w-full rounded-lg shadow-lg p-4 resize-none"
        />
        <button 
          className="absolute bottom-2 right-4"
          onClick={handleUserQuoteBtn}
        >
          <FontAwesomeIcon className="h-6 text-emerald-500 hover:h-7" icon={faPaperPlane} /> 
        </button>
      </div>
  </div>
  )
}

export default UserQuoteInput