# random-gifs
This React project features a random GIF generator implemented using a custom hook. The hook fetches a random GIF from the Giphy API and updates the component state to display the GIF. This project is ideal for adding dynamic, fun content to your React application.

# Features
Fetches and displays random GIFs from the Giphy API.
Custom hook for easy integration and reuse.
Simple setup and customization for different GIF sources.

# Installation

Clone the repository:
git clone https://github.com/yourusername/random-gif-generator.git

Navigate to the project directory:
cd random-gif-generator

Install dependencies:
npm install

Start the development server:
npm start

# How It Works
The core functionality is provided by a custom hook useRandomGif, which handles fetching a random GIF from the Giphy API. The hook updates the component state with the GIF URL, which is then rendered in the component.

# Get Your Giphy API Key

To use this project, you'll need a Giphy API key. Follow these steps to obtain one:

1. Go to the Giphy Developer Portal: Giphy Developers
2. Sign up or log in to your Giphy account.
3. Create a new app by clicking on "Create an App" and follow the instructions to generate    your API key.
4. Replace the apiKey in the useRandomGif hook with your newly obtained API key.