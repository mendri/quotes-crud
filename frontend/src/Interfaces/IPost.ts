import IComment from "./IComment";

interface IPost {
  author: string;
  message: string;
  comments: Array<IComment>;
  likes: number;
}

export default IPost