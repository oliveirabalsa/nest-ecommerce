import { CategoryEntity } from './../../category/entities/category.entity';
import { Column, CreateDateColumn, JoinColumn, ManyToMany, ManyToOne, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity("product")
export class ProductEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column("text")
  name: string;
 
  @ManyToOne(type => CategoryEntity, category => category)
  @JoinColumn({ name: "categoryId" })
  category: CategoryEntity;

  @Column()
  categoryId: number;

  @Column({type: 'float'})
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
