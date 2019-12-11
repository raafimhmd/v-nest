import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentPageModule } from './content-page/content-page.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://raafi:Qmi0dF64ACl4eGwO@cluster0-gchhz.mongodb.net/web_db?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
    ),
    ContentPageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
