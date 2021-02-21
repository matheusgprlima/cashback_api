import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreatingAllTables1613935740123 implements MigrationInterface {
    name = 'CreatingAllTables1613935740123'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "seller" ("cpf" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_b73c93bd68fec234e4ab3cbbc18" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_63344757547d83b67aa018dab48" DEFAULT getdate(), CONSTRAINT "UQ_1f677314b76e057b56c48042ace" UNIQUE ("email"), CONSTRAINT "PK_504c73a860b1a04772fa723d9ed" PRIMARY KEY ("cpf"))')
      await queryRunner.query('CREATE TABLE "status" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_5435b111098acb1d9a9690437cd" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_4ce4f80a3b2bbc2ebf15453b77f" DEFAULT getdate(), CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "acquisition" ("acquisitionCode" nvarchar(255) NOT NULL, "acquisitionValue" int NOT NULL, "acquisitionDate" datetime NOT NULL, "discountPercentage" int NOT NULL, "cashbackValue" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_78b1c16f2963408d13994d931bc" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_6e08c4155c2a181112b7dfd9418" DEFAULT getdate(), "sellerCpf" nvarchar(255), "statusId" int, CONSTRAINT "PK_76ba94822d40372d1120d9ba5d3" PRIMARY KEY ("acquisitionCode"))')
      await queryRunner.query('ALTER TABLE "acquisition" ADD CONSTRAINT "FK_b688e2883ce4caff0bc6bd7a671" FOREIGN KEY ("sellerCpf") REFERENCES "seller"("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE "acquisition" ADD CONSTRAINT "FK_f90b294779bb5a067b642a55499" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "acquisition" DROP CONSTRAINT "FK_f90b294779bb5a067b642a55499"')
      await queryRunner.query('ALTER TABLE "acquisition" DROP CONSTRAINT "FK_b688e2883ce4caff0bc6bd7a671"')
      await queryRunner.query('DROP TABLE "acquisition"')
      await queryRunner.query('DROP TABLE "status"')
      await queryRunner.query('DROP TABLE "seller"')
    }
}
