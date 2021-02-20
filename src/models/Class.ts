import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Lesson from "./Lesson";

@Entity()
export class Class {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  @OneToMany((type) => Lesson, (suject) => Class)
  lessons: Lesson[];

  @Column()
  duration: number;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
