1. ricc copy this snippet
2. point to jsss-data.json

=> try it out locally!

async function createURLRing(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const ringContainer = document.createElement('div');
      ringContainer.classList.add('ring-container');

      data.forEach(item => {
        const linkElement = document.createElement('a');
        linkElement.href = item.url; // Use the "url" property from the new JSON
        linkElement.target = '_blank';

        const imageElement = document.createElement('img');
        imageElement.src = item.image; // Use the "image" property from the new JSON
        imageElement.alt = item.title; // Use the "title" property from the new JSON

        // Add a tooltip element (using "description" from the new JSON)
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

        // Add the name (title) as text within the link
        const nameElement = document.createElement('span');
        nameElement.textContent = item.title; // Use the "title" property

        linkElement.appendChild(imageElement);
        linkElement.appendChild(nameElement);

        ringContainer.appendChild(linkElement);
      });

      document.body.appendChild(ringContainer);
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);
    }
  }

  // Call the function with the URL of your new JSON file
  createURLRing('https://raw.githubusercontent.com/palladius/y2k-utils/main/websites.json'); // Replace with the actual URL
