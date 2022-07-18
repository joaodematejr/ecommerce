import {
  Entity,
  OneToMany,
  JoinColumn,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { Users } from 'src/auth/user.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany(() => ProductEntity, (item) => item.id)
  items: ProductEntity[];

  @OneToOne(() => Users, (user) => user.username)
  @JoinColumn()
  user: Users;

  @Column()
  subTotal: number;

  @Column({ default: false })
  pending: boolean;
}
