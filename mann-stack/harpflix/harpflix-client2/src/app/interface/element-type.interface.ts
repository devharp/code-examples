export interface ElementType{
    adult: boolean
    backdrop_path: string,
    first_air_date: string
    genre_ids: Array<Number>
    id: Number
    media_type: 'movie' | 'tv'
    name: string
    origin_country: Array<string>
    original_language: string
    original_name: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }