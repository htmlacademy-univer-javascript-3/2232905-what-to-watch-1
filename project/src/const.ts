export enum NameSpace {
  Main = 'Main',
  Film = 'Film',
  FavoriteFilms = 'Favorite-films',
  User = 'User',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite'
}

export enum AuthorizationStatus {
  Unknown,
  Auth,
  NoAuth,
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = 'mylist',
  Films = 'films',
  AddReview = 'review',
  Player = 'player',
  NotFound = '*'
}

export const FILMS_COUNT_STEP = 8;
export const ALL_GENRES = 'All Genres';
