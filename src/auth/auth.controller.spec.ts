import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleAuthDto } from './dto/googleAuth.dto';

const googleAuthDto: GoogleAuthDto = {
  googleToken: 'this is token',
};

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: AuthService,
          useValue: {
            loginGoogle: jest
              .fn()
              .mockImplementation((googleAuthDto: GoogleAuthDto) =>
                Promise.resolve({
                  access_token: 'this is access token',
                }),
              ),
          },
        },
      ],
    }).compile();

    authController = app.get<AuthController>(AuthController);
    authService = app.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('loginGoogle()', () => {
    it('loginGoogle should work', () => {
      expect(authController.loginGoogle(googleAuthDto)).resolves.toHaveProperty(
        'result',
        {
          access_token: 'this is access token',
        },
      );

      expect(authService.loginGoogle).toHaveBeenCalledWith(
        googleAuthDto.googleToken,
      );
    });
  });
});
