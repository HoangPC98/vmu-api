import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDto,
  CreateGiangVienDto,
  CreateHocVienDto,
} from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new-user/:user_type')
  createUser(
    @Param('user_type') user_type,
    @Body()
    newUserDto: {
      userInfo: CreateUserDto;
      userTypeInfo: CreateGiangVienDto | CreateHocVienDto;
    },
  ) {
    return this.userService.createUser(
      user_type,
      newUserDto.userInfo,
      newUserDto.userTypeInfo,
    );
  }

  @Get()
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.userService.findOneUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
