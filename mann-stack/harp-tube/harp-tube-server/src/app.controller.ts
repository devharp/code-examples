import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/search')
  async getQuery(@Req() req: Request): Promise<Query>{
    const d = await this.appService.getQuery(req.query.query);
    return d;
  }

  //https://www.youtube.com/results?search_query=jass+manak+age+19
  @Get('/results')
  async getResults(@Req() req: Request): Promise<any>{
    return await this.appService.getResults(req.query.search);
    // return { name: 'hello' };
  }
}

interface Query{
  query: any,
  results: any
}
