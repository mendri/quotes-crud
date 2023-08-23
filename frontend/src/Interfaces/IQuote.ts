import IComments from "./IComments";

interface IQuote {
  _id: number;
  content: string;
  author: string;
  tags: Array<string>;
  dateAdded: string;
  dateModified: string;
  comments: Array<IComments>;
  likes: number;
}

export default IQuote