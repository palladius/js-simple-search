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

const data = [
  // {
  //   title: 'Pistachio Ice Cream',
  //   description: 'A delicious and creamy ice cream made with pistachios.',
  //   isTechnical: false,
  //   isFood: true,
  //   url: 'http://blah',
  //   image: 'pistacchio.jpg',
  //   rating: 4.5
  // },
  // {
  //   title: 'Chocolate Chip Cookies',
  //   description: 'Classic chewy chocolate chip cookies.',
  //   isTechnical: false,
  //   isFood: true,
  //   url: 'https://www.google.com/search?q=Chocolate+Chip+Cookies',
  //   image: 'JT-Chocolate-Chip-Cookies-blog480.jpg',
  //   rating: 4.2
  // },
  // {
  //   title: 'Apple Pie',
  //   description: 'A warm and comforting apple pie with a flaky crust.',
  //   isTechnical: false,
  //   isFood: true,
  //       rating: 4.8,
  //   image: 'best-apple-pie-recipe-from-scratch-8.jpg',
  // },
  // {
  //   title: 'Pasta Primavera',
  //   description: 'A light and flavorful pasta dish with fresh vegetables.',
  //   isTechnical: false,
  //   isFood: true,
  //   rating: 1.1,
  //   image: 'Pasta-Primavera-3.jpg'
  // },
  // {
  //   title: 'Chicken Tikka Masala',
  //   description: 'A creamy and flavorful Indian curry with chicken.',
  //   isTechnical: false,
  //   isFood: true,
  //   image: 'Best-Chicken-Tikka-Masala-IMAGE-2.jpg',
  //   rating: 4.7
  // },
  {
    title: 'Automated insights on Medium articles with GenAI and Ruby!',
    description: 'An amazing article on how to use GenAI and Ruby to automatically extract keywords!',
    isTechnical: true,
    type: 'article',
    tags: 'genai, palm, vertexai, gcp',
    image: 'medium-ragno-rosso.png',
    url: 'https://medium.com/@palladiusbonton/parse-medium-articles-with-genai-and-add-some-fun-02fe9d30475a',
    code: 'https://github.com/palladius/genai-googlecloud-scripts/tree/main/03-ruby-medium-article-slurper',
    // URLsv2: [
    //   code: 'blah',
    //   article: 'blah',
    //   demo: 'blah',
    //   video: 'blah',
    //   // TODO refactor this way, seems more scalable.
    // ],
    rating: 4.7
  },
  {
    title: "Migrate GCP projects across organizations, the gcloud way",
    description: "The author provides a detailed guide on how to migrate GCP projects across organizations using the gcloud command-line tool. They also discuss some of the challenges they faced during the migration process and how they overcame them.",
    url: "https://medium.com/google-cloud/how-to-migrate-projects-across-organizations-c7e254ab90af?source=rss-b5293b96912f------2",
    accuracy: 9,
    image: 'migrate-orgs.png',
    type: 'article',
    rating: 4.5,
    year_publication: 2023,
    is_gcp: true,
    isTechnical: false,
    isFood: false,
    tags: 'gcp, infra, iam, gcloud, organization, folders, projects',
    //. https://github.com/palladius/genai-googlecloud-scripts/blob/main/03-ruby-medium-article-slurper/outputs/medium-latest-articles.palladiusbonton.txt.json
    //song: "The Road Goes On Forever"
},
  {
    title: 'Art of SLOs video',
    description: 'Riccardo first video for Google.',
    isTechnical: true,
    higlight: true, // todo implement
    rating: 4.9,
    type: 'video',
    tags: 'video, SRE, AoS, youtube',
    image: 'sounds-good-riccardo-meme.jpeg',
    url: 'https://www.youtube.com/watch?v=E3ReKuJ8ewA',
  },
  {
    title: 'Spag Bol doesnt exist (medium) 🇮🇹',
    description: 'An article demonstrating my hatred for Spaghetti Bolognese (Bolonnaise?) - as an Italian',
    isTechnical: false,
    isFood: true,
    tags: 'pasta, italy, bologna, bolonnaise',
    type: 'article',
    rating: 2.9,
    url: 'https://medium.com/@palladiusbonton/spaghetti-bolognese-dont-exist-1-2088d85909dd',
    image: 'spagbol.jpg',
  },
  {
    title: 'Spag Bol doesnt exist (ricc rocks)',
    description: 'An article demonstrating my hatred for Spaghetti Bolognese (Bolonnaise?) - as an Italian',
    isTechnical: false,
    isFood: true,
    type: 'article',
    tags: 'pasta, italy, bologna, bolonnaise',
    rating: 3.9,
    url: 'https://ricc.rocks/en/posts/www.palladius.it/spaghetti-bolognese-dont-exist/',
    image: 'spagbol.jpg'
  },
  {
    title: 'Puffin Tours 🐧🧳',
    description: 'Riccardo family-run business, 🐧🧳Puffin Tours, inspired by Starter Kit to build Rails applications fast, with Ralix, Tailwind and more!',
    isTechnical: true,
    type: 'application',
    tags: 'ruby, rails, tailwind',
    rating: 4.9,
    isCodePrivate: false,
    code: 'https://github.com/palladius/ror7-tailwind-puffintours/',
    doc: 'https://docs.google.com/document/d/1gN5f2-9vNwvgS4H029dp6vrPTP2rQU9SnvMToYrq2Ec/edit',
    url: 'https://puffintours-prod-rjjr63dzrq-ew.a.run.app/',
    image: 'puffinMcMuffin.png'
  },
  {
    title: 'Prompteer ⚔️🤺🛡',
    image: 'prompteer.png',
    description: 'POC for a PromptDB, where you can store prompts, prompt templates, issue them and vote them!',
    isTechnical: true,
    type: 'application',
    rating: 3.5,
    url: 'https://genai.prompteer.it/', // broken
    isCodePrivate: true,
    tags: '',
  },
  {
    title: 'GenAI Kids Stories ✨',
    image: 'genai-kids-stories.png',
    description: 'GenAI Kids Story with Vertexc AI and Palm API, wow!',
    isTechnical: true,
    type: 'application',
    rating: 4.6,
    url: 'https://genai-kids-stories-gcloud-poor-cdlu26pd4q-ew.a.run.app/', // broken
    code: 'https://github.com/palladius/genai-kids-stories',
    isCodePrivate: false,
    tags: '',
  },

  //
  {
    title: 'JS Simple Search ✨',
    image: 'js-simple-search.png', //'howididit.jpg'
    description: 'simple static JSON searcher, super fast!',
    isTechnical: true,
    tags: 'jsss, javascript, js, typescript, static, html, nginx, bigmerge, docker',
    type: 'application',
    rating: 4.5,
    code: 'https://github.com/palladius/js-simple-search',
    url: 'https://js-simple-search-bsl7ylv4hq-ew.a.run.app/', // TODO host this
    gdoc: "https://docs.google.com/document/d/1q_RZjeHtQn8mYfJw3UDwkJF6M-bRxYY3LGDU5VArBRI/edit",
    isCodePrivate: false,
  },
  // Asset DB todo
  //
  {
    title: 'DHH Vanilla 7.0.1',
    image: 'dhh-vanilla-701.png',
    description: 'My lighthouse app for Rails! Contains all Carlessian Apps. See https://dhh-vanilla-701-prod-cdlu26pd4q-oa.a.run.app/ricc_apps.json if you dont believe me!',
    tags: 'RoR, lighthouse, Rails, DHH, bigmerge',
    isTechnical: true,
    type: 'application',
    rating: 4.5,
    code: 'gprojects:/rails/dhh-vanilla-701/', // Ricc only
    url: 'https://dhh-vanilla-701-prod-cdlu26pd4q-oa.a.run.app/', // TODO host this
    isCodePrivate: true,
  },
  {
    title: 'GCP Cache',
    image: 'gcp-cache.png',
    description: 'GCP Cache to quickly search through your local assets on GCP!',
    tags: 'RoR, GCP, bigmerge, search',
    isTechnical: true,
    type: 'application',
    rating: 3.9,
    code: 'https://github.com/palladius/gcp-cache',
    url: 'https://github.com/palladius/gcp-cache', // TODO host this
    isCodePrivate: false,
  },
  {
    title: 'Pasta',
    image: 'tagliatelle-red-green-yellow.png',
    description: 'How to get correct associations of pasta. eg, bolognese or carbonara, which goes on spaghetti?',
    isTechnical: true,
    tags: 'pasta',
    type: 'application',
    rating: 4.9,
    code: 'https://github.com/palladius/pasta',
    url: 'https://github.com/palladius/pasta', // TODO host this
    isCodePrivate: false,
  },
  //
  {
    title: 'AJ Alphabet',
    image: 'aj-alphabet.jpeg',
    description: 'how do you teach the alphabet to your kid? You store a personal image per letter, and good luck with H , K , X and Y',
    isTechnical: true,
    type: 'application',
    tags: 'family, alessandro, personal',
    rating: 4.5,
    code: 'https://github.com/palladius/baby-alphabet',
    url: 'https://aj-alphabet.palladi.us/', // TODO host this
    isCodePrivate: false,
  },

  // Riccardo wedding https://www.youtube.com/watch?v=K2Ke2C8UBq0&t=1350s
  {
    date: '2016-09-03',
    title: 'Riccardo/Kate wedding video',
    image: 'ricc-kate-dancing.png',
    description: 'My Wedding video, purposely positioned to my Swiss German speech - which basically nobody understood but that was the idea!',
    isTechnical: false,
    type: 'application',
    tags: 'family, riccardo, kate, matrimonio, wedding, swiss-german, switzertuutsch',
    rating: 4.9,
    url: 'https://www.youtube.com/watch?v=K2Ke2C8UBq0&t=1350s', // TODO host this
    //  isCodePrivate: false,
  },
  // 
  {
    date: '2023-11-28',
    title: 'Semantic Search with Embeddings on Rails',
    image: 'semantic-search-rails.png', // there's a second one..
    description: 'Imagine if you can search articles or PDFs automatically chunked for you \
    by a Ruby on rails App (using Google Palm API or OpenAI, whichever)',
    isTechnical: true,
    type: 'application',
    tags: 'rails, app, embeddings, genai, semantic_search, palm_api, openai',
    rating: 4.8,
    url: 'https://dhh-rails-pgv-langchain-v3ydafeb7q-uc.a.run.app/', // TODO host this
    code: '~/git/gprojects/genai/20231122-rails-pgvector-langchainrb/dhhrails7-with-embeddings/',
    gdoc: 'https://docs.google.com/document/d/1wysWbMh1I5ZizE9fNX5lCjHRy9Sp4vX3QzyDcI1Oc-M/edit',
    app_urls: {
      db_cloudsql: 'https://console.cloud.google.com/sql/instances/pg-dev/connections/summary?project=ric-cccwiki',
      cloud_build: 'https://console.cloud.google.com/cloud-build/builds?project=ric-cccwiki',
      artifact_repo: 'https://console.cloud.google.com/artifacts/docker/ric-cccwiki/us-central1/dhh-rails-pgv-langchain/rails-langchainrb-pgvector-app',
    }
  },
];

function filterSearchResults(searchTerm, isTechnicalFilter, sortBy) {

  //const data = fetchedData;
  let filteredResults = data;

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
          <!-- </div> -->
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


