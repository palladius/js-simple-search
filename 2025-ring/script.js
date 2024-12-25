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

        // Add the name as text within the link
const nameElement = document.createElement('span');
nameElement.textContent = item.name;

        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = item.description;
        linkElement.appendChild(tooltip);

        // Show/hide tooltip on hover
        linkElement.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
        });
        linkElement.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
        });

        linkElement.appendChild(imageElement);
        linkElement.appendChild(nameElement); // Add the name element
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
