import { quotes } from '../data/quotes';

function getRandomIndex(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateDunderMifflinIpsum = (p: number): string => {
  const generatedText = [] as string[];
  for (let i = 0; i < p; i++) {
    generatedText.push(quotes[getRandomIndex(0, quotes.length)].quote);
  }
  return generatedText.join('\n');
};
