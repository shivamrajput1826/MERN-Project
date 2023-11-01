import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(username: string, email: string, password: string) {
    const users = await this.userService.find(email);
    if (users.length) {
      throw new BadRequestException('email in user');
    }
    //generating a salt
    //randomBytes provide a buffer(raw binary data)
    const salt = randomBytes(8).toString('hex'); //16 characters

    const hash = (await scrypt(password, salt, 32)) as Buffer; // 32 bytes of data

    const result = salt + '.' + hash.toString('hex');
    const user = await this.userService.create(username, email, result);
    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.find(email);
    if (!user) {
      throw new BadRequestException('email not present');
    }

    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    console.log(hash.toString('hex'), salt, storedHash);
    if (hash.toString('hex') === storedHash) {
      return user;
    } else {
      throw new BadRequestException('wrong password');
    }
  }
}
