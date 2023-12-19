const searchInput = document.getElementById('search-input');
const isTechnicalCheckbox = document.getElementById('isTechnicalCheckbox');
const sortBySelect = document.getElementById('sort-by');
const searchResults = document.getElementById('search-results');
// TPDP Substitute  id="app-version" with remote Version from github :)

//const dataRemote = [];
// const data = fetch('https://raw.githubusercontent.com/palladius/js-simple-search/main/app/data.json') // raw content
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Use the data here
//   });
const fetchData = async () => {
  const response = await fetch('https://raw.githubusercontent.com/palladius/js-simple-search/main/app/data.json');
  const data = await response.json();
  return data;
};
// Export the fetched data as a constant
const fetchedData = fetchData();

const fetchAppVersion = async () => {
  const response = await fetch("https://raw.githubusercontent.com/palladius/js-simple-search/main/app/VERSION");
  const remoteVersion = await response.text();
  return remoteVersion;
}

const fetchedAppVersion = fetchAppVersion();

const localData = [];
  // let version = fetchAppVersion().then(text => {
  //       console.log(text);
  //   })
  //   .catch(err => {
  //       // Deal with the fact the chain failed
  //   });


  // let version = fetchAppVersion().then(text => {

async function filterSearchResults(searchTerm, isTechnicalFilter, sortBy) {

  const response = await fetch('https://raw.githubusercontent.com/palladius/js-simple-search/main/app/data.json');
  const data = await response.json();

  //const github_version_response = await fetch('https://raw.githubusercontent.com/palladius/js-simple-search/main/app/VERSION');
  //const github_version = await github_version_response.text();

  let filteredResults = data;

  //let filteredResults = localData;

  if (searchTerm) {
    filteredResults = filteredResults.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const descriptionMatch = item.description.toLowerCase().includes(searchTerm.toLowerCase());
      // doesnt always exist
      const tagsMatch = item.tags ? item.tags.toLowerCase().includes(searchTerm.toLowerCase()) : false;
      return titleMatch || descriptionMatch || tagsMatch;
    });
  }

  if (isTechnicalFilter) {
    filteredResults = filteredResults.filter(item => item.isTechnical === isTechnicalCheckbox.checked);
  }

  if (sortBy === 'rating') {
    filteredResults = filteredResults.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'title') {
    filteredResults = filteredResults.sort((a, b) => a.title.localeCompare(b.title));
  }


  const resultElements = filteredResults.map(item => {
    const link = item.url ?
      `<a href='${item.url}'  class="btn btn-outline-success"  >🕸️ URL</a>` :
      `<a href='https://www.google.com/search?q=${item.title}'  class="btn btn-info"  >🔎 Google this!</a>\n`
    const imageHTml = item.image ?
      `<img src="images/${ item.image }" alt="${ item.title }" class="card-img-top rounded">` :
      ``
    const codeLink = item.code ?
      `<a href='${item.code}' class="btn btn-info" >🐙 Code</a> ` :
      ``
    const gdocLink = item.gdoc ?
      `<a href='${item.gdoc}' class="btn btn-primary" >📑 Doc</a> ` :
      ``
    const linkedTitle = `<a href='${item.url}'  >${item.title}</a>`
    return `
        <div class="card border-info mb-3" style="width: 18rem;">
          <div class="card-header">
            <h5 class="card-title"> ${linkedTitle}
              <kbd>${ item.rating }</kbd>
            </h5>
          </div>
          ${imageHTml}
          <!-- <div class="card-body">      -->
            <p class="card-text alert alert-primary">
              ${item.description }
            </p>
            <p class="card-text alert alert-notice" >${item.isTechnical ? '💻' : "🎨"} ${item.type}  ${item.isCodePrivate ? '🔑' : '🚪'} </p>
            <p>
              ${link}
              ${codeLink}
              ${gdocLink}
            </p>
          <!-- </div>
              it works! But i dont know how to position it v<b>$ { github_version }</b>
          -->

        </div>
      </div>
    `;
  });
  // https://getbootstrap.com/docs/5.0/components/buttons/

  //🖌🌈

  searchResults.innerHTML = resultElements.join('');
  // Carlessian set of the version - WOW!
  (async () => {
    console.log('before start');

    const appVersionSnippet = document.getElementById('app-version'); // by Riccardo
    const trimmedVersion = (await fetchAppVersion()).trim()
    appVersionSnippet.innerHTML = trimmedVersion || 'sobenme  - trimmedVersion not found';

    console.log('after start');
  })();

}

searchInput.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  filterSearchResults(searchTerm, isTechnicalCheckbox.checked, sortBySelect.value);
});

isTechnicalCheckbox.addEventListener('change', () => {
  filterSearchResults(searchInput.value, isTechnicalCheckbox.checked, sortBySelect.value);
});

sortBySelect.addEventListener('change', () => {
  filterSearchResults(searchInput.value, isTechnicalCheckbox.checked, sortBySelect.value);
});

// added by Riccardo: trigger search on pageLoad
addEventListener("load", (event) => {
  filterSearchResults('', isTechnicalCheckbox.checked, sortBySelect.value);

  // set focus on search engine
  // https://stackoverflow.com/questions/10894638/how-to-set-cursor-to-input-box-in-javascript
  document.getElementById("search-input").focus();
  document.getElementById("search-input").select();

  //div.getElementsByTagName("input")[0].focus();
  //div.getElementsByTagName("input")[0].setSelectionRange(div.getElementsByTagName("input")[0].value.length,div.getElementsByTagName("input")[0].value.length,"forward");

});


