import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';

import { BaseEntity } from '@/common/entities';
import { Gender } from '@/common/enums';
import { Hash } from '@/utils/helpers';

@Entity('users')
export class User extends BaseEntity {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender?: Gender;

  @Column({ type: 'date', nullable: true })
  dob?: Date;

  @Column()
  avatar?: string;

  @BeforeInsert()
  @BeforeUpdate()
  private async hashPassword() {
    const saltRounds = 10;

    this.password = await Hash.bcryptHash({
      salt: saltRounds,
      source: this.password,
    });
  }
}
