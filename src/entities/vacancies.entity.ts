import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./companies.entity";
import { Interviews } from "./interviews.entity";
import { Vacancies_skills } from "./vacancies_skills.entity";

@Entity("vacancies")
export class Vacancies {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "decimal" })
  salary: number;

  @Column()
  description: string;

  @ManyToOne(() => Company, { eager: true })
  company: Company;

  @OneToOne(() => Vacancies_skills, (vacancy_skills) => vacancy_skills.id)
  vacancy_skills: Vacancies_skills;

  @OneToMany(() => Interviews, (interview) => interview.id)
  interview: Interviews[];
}
