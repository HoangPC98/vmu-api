import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AccessTokenDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5ndXnhu4VuIMSQ4bupYyBN4bqhbmgiLCJzdWIiOjIsInVzZXJfdHlwZV9pZCI6MTIsInBlcm1pc3Npb25zIjoiW3t9XSIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJtYW5obmRAbWlyYWJvLmNvbS52biIsImdpdmVuYW1lIjoiTeG6oW5oIiwicGhvbmUiOiIzMjQyMzQyNDMiLCJpYXQiOjE2NDE5OTMzOTIsImV4cCI6MTY0MjU5ODE5Mn0.DPTPfVOWk6ATJMLVaaWoKxAK_xl_75cUOSduF92BOVo',
    description: 'the access token using to verify',
  })
  @IsNotEmpty()
  @IsString()
  accessToken: string;
}
