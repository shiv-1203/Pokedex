# Description of Pokedex Application
Introducing an innovative React.js Pokedex web application that brings the Pokemon universe to life! Seamlessly integrating the powerful [Pokemon API](https://pokeapi.co/), this cutting-edge platform offers an intuitive and captivating experience for users to explore, retrieve, and analyze Pokemon statistics. The user-friendly interface enhances the journey, allowing enthusiasts to dive into the vast world of Pokemon effortlessly.

For a visually stunning experience, each Pokemon comes to life with dynamic images sourced from [https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/id.svg](https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/id.svg), where the Pokemon ID is dynamically replaced with the respective Pokemon's unique identifier.

Embark on your Pokemon adventure now and discover the magic at [Pokedex_App](https://shiv-1203.github.io/Pokedex/).

**Note:** While running this application through the provided link, please be aware that there might be a delay as the frontend makes several API calls. Kindly be patient and allow sufficient time for the page to completely load. It just takes a couple of minutes. Your understanding is appreciated.

## Project Description
![image](https://github.com/shiv-1203/Pokedex/assets/105982373/ad9db78e-7e87-4660-b7b3-f46010038604)

Welcome to the Pokedex React App! 🌐 This project is a dynamic exploration of the Pokemon universe, crafted using React.js and powered by the Pokemon API. The visual representation of the final output can be found in the provided image.

### Features and Components

#### 1. Search Bar
- Basic input field facilitates easy searching of Pokemon by name or ID.

#### 2. Infinite Scroll for Pokemon Listing
- Experience a seamless, infinite scrollable list of Pokemon, providing a user-friendly interface.

#### 3. Interactive Pokemon Cards
- Engaging cards showcase Pokemon name, image, type, and ID.
- Rich micro-interactions elevate the user experience.

#### 4. Pokemon Detail Modal
- Click on a Pokemon card to reveal a detailed modal dialog, presenting comprehensive Pokemon statistics.

#### 5. Real-time Type Filter
- Dynamic filter functionality (dropdown) offers live results for filtering Pokemon based on type.
- Real-time filtering without page refresh.

### Getting Started with local setup
1. Clone the repository.
    ```bash
    git clone https://github.com/shiv-1203/Pokedex.git
    ```
2. Install dependencies.

    ```bash
    cd pokedex-react-app
    npm install react-spinners react-sweetalert2 react-select 
    ```
    ```bash
    npm install gh-pages --save-dev
   ```
    
4. Run the app.
    ```bash
    npm start
    ```
**Note:** If you plan to host your frontend app on GitHub Pages, only then you need to install `gh-pages`.
    
Explore the captivating world of Pokemon with our feature-rich Pokedex app! 🚀

Visit the [Pokedex_App](https://shiv-1203.github.io/Pokedex/) hosted on GitHub Pages.

## Navigation and Execution

1. Click on the [Pokedex_App](https://shiv-1203.github.io/Pokedex/) to explore the live application. 🖱️

2. Upon clicking the link, a **spinner** will load until the data is fetched. Please wait for a couple of minutes for the frontend to load as it fetches data from one or more API sources. ⏳

    - This initial loading phase ensures that the application retrieves the necessary Pokemon data for an immersive experience.

3. Navigate to the **"Type Filter"** tab in the top right corner. **Select a Pokemon type**, and wait for the results to load. The total count of results for the selected type out of the total 1302 Pokemon will be displayed. 🧭

    - The **"Type Filter"** allows you to filter and explore Pokemon based on their types. The live count keeps you informed about the number of Pokemon available for the selected type.

4. Use the **"Search"** tab to enter a correct **Pokemon ID or name**. The results, along with a **count of 1**, will be displayed. For **incorrect or non-existent IDs or names**, the result **count will be 0**. 🔍

    - The **"Search"** functionality provides a quick way to access specific Pokemon by their ID or name, with real-time result feedback.

4. Each Pokemon card will display information in the following format:
    - **Top Right:** #Id 🆔
    - **Top Left Corner:** Pokemon Name 🌐
    - **Bottom Left Corner (Black Box):** Pokemon Type 📦
    - **Bottom Right:** **"Show Stats"** Button 📊

5. Click on the **"Show Stats"** button on each Pokemon card to display detailed statistics for each Pokemon:
    - **Left Column:** Pokemon Image 🖼️
    - **Right Column:**
        - HP
        - Attack
        - Defense
        - Special Attack
        - Special Defense
        - Speed

    - This provides a comprehensive overview of each Pokemon's stats.
          
![image](https://github.com/shiv-1203/Pokedex/assets/105982373/f4c0af9d-9e15-4f89-9fe8-9a598f9106c8)

6. Note that keeping the search bar empty and pressing the search button won't work. Make changes to the search bar content for the button to be clickable. ⚠️

    - This ensures intentional searches, preventing accidental or empty queries.

Feel free to explore the project and reach out if you have any questions or feedback. Happy exploring! 🎉
