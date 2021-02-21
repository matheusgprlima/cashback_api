import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm'
import { SellerEntity } from './SellerEntity'
import { StatusEntity } from './StatusEntity'

  @Entity('acquisition')
export class AcquisitionEntity {
    @PrimaryColumn({ unique: true })
    acquisitionCode!: string;

    @Column()
    acquisitionValue!: number;

    @Column()
    acquisitionDate!: Date;

    @Column()
    discountPercentage!: number;

    @Column()
    cashbackValue!: number;

    @ManyToOne(() => SellerEntity, (seller) => seller.Acquisition)
    seller!: SellerEntity;

    @ManyToOne(() => StatusEntity, (status) => status.Acquisition)
    status!: StatusEntity;

    @CreateDateColumn()
    createdAt!: string;

    @UpdateDateColumn()
    updatedAt!: string;
}
