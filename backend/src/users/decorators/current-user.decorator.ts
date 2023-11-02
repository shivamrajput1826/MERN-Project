import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // context is a wrapper around the incoming request.
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);

// Param decorators exist outside the DI system, so our decorators can't get an
// instance of UserService directly..
