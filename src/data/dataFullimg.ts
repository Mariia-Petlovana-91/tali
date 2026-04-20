import type { Piece } from '@/types/hero';

import piece1 from '@/img/hero/Android1.webp';
import piece2 from '@/img/hero/Android2.webp';
import piece3 from '@/img/hero/Android3.webp';
import piece4 from '@/img/hero/Android4.webp';
import piece5 from '@/img/hero/Android5.webp';
import piece6 from '@/img/hero/Android6.webp';
import piece7 from '@/img/hero/Android7.webp';
import piece8 from '@/img/hero/Android8.webp';
import piece9 from '@/img/hero/Android9.webp';

const piece: Piece[] = [
  {
    id: 1,
    preview: piece1,
    full: '/imgFullAnime/full1.webp',
    depth: 0.35,
    alt: 'piece1',
    text: 'hero.modalText.1',
    link: 'services',
  },
  {
    id: 2,
    preview: piece2,
    full: '/imgFullAnime/full2.webp',
    depth: 0.55,
    alt: 'piece2',
    text: 'hero.modalText.2',
    link: 'about-me',
  },
  {
    id: 3,
    preview: piece3,
    full: '/imgFullAnime/full3.webp',
    depth: 0.75,
    alt: 'piece3',
    text: 'hero.modalText.3',
    link: 'profile',
  },
  {
    id: 4,
    preview: piece4,
    full: '/imgFullAnime/full4.webp',
    depth: 0.45,
    alt: 'piece4',
    text: 'hero.modalText.4',
    link: 'profile',
  },
  {
    id: 5,
    preview: piece5,
    full: '/imgFullAnime/full5.webp',
    depth: 0.95,
    alt: 'piece5',
    text: 'hero.modalText.5',
    link: 'profile',
  },
  {
    id: 6,
    preview: piece6,
    full: '/imgFullAnime/full6.webp',
    depth: 0.6,
    alt: 'piece6',
    text: 'hero.modalText.6',
    link: 'profile',
  },
  {
    id: 7,
    preview: piece7,
    full: '/imgFullAnime/full7.webp',
    depth: 0.4,
    alt: 'piece7',
    text: 'hero.modalText.7',
    link: 'profile',
  },
  {
    id: 8,
    preview: piece8,
    full: '/imgFullAnime/full8.webp',
    depth: 0.7,
    alt: 'piece8',
    text: 'hero.modalText.8',
    link: 'profile',
  },
  {
    id: 9,
    preview: piece9,
    full: '/imgFullAnime/full9.webp',
    depth: 0.5,
    alt: 'piece9',
    text: 'hero.modalText.9',
    link: 'profile',
  },
];

export default piece;
