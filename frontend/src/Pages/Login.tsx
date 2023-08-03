import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { feedUser } from "../Features/user/UserSlice"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([false, ""])

  function fieldValidation(emailInput: string, passwordInput: string) {
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (!EMAIL_REGEX.test(emailInput)) {
      console.log(EMAIL_REGEX.test(emailInput))
      throw new Error("Email não está no formato correto")
    }

    if (passwordInput.length < 8) {
      throw new Error("Password tem que ter 8 dígitos")
    }
  }

  function handleClick() {
    try {
      fieldValidation(email, password)
      dispatch(feedUser({email}))
      navigate("/home")
    } catch (e) {
      if (e instanceof Error) {
        setError([true, e.message])
      }
    }
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
          {
            error[0]
            ? <p className="mb-14 text-base font-bold text-red-600">{error[1]}</p>
            : null
          }
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="email-input">
              <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} id="email-input" type="email" className="mt-2 p-1 border-2 border-gray-400 shadow-2xl"/>
            </label>
          </div>
          <div className="flex flex-col items-center mb-8">
            <label htmlFor="pass-input">
              <input placeholder="Senha" onChange={(e) => setPassword(e.target.value)} id="pass-input" type="password" className="mt-2 p-1 border-2 border-gray-400 shadow-2xl"/>
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