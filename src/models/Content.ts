import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Content {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  description: string;

  @Column()
  linkContent: string;
}
