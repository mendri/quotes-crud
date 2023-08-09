import IPost from "../Interfaces/IPost"

function Post(props: {post_data: IPost}) {

  return (
    <article className="w-4/6 mt-8 border-2 border-gray-500 bg-slate-100">
      <div>
        <div className="w-4 h-4"></div>
        <p>{props.post_data.author}</p>
      </div>
      <div>
        <p>{props.post_data.message}</p>
      </div>
      <div></div>
    </article>
  )
}

export default Post