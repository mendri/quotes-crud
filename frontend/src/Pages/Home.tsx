import { useSelector } from "react-redux"
import { RootState } from "../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function Home() {
  const userEmail = useSelector((state: RootState) => state.user.email)
  console.log(userEmail)

  return (
    <main className="flex h-full w-full">
      <header className="w-1/5 bg-gradient-to-b from-white via-slate-200 to-white">
        <div className="flex justify-center">
          <img src="src/Images/Blog-CRUD-logo.png"></img>
        </div>
        <div className="h-2/3 flex flex-col justify-around -mt-6">
          <div className="flex flex-col items-center text-xl font-serif text-slate-500 font-extrabold">
            <a href="/home">Home</a>
            <a href="/notifications">Notificações</a>
            <a href="/search">Procurar</a>
            <a href="/profile">Perfil</a>
          </div>
          <div className="flex flex-col items-center text-xl font-serif text-slate-600">
            <p>"Ícone do usuário"</p>
            <p>"Nome do usuário"</p>
            <p>{userEmail}</p>
          </div>
        </div>
      </header>
      <section className="w-4/5 bg-sky-300 flex flex-col items-center">
        <div className="w-full mt-4 flex justify-center items-center">
          <FontAwesomeIcon className="relative left-6" icon={faMagnifyingGlass} />
          <input className="w-3/5 h-7 text-center rounded-xl" placeholder="Pesquise um post"/>
        </div>
        <article>
          <h1>Olá mundo</h1>
        </article>
      </section>
    </main>
  )
}

export default Home