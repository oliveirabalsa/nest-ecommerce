import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get("user")
  async all() {
    return await this.userService.all();
  }

  @Post("/login")
  async login(@Body() user: any) {
    return await this.userService.login(user);
  }

  @Post("register")
  async register(@Body() user: any) {
    return await this.userService.register(user);
  }
}
