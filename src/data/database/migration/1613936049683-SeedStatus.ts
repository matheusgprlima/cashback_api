import { MigrationInterface, QueryRunner } from 'typeorm'

export class SeedStatus1613936049683 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("INSERT INTO status (description) VALUES ('Em validação'),('Aprovado')")
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM status where description in ('Em validação','Aprovado')")
  }
}
