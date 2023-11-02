import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

it('Can create an instance of auth service', async () => {
  // create a fake userService
  const fakeUserService = {
    find: () => Promise.resolve([]),
    create: (username: string, email: string, password: string) =>
      Promise.resolve({ id: 1, username, email, password }),
  };
  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      { provide: UsersService, useValue: fakeUserService },
    ],
  }).compile();

  const service = module.get(AuthService);
  expect(service).toBeDefined();
});
