import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  async all() {
    const users = await this.userRepository.find();
    return users.map((user) => user.toResponseObject());
  }
  async login(user) {}
  async register(user) {}
}
