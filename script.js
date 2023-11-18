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
    //. https://github.com/palladius/genai-googlecloud-scripts/blob/main/03-ruby-medium-article-slurper/outputs/medium-latest-articles.palladiusbonton.txt.json
    //song: "The Road Goes On Forever"
},
  {
    title: 'Script 3c (technical): Bard rocks!',
    description: 'This was created with Bard Third(fifth?) interaction.',
    isTechnical: true,
    rating: 4.9,
    image: 'sounds-good-riccardo-meme.jpeg'

  },
  {
    title: '[Riccardo] Spag Bol doesnt exist',
    description: 'This was created with Bard Third(fifth?) interaction.',
    isTechnical: false,
    isFood: true,
    rating: 2.9,
    image: 'spagbol.jpg'
  },
  {
    title: '🐧🧳 Puffin Tours',
    description: 'Riccardo family-run business, 🐧🧳Puffin Tours, inspired by Starter Kit to build Rails applications fast, with Ralix, Tailwind and more!',
    isTechnical: true,
    rating: 4.9,
    URL: 'https://puffintours-prod-rjjr63dzrq-ew.a.run.app/',
    image: 'puffinMcMuffin.png'

  },



];

function filterSearchResults(searchTerm, isTechnicalFilter, sortBy) {
  let filteredResults = data;

  if (searchTerm) {
    filteredResults = filteredResults.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const descriptionMatch = item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch || descriptionMatch;
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
    return `<div class="card">
      ${imageHTml}
      <h3>${ item.title }</h3>
      <p>${ item.description }</p>
      ${item.isTechnical ? '💻' : "🎨" }
      <p>${link} |
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
});
