import { snip } from './snip.js';

export const highlightSnips = () => {
  const snips = document.querySelectorAll('pre code');
  snips.forEach(hljs.highlightBlock);
};

export const renderSnips = (snippets, searchTerm) => {
  let snippetHTML = snippets.map(snip).join('');

  if (searchTerm) {
    snippetHTML = `<h5>Showing results for '${searchTerm}' (case-insensitive)</h5> ${snippetHTML}`;
  }

  const snippetElement = document.getElementById('snippets');
  snippetElement.innerHTML = snippetHTML;

  highlightSnips();
};

export const fetchSnippets = () =>
  fetch('http://localhost:5000/api/snippets').then(response => response.json());
