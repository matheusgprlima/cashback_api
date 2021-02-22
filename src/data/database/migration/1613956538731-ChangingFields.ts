import { MigrationInterface, QueryRunner } from 'typeorm'

export class ChangingFields1613956538731 implements MigrationInterface {
    name = 'ChangingFields1613956538731'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "acquisition" DROP CONSTRAINT "PK_76ba94822d40372d1120d9ba5d3"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "acquisitionCode"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "acquisitionValue"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "acquisitionDate"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "discountPercentage"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "cashbackValue"')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "code" nvarchar(255) NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD CONSTRAINT "PK_75c80bd021d4cd0e1a2844c7590" PRIMARY KEY ("code")')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "value" int NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "date" datetime NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "discount" int NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "cashback" int NOT NULL')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "cashback"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "discount"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "date"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "value"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP CONSTRAINT "PK_75c80bd021d4cd0e1a2844c7590"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP COLUMN "code"')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "cashbackValue" int NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "discountPercentage" int NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "acquisitionDate" datetime NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "acquisitionValue" int NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD "acquisitionCode" nvarchar(255) NOT NULL')
      await queryRunner.query('ALTER TABLE "acquisition" ADD CONSTRAINT "PK_76ba94822d40372d1120d9ba5d3" PRIMARY KEY ("acquisitionCode")')
    }
}
