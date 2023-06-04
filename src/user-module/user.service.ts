import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    public async getByEmail(email: string) {
        const user = await this.userModel.findOne({ email: email });

        if (!user) {
            throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND)
        }
        return user;
    }


    public async createUser(user: UserDTO): Promise<User> {
        const newUser = await this.userModel.create(user);
        return Promise.resolve(newUser);
    }


}