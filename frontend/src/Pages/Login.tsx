function Login() {
  return (
    <main className="w-full h-full flex bg-gradient-to-br from-emerald-500 via-teal-00 to-cyan-800">
      <section className="w-1/2 flex justify-center items-center">
        <form className="w-4/5 h-4/5 border-2">
          <label htmlFor="email-input">
            Digite seu Email
          </label>
          <input id="email-input" type="email" />
        </form>
      </section>
      <header className="w-1/2 flex justify-center items-center">
        <h1>Faça seu Login no Podereso Blog-CRUD</h1>
      </header>
    </main>
  )
}

export default Login