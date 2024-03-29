export enum NameSpace {
  Main = 'MAIN',
  Film = 'FILM',
  FavoriteFilms = 'FAVORITE-FILMS',
  User = 'USER',
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
