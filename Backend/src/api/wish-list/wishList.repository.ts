import { Repository } from 'typeorm';

import { WishListItem } from './entities';

export class WishListRepository extends Repository<WishListItem> {}
