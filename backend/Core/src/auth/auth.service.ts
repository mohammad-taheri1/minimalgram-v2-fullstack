import { Injectable } from '@nestjs/common';
import { SignupDto } from "./auth.dto";

@Injectable()
export class AuthService {
  signup(body: SignupDto){
    return body;
  }
}
