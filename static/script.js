document.getElementById('searchButton').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value;
  const apiUrl = '/search-movies?query=${encodeURIComponent(query)}';

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Process the API response data and display movie details
          // For example, you can loop through the data and create elements to display the movie details
          const movieResultsDiv = document.getElementById('movieResults');
          movieResultsDiv.innerHTML = ''; // Clear previous results

          data.results.forEach(movie => {
              const movieDiv = document.createElement('div');
              movieDiv.innerHTML = `<h3>${movie.title}</h3>
                                    <p>Release Date: ${movie.release_date}</p>
                                    <p>${movie.overview}</p>
                                    <p>Rating: ${movie.vote_average}</p>`;
              movieResultsDiv.appendChild(movieDiv);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          // Handle any errors gracefully
      });
});
