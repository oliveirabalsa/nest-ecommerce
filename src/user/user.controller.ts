import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/shared/auth.guard";
import { UserDTO } from "./user.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(new AuthGuard())
  @Get("user")
  async all() {
    return await this.userService.all();
  }

  @Post("/login")
  async login(@Body() user: UserDTO) {
    return await this.userService.login(user);
  }

  @Post("register")
  async register(@Body() user: UserDTO) {
    return await this.userService.register(user);
  }
}
