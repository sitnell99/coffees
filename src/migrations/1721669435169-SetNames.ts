import {MigrationInterface, QueryRunner} from "typeorm";

export class SetNames1721669435169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `UPDATE coffee SET name = 'coffee name' WHERE name = null`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
