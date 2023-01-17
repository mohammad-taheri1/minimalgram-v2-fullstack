import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { SigninDto, SignupDto } from "./auth.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post("/signup")
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @Post("signin")
  signin(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }

}
