import IQuote from "../Interfaces/IQuote"

function Quotes(props: {quotes_data: IQuote}) {

  return (
    <article className="w-4/6 p-4 mt-8 border-2 border-gray-500 bg-slate-100 rounded-xl shadow-2xl">
      <div className="flex items-end">
        <div className="bg-cyan-800 w-8 h-8 flex justify-center items-center rounded-full">
          <p className="text-white font-extrabold">{props.quotes_data.author[0]}</p>
        </div>
        <p className="ml-4">{props.quotes_data.author}</p>
      </div>
      <div className="mt-8">
        <p>{props.quotes_data.content}</p>
      </div>
      <div></div>
    </article>
  )
}

export default Quotes