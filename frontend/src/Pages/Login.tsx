import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { feedUser } from "../Features/user/UserSlice"

function Login() {
  const username = "carlos"
  const email = "carlos@email.com"
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(feedUser({username, email}))
  }

  return (
    <main className="w-full h-full flex">
      <header className="w-1/3 flex justify-center bg-gradient-to-b from-indigo-700 via-cyan-500 to-indigo-700">
        <h1 className="mt-8 text-6xl text-white">Blog-CRUD</h1>
      </header>
      <section className="w-2/3 flex flex-col justify-center items-center bg-gradient-to-b from-slate-300 via-slate-50 to-slate-300">
        <form className="mt-10 w-2/3 h-2/3 flex flex-col justify-end items-center" onSubmit={ (e) => e.preventDefault() }>
          <p className="text-2xl font-extrabold w-3/5 text-center mb-14">
            Olá! Digite seu email e senha para acessar o Blog-CRUD.
          </p>
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="email-input">
              <input placeholder="Email" id="email-input" type="email" className="mt-2 p-1 border-2 border-gray-400 shadow-2xl"/>
            </label>
          </div>
          <div className="flex flex-col items-center mb-8">
            <label htmlFor="pass-input">
              <input placeholder="Senha" id="pass-input" type="password" className="mt-2 p-1 border-2 border-gray-400 shadow-2xl"/>
            </label>
          </div>
          <div className="w-full flex flex-col items-center">
            <button className="mb-2 text-white text-xl font-bold w-4/12 h-10 rounded-lg bg-gradient-to-tr from-cyan-300 to-cyan-500 shadow-2xl" onClick={handleClick}>
              Logar
            </button>
            <button className="mb-2 text-white text-xl font-bold w-4/12 h-10 rounded-lg bg-gradient-to-tr from-orange-300 to-orange-500 shadow-2xl" onClick={() => navigate("/register")}>
              Criar Conta
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Login