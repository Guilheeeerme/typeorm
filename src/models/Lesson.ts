import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Content from "./Content";

@Entity()
export default class Lesson {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  description: string;

  @OneToOne((type) => Content, (lesson) => Lesson)
  content: Content;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
