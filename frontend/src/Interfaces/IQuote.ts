interface IQuote {
  _id: number;
  content: string;
  author: string;
  tags: Array<string>;
  dateAdded: string;
  dateModified: string;
}

export default IQuote