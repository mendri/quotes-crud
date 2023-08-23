import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Quotes from "../Components/Quotes"
import IQuote from "../Interfaces/IQuote"
import mockedQuotes from "../Mock/quotes.json"

function Home() {
  const [quotes, setQuotes] = useState<Array<IQuote>>([])
  const userEmail = localStorage.getItem("user-email")

  async function fetchQuotes() {
    localStorage.setItem("quotes", JSON.stringify(mockedQuotes))
    const response = JSON.parse(localStorage.getItem("quotes") as string)
    setQuotes(response)
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <main className="flex min-h-full w-full">
      <section className="w-4/5 min-h-100vh bg-gradient-to-r from-indigo-600 to-indigo-500 flex flex-col items-center">
        <div className="fixed w-full mt-8 flex justify-center items-center shado">
          <FontAwesomeIcon className="relative left-6" icon={faMagnifyingGlass} />
          <input className="w-2/5 h-7 border-2 text-center rounded-xl bg-slate-100" placeholder="Pesquise um post"/>
        </div>
        <div className="mt-28 w-full flex flex-col justify-evenly items-center">
          {
            quotes.map((element) => {
              return (
                <Quotes key={element._id} quotes_data={element} />
              )
            })
          }
        </div>
      </section>
      <header className="fixed right-0 w-1/5 h-full bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300">
        <a href="/home" className="flex justify-center">
          <img className="hover:" src="src/Images/Quotes-CRUD.png"></img>
        </a>
        <div className="h-2/3 flex flex-col justify-around -mt-6">
          <div className="flex flex-col items-center text-xl font-serif text-slate-500 font-extrabold">
            <a className="hover:text-2xl" href="/home">Home</a>
            <a className="hover:text-2xl" href="/notifications">Notificações</a>
            <a className="hover:text-2xl" href="/profile">Perfil</a>
          </div>
          <div className="flex flex-col items-center text-xl font-serif text-slate-600">
            <p className="text-center">"Ícone do usuário"</p>
            <p className="text-center">"Nome do usuário"</p>
            <p className="text-center">{userEmail}</p>
          </div>
        </div>
      </header>
    </main>
  )
}

export default Home