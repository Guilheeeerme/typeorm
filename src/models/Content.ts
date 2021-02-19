import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Lesson from "./Lesson";

@Entity()
export default class Content {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @OneToOne((type) => Lesson, (content) => Content)
  @JoinColumn({ name: "lesson_id" })
  lesson: Lesson;

  @Column()
  description: string;

  @Column()
  linkContent: string;
}
