import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm'
import { IAcquisition } from '../../domain/interface/entity/IAcquisition'
import { SellerEntity } from './SellerEntity'
import { StatusEntity } from './StatusEntity'

  @Entity('acquisition')
export class AcquisitionEntity implements IAcquisition {
    @PrimaryColumn({ unique: true })
    code!: string;

    @Column()
    value!: number;

    @Column()
    date!: Date;

    @Column()
    discount!: number;

    @Column()
    cashback!: number;

    @ManyToOne(() => SellerEntity, (seller) => seller.Acquisition)
    seller!: SellerEntity;

    @ManyToOne(() => StatusEntity, (status) => status.Acquisition)
    status!: StatusEntity;

    @CreateDateColumn()
    createdAt!: string;

    @UpdateDateColumn()
    updatedAt!: string;
}
