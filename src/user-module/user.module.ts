import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { userController } from './user.controller';
import { AuthService } from './services/auth.service';
import { UserService } from './user.service';



@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        JwtModule.register({
            global: true,
            secret: "asdfkasdfl;asdkfjdf",
            signOptions: { expiresIn: '60s' },
        }),


    ],
    controllers: [userController],
    providers: [AuthService, UserService],
})
export class UserModule { }