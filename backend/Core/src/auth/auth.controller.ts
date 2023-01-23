import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {LoginDto, SignupDto, UserInfo} from "./auth.dto";
import {User} from "../decorators/user.decorator";

@ApiTags("auth")
@Controller("auth")
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post("/signup")
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @Post("/login")
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @ApiBearerAuth()
  @Get("/profile/@:email")
  profile(@Param("email") email: string, @User() user: UserInfo) {
    return this.authService.profile(email, user)
  }

  // temp
  @Get("/users")
  getAllUsersTemporaryImplemented() {
    return this.authService.getAllUsersTemporaryImplemented();
  }

}
