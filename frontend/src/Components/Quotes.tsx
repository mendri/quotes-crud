import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IQuote from "../Interfaces/IQuote"
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons"

function Quotes(props: {quotes_data: IQuote}) {

  return (
    <article className="flex flex-col justify-evenly w-4/6 p-4 mt-8 min-h-400 border-2 border-gray-500 bg-slate-100 rounded-xl shadow-2xl">
      <div className="flex items-end">
        <div className="bg-cyan-800 w-8 h-8 flex justify-center items-center rounded-full">
          <p className="text-white font-extrabold">{props.quotes_data.author[0]}</p>
        </div>
        <p className="ml-4">{props.quotes_data.author}</p>
      </div>
      <div className="mt-4 mb-4 w-4/5 p-6 bg-zinc-100 shadow-lg rounded-xl min-h-200 self-center">
        <p>{props.quotes_data.content}</p>
      </div>
      <div className="flex justify-end">
        <div className="flex">
          <button className="mr-2">
            <FontAwesomeIcon className="h-6" icon={faComment} />
          </button>
          <p className="mr-4">{props.quotes_data.comments.length}</p>
        </div>
        <div className="flex">
          <button className="mr-2">
            <FontAwesomeIcon className="h-6" icon={faHeart} />
          </button>
          <p className="mr-4">{props.quotes_data.likes}</p>
        </div>
      </div>
    </article>
  )
}

export default Quotes