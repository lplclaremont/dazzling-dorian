# Dazzling Dorian

## A fun fan-made delight, paying tribute to the great artist Dorian Electra.

### Overview
This is a solo project of mine which I am using to develop my frontend skills in React with a Ruby on Rails API backend. Since I have not used Ruby on Rails before, I thought it a good opportunity to learn the backend framework with a frontend that I am more comfortable in (React).
Currently the page contains a soundboard which plays Dorian Electra sountbites when you click on different areas and a video playlist of embedded Youtube videos so you can experience a hand picked journey through Dorian's work.

There is a posts section which I will continue to work on, allowing users to share their thoughts and feelings anonymously.

### Technologies used
- React
- Ruby on Rails
- Cypress

### Running the program

Open your terminal and run the following:

```bash
# Clone this repo
git clone https://github.com/lplclaremont/dazzling-dorian

# Install dependencies
cd dazzling-dorian

cd dazzling-dorian-frontend
npm install

cd ../dazzling-dorian-api
bundle

# Run the servers (in separate terminals)
# Will run on localhost:3000
cd dazzling-dorian-api
rails s

# Will run on localhost:3001
cd dazzling-dorian-frontend
npm start
```

Now you can visit http://localhost:3001 in your preferred browser and start exploring!

### Testing the program

#### Frontend:

```bash
# Open the cypress browser in frontend folder
cd dazzling-dorian-frontend
npx cypress open
```