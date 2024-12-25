async function createURLRing(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const ringContainer = document.createElement('div');
      ringContainer.classList.add('ring-container'); // Add a CSS class for styling

      data.forEach(item => {
        const linkElement = document.createElement('a');
        linkElement.href = item.url;
        linkElement.target = '_blank'; // Open link in a new tab

        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;

        linkElement.appendChild(imageElement);
        ringContainer.appendChild(linkElement);
      });

      document.body.appendChild(ringContainer); // Append the ring to the page
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);
    }
  }

  // Call the function with the URL of your JSON file
  //createURLRing('https://your-github-repo/url-data.json');

//  createURLRing('https://github.com/palladius/js-simple-search/raw/main/2025-ring/ring-data.json');
  createURLRing('/ring-data.json');
