import { useSelector } from "react-redux"
import { RootState } from "../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import post_examples from "../Mock/post_examples"

function Home() {
  const userEmail = useSelector((state: RootState) => state.user.email)
  console.log(userEmail)

  return (
    <main className="flex min-h-full w-full">
      <section className="w-4/5 bg-sky-300 flex flex-col items-center">
        <div className="fixed w-full mt-8 flex justify-center items-center">
          <FontAwesomeIcon className="relative left-6" icon={faMagnifyingGlass} />
          <input className="w-2/5 h-7 border-2 shadow-2xl text-center rounded-xl bg-slate-100" placeholder="Pesquise um post"/>
        </div>
        <div className="mt-28 w-full flex flex-col justify-evenly items-center">
          {
            post_examples.map((element) => {
              return (
                <article className="w-4/6 mt-8 border-2 border-gray-500 bg-slate-100">
                  <div>
                    <div className="w-4 h-4"></div>
                    <p>{element.author}</p>
                  </div>
                  <div>
                    <p>{element.message}</p>
                  </div>
                  <div></div>
                </article>
              )
            })
          }
        </div>
      </section>
      <header className="fixed right-0 w-1/5 h-full bg-gradient-to-b from-white via-slate-200 to-white">
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