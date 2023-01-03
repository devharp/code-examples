import { Injectable, Post } from '@nestjs/common';
import * as fetch from 'node-fetch';

@Injectable()
export class AppService {
  url0 = 'https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&q='
  
  constructor(){
  }
  getHello(): string {
    return 'Hello World!';
  }

  async getQuery(q: any){
    const url = this.url0 + encodeURIComponent(q);
    const res = await fetch(url);
    let text = await res.text();
    let query: string, results = [];
    text = text.replace(/window.google.ac.h\(/gi, '')
    text = text.replace(/\)$/gi, '')
    text = JSON.parse(text);
    query = text[0];
    for(const e of text[1]){
      results.push(e[0])
    }

    return ({ query, results });
      
  }

  getResults(query: any){
    return new Promise(async (resolve, reject) => {

      const res = await fetch('https://www.youtube.com/results?search_query=' + encodeURIComponent(query))
      const html = await res.text();
      let videos = [];

      const regex = new RegExp(/(,\{"url":")(.*?)\","width".*?"title":\{"runs":\[\{"text":"(.*?)"\}\],"acc.*?"longBylineText":\{"runs":\[\{"text":"(.*?)(",")(.*?),"viewCountText":\{"simpleText":"(.*?)\sviews"\}/, 'g');

      let m;
      while (m = regex.exec(html)){
        videos.push({ views: m[7], title: m[3], url: m[2], channel: m[4] })
      }
        

      resolve(videos);
    })
  }
}
