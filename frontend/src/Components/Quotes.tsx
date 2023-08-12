import IQuote from "../Interfaces/IQuote"

function Quotes(props: {quotes_data: IQuote}) {

  return (
    <article className="flex flex-col w-4/6 p-4 mt-8 min-h-400 border-2 border-gray-500 bg-slate-100 rounded-xl shadow-2xl">
      <div className="flex items-end">
        <div className="bg-cyan-800 w-8 h-8 flex justify-center items-center rounded-full">
          <p className="text-white font-extrabold">{props.quotes_data.author[0]}</p>
        </div>
        <p className="ml-4">{props.quotes_data.author}</p>
      </div>
      <div className="mt-12 w-4/5 p-2 border-2 border-slate-500 shadow-2xl rounded-xl min-h-200 self-center">
        <p>{props.quotes_data.content}</p>
      </div>
    </article>
  )
}

export default Quotes