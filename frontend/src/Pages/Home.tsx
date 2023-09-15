import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Quotes from "../Components/Quotes"
import IQuote from "../Interfaces/IQuote"
import mockedQuotes from "../Mock/quotes.json"
import HeaderQuotesCRUD from "../Components/HeaderQuotesCRUD"
import UserQuoteInput from "../Components/UserQuoteInput"

function Home() {
  const [quotes, setQuotes] = useState<Array<IQuote>>([])

  async function fetchQuotes() {
    localStorage.setItem("quotes", JSON.stringify(mockedQuotes))
    const response = JSON.parse(localStorage.getItem("quotes") as string)
    setQuotes(response)
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <main>
      <HeaderQuotesCRUD />
      <section className="absolute w-4/5 right-0 min-h-100vh bg-gradient-to-r from-indigo-600 to-indigo-500 flex flex-col items-center">
        <div className="fixed w-2/5 mt-8 flex justify-center items-center">
          <FontAwesomeIcon className="relative left-6" icon={faMagnifyingGlass} />
          <input className="w-full h-7 border-2 text-center rounded-xl bg-slate-100" placeholder="Pesquise um post"/>
        </div>
        <UserQuoteInput />
        <div className="mt-6 w-full flex flex-col justify-evenly items-center">
          {
            quotes.map((element) => {
              return (
                <Quotes key={element._id} quotes_data={element} />
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Home