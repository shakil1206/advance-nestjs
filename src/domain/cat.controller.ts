import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param } from "@nestjs/common";
import { CatService } from "./cat.service";
import { CatDto, GetCatByIdParamDto } from "./cat.dto";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('cats')
@UsePipes(
    new ValidationPipe({
        whitelist: true,
        transform: true,
    })
)
export class CatsController {

    constructor(private readonly catService: CatService) { }

    @ApiTags('cat')
    @Post()
    @ApiOperation({
        description: "Create new Cat"
    })
    @UsePipes(ValidationPipe)
    @ApiOkResponse({ description: 'OK' })
    @ApiBadRequestResponse({ description: 'Bad Request' })
    @ApiInternalServerErrorResponse({ description: "Data has been created successfully" })
    async createCat(@Body() cat: CatDto) {
        return this.catService.create(cat)
    }

    @Get()
    @ApiTags('cat')
    @ApiOperation({
        description: 'Get All Cat'
    })
    @UsePipes(ValidationPipe)
    @ApiOkResponse({ description: "OK" })
    @ApiBadRequestResponse({ description: 'Bad Request' })
    @ApiInternalServerErrorResponse({ description: "Data has been created successfully" })
    async getAllCat() {
        return this.catService.findAll();
    }



    @Get('/:id')
    @ApiTags('cat')
    @ApiOperation({
        description: 'Get All Cat'
    })
    @UsePipes(ValidationPipe)
    @ApiOkResponse({ description: "OK" })
    @ApiBadRequestResponse({ description: 'Bad Request' })
    @ApiInternalServerErrorResponse({ description: "Data has been created successfully" })
    async getCatById(@Param() param: GetCatByIdParamDto) {
        return this.catService.getById(param)
    }


    // @Delete()
    // async removeCat() {
    // }

}