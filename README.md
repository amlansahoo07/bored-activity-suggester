<img width="1024" alt="image" src="https://github.com/amlansahoo07/bored-activity-suggester/assets/35356517/ec818475-0ab1-42b2-ba32-c1e97d4d1472">

# I'm Bored
A web app built with Express.js and Axios to fetch and display random activities to help users find something to do when they are bored. The website uses the Bored API (bored-api.appbrewery.com) to fetch random activities and filter activities based on user input.

## Features
- Fetch a random activity and display it on the homepage in card format.
- Filter activities by type and number of participants using a form.
- Handle errors gracefully and display relevant messages.

## Technologies Used
- Node.js
- Express.js
- Axios
- EJS
- body-parser

## Getting Started
1. Clone the repository:
  ```sh
  git clone https://github.com/amlansahoo07/bored-activity-suggester.git
  cd bored-activity-suggester
  ```
2. Install dependencies:
  ```sh
  npm install
  ```
3. Start the server using Nodemon:
  ```sh
  nodemon index.js
  ```
4. Open your browser and go to `http://localhost:3000` to view the app.

## Usage
- Visit the homepage to get a random activity suggestion.
- Use the form to filter activities by selecting a type and the number of participants.
- Click "Go" to fetch and display a matching activity or an error message if no matches are found.

## Acknowledgements

This project is inspired and developed as part of [Angela Yu's Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)'s on Udemy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
