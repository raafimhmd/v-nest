import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ContentDto } from './dto/create-content.dto';
import { IContent } from './interfaces/content.interface';

@Injectable()
export class ContentPageService {
    constructor(
        @InjectModel('content') private readonly ContentModel: Model<IContent>,
    ) { }

    // Fetch All Contents
    async getAllContents(): Promise<IContent[]> {
        const contents = await this.ContentModel.find().exec();
        return contents;
    }

    // Get Single Content
    async getContent(contentId): Promise<IContent> {
        const content = await this.ContentModel.findById(contentId).exec();
        return content;
    }

    // Post Content
    async addContent(contentDto: ContentDto): Promise<IContent> {
        const newContent = new this.ContentModel(contentDto);
        return await newContent.save();
    }

    // Edit Content
    async updateContent(contentId, content: ContentDto): Promise<IContent> {
        const updateContent = await this.ContentModel.findByIdAndUpdate(contentId, content, { new: true });
        return updateContent;
    }

    // Delete Content
    async deleteContent(contentId): Promise<any> {
        const deleteContent = await this.ContentModel.findByIdAndRemove(contentId);
        return deleteContent;
    }
}
