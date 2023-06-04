import { GetCatByIdParamDto } from './cat.dto';
import { Cat } from './cat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat)
    }
    findAll(): Cat[] {
        return this.cats;
    }
    getById(catId: GetCatByIdParamDto): Cat {
        const filterData = this.cats.filter(item => item.id === catId.id)
        return filterData[0];
    }
}