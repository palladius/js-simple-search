// get rating from ENV
//const envMinRating2 = parseFloat(process.env.MIN_RATING);

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

    // Create Footer
    try {
      // ... (fetch and process JSON data) ...

      // Read the version from the VERSION file
      const versionResponse = await fetch('/VERSION');
      const version = await versionResponse.text();

      // Create the footer element
      const footer = document.createElement('footer');
      footer.innerHTML = `<hr><div class="footer">[footer] Ring App version v${version}</div>`;

      // Append the footer to the page
      document.body.appendChild(footer);

    } catch (error) {
      console.error('Error fetching version or creating footer:', error);
    }
  }

  // Call the function with the URL of your JSON file
  //createURLRing('https://your-github-repo/url-data.json');

//  createURLRing('https://github.com/palladius/js-simple-search/raw/main/2025-ring/ring-data.json');
  createURLRing('/ring-data.json');
