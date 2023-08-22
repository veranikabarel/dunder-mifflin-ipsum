import { quotes } from '../data/quotes';

export const getRandomIndex = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateDunderMifflinIpsum = () => {
  const quoteWithAuthor = quotes[getRandomIndex(0, quotes.length)];
  return `'${quoteWithAuthor.quote}' - ${quoteWithAuthor.character}`;
};
