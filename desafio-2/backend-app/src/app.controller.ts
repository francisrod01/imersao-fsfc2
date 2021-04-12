import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Routes } from './entities/Routes';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  async getRoutes(): Promise<Routes[]> {
    return this.appService.getRoutes();
  }
}
