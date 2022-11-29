import {useParams} from 'react-router-dom';
import {FilmInfo} from '../types/film-info';


export function useFilm(films: FilmInfo[]){
  const params = useParams();
  return films.find(({id}) => id === Number(params.id));
}
