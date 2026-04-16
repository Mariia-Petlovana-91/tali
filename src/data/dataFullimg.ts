import type { Piece } from '@/types/hero';

import piece1 from '@/img/Android1.webp';
import piece2 from '@/img/Android2.webp';
import piece3 from '@/img/Android3.webp';
import piece4 from '@/img/Android4.webp';
import piece5 from '@/img/Android5.webp';
import piece6 from '@/img/Android6.webp';
import piece7 from '@/img/Android7.webp';
import piece8 from '@/img/Android8.webp';
import piece9 from '@/img/Android9.webp';

const piece: Piece[] = [
  {
    id: 1,
    preview: piece1,
    full: '/imgFullAnime/full1.webp',
    depth: 0.35,
    alt: 'piece1',
    text: 'hero.modalText.1',
  },
  {
    id: 2,
    preview: piece2,
    full: '/imgFullAnime/full2.webp',
    depth: 0.55,
    alt: 'piece2',
    text: 'hero.modalText.2',
  },
  {
    id: 3,
    preview: piece3,
    full: '/imgFullAnime/full3.webp',
    depth: 0.75,
    alt: 'piece3',
    text: 'hero.modalText.3',
  },
  {
    id: 4,
    preview: piece4,
    full: '/imgFullAnime/full4.webp',
    depth: 0.45,
    alt: 'piece4',
    text: 'hero.modalText.4',
  },
  {
    id: 5,
    preview: piece5,
    full: '/imgFullAnime/full5.webp',
    depth: 0.95,
    alt: 'piece5',
    text: 'hero.modalText.5',
  },
  {
    id: 6,
    preview: piece6,
    full: '/imgFullAnime/full6.webp',
    depth: 0.6,
    alt: 'piece6',
    text: 'hero.modalText.6',
  },
  {
    id: 7,
    preview: piece7,
    full: '/imgFullAnime/full7.webp',
    depth: 0.4,
    alt: 'piece7',
    text: 'hero.modalText.7',
  },
  {
    id: 8,
    preview: piece8,
    full: '/imgFullAnime/full8.webp',
    depth: 0.7,
    alt: 'piece8',
    text: 'hero.modalText.8',
  },
  {
    id: 9,
    preview: piece9,
    full: '/imgFullAnime/full9.webp',
    depth: 0.5,
    alt: 'piece9',
    text: 'hero.modalText.9',
  },
];

export default piece;
