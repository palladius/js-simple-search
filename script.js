const searchInput = document.getElementById('search-input');
const isTechnicalCheckbox = document.getElementById('isTechnicalCheckbox');
const sortBySelect = document.getElementById('sort-by');
const searchResults = document.getElementById('search-results');

const data = [
  {
    title: 'Pistachio Ice Cream',
    description: 'A delicious and creamy ice cream made with pistachios.',
    isTechnical: false,
    isFood: true,
    url: 'http://blah',
    image: 'pistacchio.jpg',
    rating: 4.5
  },
  {
    title: 'Chocolate Chip Cookies',
    description: 'Classic chewy chocolate chip cookies.',
    isTechnical: false,
    isFood: true,
    url: 'https://www.google.com/search?q=Chocolate+Chip+Cookies',
    image: 'JT-Chocolate-Chip-Cookies-blog480.jpg',
    rating: 4.2
  },
  {
    title: 'Apple Pie',
    description: 'A warm and comforting apple pie with a flaky crust.',
    isTechnical: false,
    isFood: true,
        rating: 4.8,
    image: 'best-apple-pie-recipe-from-scratch-8.jpg',
  },
  {
    title: 'Pasta Primavera',
    description: 'A light and flavorful pasta dish with fresh vegetables.',
    isTechnical: false,
    isFood: true,
    rating: 1.1,
    image: 'Pasta-Primavera-3.jpg'
  },
  {
    title: 'Chicken Tikka Masala',
    description: 'A creamy and flavorful Indian curry with chicken.',
    isTechnical: false,
    isFood: true,
    image: 'Best-Chicken-Tikka-Masala-IMAGE-2.jpg',
    rating: 4.7
  },
  {
    title: 'Automated insights on Medium articles with GenAI and Ruby!',
    description: 'An amazoing article on how to use GenAI and Ruby to automatically extract keywords!',
    isTechnical: true,
    image: 'medium-ragno-rosso.png',
    url: 'https://medium.com/@palladiusbonton/parse-medium-articles-with-genai-and-add-some-fun-02fe9d30475a',
    rating: 4.7
  },
  {
    title: "Migrate GCP projects across organizations, the gcloud way",
    description: "The author provides a detailed guide on how to migrate GCP projects across organizations using the gcloud command-line tool. They also discuss some of the challenges they faced during the migration process and how they overcame them.",
    url: "https://medium.com/google-cloud/how-to-migrate-projects-across-organizations-c7e254ab90af?source=rss-b5293b96912f------2",
    accuracy: 9,
    image: 'migrate-orgs.png',
    rating: 4.5,
    year_publication: 2023,
    is_gcp: true,
    isTechnical: false,
    isFood: false,
    tags: 'gcp, infra, iam',
    //. https://github.com/palladius/genai-googlecloud-scripts/blob/main/03-ruby-medium-article-slurper/outputs/medium-latest-articles.palladiusbonton.txt.json
    //song: "The Road Goes On Forever"
},
  {
    title: 'Art of SLOs video',
    description: 'Riccardo first video for Google.',
    isTechnical: true,
    rating: 4.9,
    tags: 'video, SRE, AoS',
    image: 'sounds-good-riccardo-meme.jpeg',
    url: 'https://www.youtube.com/watch?v=E3ReKuJ8ewA',
  },
  {
    title: 'Spag Bol doesnt exist (medium)',
    description: 'An article demonstrating my hatred for Spaghetti Bolognese (Bolonnaise?) - as an Italian',
    isTechnical: false,
    isFood: true,
    tags: '',
    type: 'article',
    rating: 2.9,
    url: 'https://medium.com/@palladiusbonton/spaghetti-bolognese-dont-exist-1-2088d85909dd',
    // url2: https://ricc.rocks/en/posts/www.palladius.it/spaghetti-bolognese-dont-exist/
    image: 'spagbol.jpg'
  },
  {
    title: 'Spag Bol doesnt exist (ricc rocks)',
    description: 'An article demonstrating my hatred for Spaghetti Bolognese (Bolonnaise?) - as an Italian',
    isTechnical: false,
    isFood: true,
    type: 'article',
    tags: '',
    rating: 3.9,
    url: 'https://ricc.rocks/en/posts/www.palladius.it/spaghetti-bolognese-dont-exist/',
    image: 'spagbol.jpg'
  },
  {
    title: '🐧🧳 Puffin Tours',
    description: 'Riccardo family-run business, 🐧🧳Puffin Tours, inspired by Starter Kit to build Rails applications fast, with Ralix, Tailwind and more!',
    isTechnical: true,
    type: 'application',
    tags: '',
    rating: 4.9,
    url: 'https://puffintours-prod-rjjr63dzrq-ew.a.run.app/',
    image: 'puffinMcMuffin.png'

  },
  {
    title: '⚔️🤺🛡 Prompteer',
    image: 'prompteer.png',
    description: 'POC for a PromptDB, where you can store prompts, prompt templates, issue them and vote them!',
    isTechnical: true,
    type: 'application',
    rating: 4.6,
    url: 'https://genai.prompteer.it/', // broken
    isCodePrivate: true,
    tags: '',
  },
  {
    title: '✨ GenAI Kids Stories',
    image: 'genai-kids-stories.png',
    description: 'GenAI Kids Story with Vertexc AI and Palm API, wow!',
    isTechnical: true,
    type: 'application',
    rating: 4.9,
    url: 'https://genai-kids-stories-gcloud-poor-cdlu26pd4q-ew.a.run.app/', // broken
    isCodePrivate: false,
    tags: '',
  },

  //
  {
    title: '✨ JS Simple Search',
    image: 'js-simple-search.png', //'howididit.jpg'
    description: 'simple static JSON searcher, super fast!',
    isTechnical: true,
    tags: '',
    type: 'application',
    rating: 4.5,
    code: 'https://github.com/palladius/js-simple-search',
    url: 'https://github.com/palladius/js-simple-search', // TODO host this
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
    rating: 4.5,
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

];

function filterSearchResults(searchTerm, isTechnicalFilter, sortBy) {
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
      `<a href='${item.url}' >🕸️ URL</a>\n"` :
      `<a href='https://www.google.com/search?q=${item.title}' >🔎 Google this!</a>\n`
    const imageHTml = item.image ?
      `<img src="images/${ item.image }" alt="${ item.title }">` :
      ``
    const codeLink = item.code ?
      `<a href='${item.code}'>🐙 Code</a> |` :
      ``
    const linkedTitle = `<a href='${item.url}'>${item.title}</a>`
    return `<div class="card">
      ${imageHTml}
      <h3>${item.isTechnical ? '💻' : "🎨"} ${linkedTitle}</h3>
      <p>[${item.type}] ${item.description }</p>
      <p>${link} | ${codeLink}
         Rating: ${ item.rating }</p>
    </div>`;
  });

  //🖌🌈

  searchResults.innerHTML = resultElements.join('');
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
