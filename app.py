from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# Replace 'your_actual_api_key_here' with your TMDb API key
tmdb_api_key = 'c76c60bdc7efb4fd4303a5912051277e'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/search-movies')
def search_movies():
    search_query = request.args.get('query')

    url = f'https://api.themoviedb.org/3/search/movie?api_key={tmdb_api_key}&query={search_query}'

    response = requests.get(url)

    if response.ok:
        movie_data = response.json()
        return jsonify(movie_data)
    else:
        return jsonify({'error': 'Failed to fetch movie data from TMDb'}), 500


if __name__ == '__main__':
    app.run()
