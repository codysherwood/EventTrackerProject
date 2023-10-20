export class Book {
  id: number;
  title: string;
  numberOfWords: number;
  dateFinished: string;
  imageUrl: string;

  constructor(
    id: number = 0,
    title: string = '',
    numberOfWords: number = 0,
    dateFinished: string = '',
    imageUrl: string = '',

  ){
    this.id = id;
    this.title = title;
    this.numberOfWords = numberOfWords;
    this.dateFinished = dateFinished;
    this.imageUrl = imageUrl;
  }
}
