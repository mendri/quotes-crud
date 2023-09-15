function HeaderQuotesCRUD() {
  const userEmail = localStorage.getItem("user-email")

  return (
    <header className="fixed w-1/5 h-full bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300">
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
  )
}

export default HeaderQuotesCRUD