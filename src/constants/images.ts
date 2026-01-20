import type { ArtefactType } from 'src/types';

export const MAIN_BG_IMAGE = require('../assets/images/bckgd/greenBg.jpg');

export const BTN_FRAME = require('../assets/images/bckgd/greenFrame.png');

export const QUEEN = require('../assets/images/items/greenCleo.png');

export const ITEMS = {
  book: require('../assets/images/items/book.png'),
  bug: require('../assets/images/items/bug.png'),
  crown: require('../assets/images/items/crown.png'),
  flower: require('../assets/images/items/flower.png'),
  lock: require('../assets/images/items/lock.png'),
  pyramid: require('../assets/images/items/pyramid.png'),
  taskCard: require('../assets/images/items/task_card.png'),
};

export const LOGO = require('../assets/images/bckgd/greenIcon.jpg');

export const ARTEFACTS: ArtefactType[] = [
  { id: 'Pyramid', image: ITEMS.pyramid },
  { id: 'Flower', image: ITEMS.flower },
  { id: 'Bug', image: ITEMS.bug },
  { id: 'Crown', image: ITEMS.crown },
];
