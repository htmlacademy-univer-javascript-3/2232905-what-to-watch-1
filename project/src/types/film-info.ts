import {Genre} from './genre';

export type FilmInfo = {
  id: number;
  name: string;
  genre: Genre;
  year: number;
  posterImgSrc: string;
  backgroundImgSrc?: string;
  isInList: boolean;
  director: string;
  starring: string[];
  runTime: string;
  rating? : Rating;
  description: string;
  reviews: Review[];
  videoSrc: string;
}

type Rating = {
  score: number;
  level: string;
  count: number;
}

type Review = {
  id: number;
  text: string;
  author: string;
  dateTimeNumeric: string;
  published: string;
  rating: number;
}
