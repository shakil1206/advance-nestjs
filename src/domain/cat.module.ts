import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatService } from './cat.service';
import { AuthMiddleware } from 'src/common/auth.middleware';
@Module({
    imports: [],
    controllers: [CatsController],
    providers: [CatService],
})
export class CatModule { }


// implements NestModule {
//     public configure(consumer: MiddlewareConsumer) {
//         consumer.apply(AuthMiddleware)
//             .exclude('/api/v1/cat/something')
//             .forRoutes({ path: '/api/v1', method: RequestMethod.ALL })
//     }
// }
