import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import { AcquisitionEntity } from './AcquisitionEntity'

  @Entity('seller')
export class SellerEntity {
    @PrimaryColumn({ unique: true })
    public cpf!: string;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => AcquisitionEntity, (acquisitions) => acquisitions.seller)
    Acquisition?: AcquisitionEntity[];

    @CreateDateColumn()
    createdAt!: string;

    @UpdateDateColumn()
    updatedAt!: string;
}
