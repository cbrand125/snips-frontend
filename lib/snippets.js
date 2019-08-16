export const renderSnips = snippets => {
  const snippetHTML = snippets
    .map(
      snippet => /* html */ `
      <div class="snip">
        <div class="text">
          <h2>${snippet.title}</h2>
          <p>${snippet.description}</p>
        </div>
        <pre><code class="${snippet.language}">${he.encode(
        snippet.code
      )}</code></pre>
      </div>
    `
    )
    .join('');

  const snippetElement = document.getElementById('snippets');
  snippetElement.innerHTML = snippetHTML;
};
