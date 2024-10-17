import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@/common/entities';
import { Gender } from '@/common/enums';

@Entity('users')
export class User extends BaseEntity {
  @Column({ name: 'fisrt_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender?: Gender;

  @Column({ type: 'date', nullable: true })
  bob?: Date;

  @Column()
  avatar?: string;
}
