import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import { IStatus } from '../../domain/interface/IStatus'
import { AcquisitionEntity } from './AcquisitionEntity'

  @Entity('status')
export class StatusEntity implements IStatus {
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
