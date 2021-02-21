import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import { AcquisitionEntity } from './AcquisitionEntity'

  @Entity('status')
export class StatusEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string;

    @OneToMany(() => AcquisitionEntity, (acquisitions) => acquisitions.status)
    Acquisition?: AcquisitionEntity[];

    @CreateDateColumn()
    createdAt!: string;

    @UpdateDateColumn()
    updatedAt!: string;
}
