import { Injectable } from '@nestjs/common';
import * as fetch from 'node-fetch';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getTrending(query: any = null): Promise<Object>{
    const link = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`
    const res = await fetch(link);
    const payload = await res.json();

    if(query === undefined || query === null){
      return payload;
    }

    let temp = [];
    for (const e of payload.results) {
      const regex = new RegExp(`.*?${query}.*`, 'gi');
      if(regex.exec(e.title || e.name) !== null){
        temp.push(e);
      }
    }

    return {...payload, results: temp};

  }
}
