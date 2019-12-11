import { Module } from '@nestjs/common';
import { ContentPageService } from './content-page.service';
import { ContentPageController } from './content-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentSchemas } from './schemas/content.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'content',
            schema: ContentSchemas,
        }]),
    ],
    providers: [ContentPageService],
    controllers: [ContentPageController],
})
export class ContentPageModule { }
