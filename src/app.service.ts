import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>V-Nest is Actived..</h1>';
  }
}
