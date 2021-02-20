import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { IsEmail, Max, MaxLength, Min, MinLength } from "class-validator";

import { Class } from "./Class";

@Entity()
export default class Student {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  @MaxLength(50, { message: "Name is too long" })
  @MinLength(3, { message: "Name is too short" })
  name: string;

  @Column()
  @Max(1000)
  @Min(1)
  key: string;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany((type) => Class)
  @JoinTable()
  subjects: Class;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
