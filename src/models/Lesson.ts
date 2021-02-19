import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Class } from "./Class";
import Content from "./Content";

@Entity()
export default class Lesson {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  description: string;

  @OneToOne((type) => Content, (lesson) => Lesson)
  content: Content;

  @ManyToOne((type) => Class, (lessons) => Lesson, {
    eager: true,
  })
  @JoinColumn({ name: "subject_id" })
  subject: Class; // Aulas

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
