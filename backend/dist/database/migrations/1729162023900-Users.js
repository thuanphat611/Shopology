"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1729162023900 = void 0;
const enums_1 = require("../../common/enums");
const typeorm_1 = require("typeorm");
class Users1729162023900 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'first_name',
                    type: 'varchar',
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    length: '15',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'gender',
                    type: 'enum',
                    enum: Object.values(enums_1.Gender)
                        .filter((value) => !isNaN(Number(value)))
                        .map((value) => value.toString()),
                    isNullable: true,
                },
                {
                    name: 'avatar',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'dob',
                    type: 'date',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.Users1729162023900 = Users1729162023900;
//# sourceMappingURL=1729162023900-Users.js.map