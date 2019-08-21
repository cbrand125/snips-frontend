import { renderSnips, highlightSnips, fetchSnippets } from './lib/snippets.js';
import { search } from './lib/search.js';

fetchSnippets().then(snips => renderSnips(snips));

const searchForm = document.getElementById('search-bar');
searchForm.addEventListener('submit', search);

highlightSnips();
