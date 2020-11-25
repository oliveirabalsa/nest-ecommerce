import { isNotEmpty, IsNotEmpty, IsString } from "class-validator";

export class CategoryDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

}

export class CategoryRO {
    @IsNotEmpty()
    id: any
}


