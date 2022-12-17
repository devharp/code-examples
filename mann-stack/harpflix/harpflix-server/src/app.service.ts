import { Injectable } from '@nestjs/common';
import * as fetch from 'node-fetch';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getTrending(): Promise<Object>{
    const link = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`

    const res = await fetch(link);
    return await res.json();
  }
}
