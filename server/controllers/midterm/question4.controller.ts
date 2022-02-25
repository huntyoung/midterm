import { Controller, Get } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { Skip } from 'server/decorators/skip.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { UsersService } from 'server/providers/services/users.service';

@Controller()
@Skip(AuthGuard)
export class Question4Controller {
  // inject the usersService
  constructor(private usersService: UsersService) {}

  //add your endpoint here!
  @Get('/users')
  public async index() {
    const users = await this.usersService.findAll();
    return { users };
  }
}
