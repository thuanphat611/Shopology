import { Repository } from 'typeorm';

import { CartItem } from './entities';

export class CartRepository extends Repository<CartItem> {}
