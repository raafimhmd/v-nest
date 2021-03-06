import { Controller, Post, Body, Res, HttpStatus, Get, Param, NotFoundException, Put, Query, Delete } from '@nestjs/common';
import { ContentPageService } from './content-page.service';
import { ContentDto } from './dto/create-content.dto';

@Controller('content')
export class ContentPageController {
    constructor(
        private contentService: ContentPageService,
    ) { }

    // Add Content
    @Post()
    async addContent(
        @Res() res,
        @Body() contentDto: ContentDto,
    ) {
        const content = await this.contentService.addContent(contentDto);
        return res.status(HttpStatus.OK).json({
            message: 'Content has been created successfully',
            content,
        });
    }

    // Fetch Fetch All Contents
    @Get()
    async getContents(
        @Res() res,
        @Param('contentId') contentId,
    ) {
        const content = await this.contentService.getAllContents();
        if (!content) { throw new NotFoundException('Content doesnt exist'); }
        return res.status(HttpStatus.OK).json(content);
    }

    // Fetch a particular content using ID
    @Get('/:contentId')
    async getContent(
        @Res() res,
        @Param('contentId') contentId,
    ) {
        const content = await this.contentService.getContent(contentId);
        if (!content) { throw new NotFoundException('Content doesnt exist'); }
        return res.status(HttpStatus.OK).json(content);
    }

    // Update Content
    @Put('/update')
    async updateContent(
        @Res() res,
        @Query('contentId') contentId,
        @Body() contentDto: ContentDto,
    ) {
        const content = await this.contentService.updateContent(contentId, contentDto);
        if (!content) { throw new NotFoundException('Content doesnt exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Content has been updated successfully',
            content,
        });
    }

    // Delete Content
    @Delete('/delete')
    async deleteContent(
        @Res() res,
        @Query('contentId') contentId,
    ) {
        const content = await this.contentService.deleteContent(contentId);
        if (!content) { throw new NotFoundException('Content doesnt exist'); }
        return res.status(HttpStatus.OK).json({
            message: 'Content has been deleted',
            content,
        });
    }
}
