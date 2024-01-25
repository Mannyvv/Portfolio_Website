
import pokeImage from '../../src/assets/images/pokemon.png';
import demoImage from '../../src/assets/images/demonotes.png';
import readmeImage from '../../src/assets/images/readme.png';

export const Cards = [
    {
        "title": "Pokemon with Python",
        "subtitle": "Subtitle 1",
        "text": "I developed a small rendition of \
        the beloved Nintendo Pokémon game, all implemented in Python. This project included the integration of a user interface accessible\
         through both the command line and tkinter components. On the backend, I managed data using an excel sheet, employing the pandas library \
         for loading and manipulation of data",
        "image": pokeImage,
        "links": ["https://github.com/Mannyvv/NuCamp_Portfolio_Project_Python_PokemonGame/blob/main/Pokemon.py", "https://www.youtube.com/watch?v=90R3dt3SO7U"]
    },
    {
        "title": "Post It with React",
        "subtitle": "Subtitle 2",
        "text": " The app enables users to create and display notes on a virtual board with the motto \
        \"Read a Note, Leave a Note.\" Key features include a form for entering title and content, which \
        is transformed into a virtual \"post-it\" note on the display wall. Additionally, a tour is provided\
         for first-time users to familiarize themselves with the app. The technologies used include React.js for \
         the front end, an Express.js server for CRUD actions, and a PostgreSQL database hosted on ElephantSQL for data storage.",
        "image": demoImage,
        "links": ["https://demo-notes.com/", "https://github.com/Mannyvv/NoteApp_React_Frontend"]
    },
    {
        "title": "ReadMe with React",
        "subtitle": "Subtitle 3",
        "text": "In the Nucamp React course, I'm currently immersed in the re-development of my 'ReadMe - Books For All,'\
         as a full-stack website. For the front end, I performed a complete overhaul using the React.js framework. On the back end \
         I used a Json-server, dedicated to managing user data, and an Express Proxy Server, to make API calls to facilitate book searches.\
          I will continue to work on this project to include user to user messaging, personal libraries, and internal book searches.",
        "image": readmeImage,
        "links": ["https://youtu.be/SXLvNYUDnnE", "https://github.com/Mannyvv/ReadMe_Site_React/blob/main/src/features/Search/BookCard.js"]
    },

];
