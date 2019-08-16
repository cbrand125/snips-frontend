import SNIPS from './snippet-data.js';
import { renderSnips } from './lib/snippets.js';
import search from './lib/search.js';

renderSnips(SNIPS);
hljs.initHighlightingOnLoad();
