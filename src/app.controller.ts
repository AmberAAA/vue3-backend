import { Body, Logger } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { loginDTO } from './dto/user';

export interface User {
  name: string;
  age: number;
  token: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  login(@Body() body: loginDTO): User {
    console.log(body.name);
    console.log(body.password);
    Logger.log(body.name, 'AppController');
    return {
      name: 'Amber',
      age: 12,
      token: 'Amber111',
    };
  }
}
