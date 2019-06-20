import {observable} from 'mobx';

import {ITags} from '@/interfaces/interface';

class Store {
  @observable public tags : ITags[] = []
}

export  default new Store()