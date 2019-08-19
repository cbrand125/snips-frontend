import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

export function search(event) {
  event.preventDefault();
  const text = event.target['search-text'].value;
  const textUppercase = text.toUpperCase();
  event.target['search-text'].value = '';
  const filteredSnips = SNIPS.filter(
    snippet =>
      snippet.title.toUpperCase().includes(textUppercase) ||
      snippet.description.toUpperCase().includes(textUppercase) ||
      snippet.language.toUpperCase().includes(textUppercase) ||
      snippet.code.toUpperCase().includes(textUppercase)
  );

  renderSnips(filteredSnips, text);
}

export default search;
