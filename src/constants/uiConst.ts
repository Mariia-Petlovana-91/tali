import piece from "@/data/dataFullimg";

/**
 * Базові розміри сцени.
 * Це координатна система, в якій ми перевіряємо кліки по alpha-каналу.
 * Всі шматки зведені до цього розміру.
 */
export const STAGE_WIDTH = 700;
export const STAGE_HEIGHT = 840;
/**
 * Поріг прозорості.
 * Якщо alpha пікселя більше цього значення — вважаємо, що клік був по шматку.
 */
export const ALPHA_THRESHOLD = 10;
/**
 * Дані для анімації.
 * Це масив шматків з їхніми зображеннями та координатами.
 */
export const PIECES = piece;