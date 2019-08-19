import SNIPS from './snippet-data.js';
import { renderSnips, highlightSnips } from './lib/snippets.js';
import { search } from './lib/search.js';

renderSnips(SNIPS);

const searchForm = document.getElementById('search-bar');
searchForm.addEventListener('submit', search);

highlightSnips();
