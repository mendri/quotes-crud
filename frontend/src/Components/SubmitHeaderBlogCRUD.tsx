import ISubmitHeaderBlogCRUD from "../Interfaces/ISubmitHeaderBlogCRUD"

function SubmitHeaderBlogCRUD(props: ISubmitHeaderBlogCRUD) {
  return (
    <header className={`w-1/3 flex justify-center bg-gradient-to-b from-${props.main_color}-700 via-${props.sub_color}-500 to-${props.main_color}-700`}>
      <h1 className="mt-8 text-6xl text-white">Blog-CRUD</h1>
    </header>
  )
}

export default SubmitHeaderBlogCRUD