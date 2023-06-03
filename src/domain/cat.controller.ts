import { Controller, Delete, Get, Post, Body } from "@nestjs/common";
import { CatService } from "./cat.service";
import { CatDto } from "./cat.dto";

@Controller('cats')
export class CatsController {


    constructor(private readonly catService: CatService) { }

    @Post()
    async createCat(@Body() cat: CatDto) {
        return this.catService.create(cat)
    }

    @Get()
    async getCat() {
        return this.catService.findAll();
    }

    // @Delete()
    // async removeCat() {
    // }

}