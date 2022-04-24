import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../JwtPayload';

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user.id;
  },
);

export const GetCurrentUserLogin = createParamDecorator(
  (_: undefined, context: ExecutionContext): JwtPayload => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log('USER', user)
    return user;
  },
);
