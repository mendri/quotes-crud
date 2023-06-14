import { useNavigate } from "react-router-dom"
import SubmitHeaderBlogCRUD from "../Components/SubmitHeaderBlogCRUD"

function Register() {
  const navigate = useNavigate()

  return (
    <main className="w-full h-full flex">
      <SubmitHeaderBlogCRUD main_color="orange" sub_color="yellow" />
      <section className="w-2/3 flex flex-col justify-center items-center bg-gradient-to-b from-slate-300 via-slate-50 to-slate-300">
        <form className="mt-10 w-2/3 h-2/3 flex flex-col justify-end items-center" onSubmit={ (e) => e.preventDefault() }>
          <p className="text-2xl font-extrabold w-3/5 text-center mb-14">
            Olá! Digite um nome de usuário e um email que não esteja registrado e uma senha segura para criar sua conta no 
            <br />
            Blog-CRUD.
          </p>
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="username-input">
              <input placeholder="Nome de usuário" id="username-input" type="text" className="mt-2 p-1 border-2 border-gray-400 shadow-2xl"/>
            </label>
          </div>
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
            <button className="mb-2 text-white text-xl font-bold w-4/12 h-10 rounded-lg bg-gradient-to-tr from-orange-300 to-orange-500 shadow-2xl">
              Criar Conta
            </button>
            <button className="mb-2 text-white text-xl font-bold w-4/12 h-10 rounded-lg bg-gradient-to-tr from-cyan-300 to-cyan-500 shadow-2xl" onClick={() => navigate("/login")}>
              Logar
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Register