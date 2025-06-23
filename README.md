# IPL Dashboard App

A dynamic and interactive IPL (Indian Premier League) Dashboard web application built with React.js. This project allows users to browse through a list of IPL teams and view detailed match information for each team, including their latest match and a list of recent matches.

## ✨ Features

* **Home Route:**
    * Displays a list of all IPL teams fetched from a public API.
    * Shows a loading spinner (`Loader`) while data is being fetched.
* **Team Matches Route:**
    * Navigates to a dedicated page for a specific team upon clicking a team card from the Home Route.
    * Displays the team's banner, the latest match details, and a list of recent matches for the selected team.
    * Each team's match page has a unique gradient background color.
    * Shows a loading spinner (`Loader`) while match data is being fetched.
* **Client-Side Routing:** Utilizes React Router DOM's `HashRouter` for seamless navigation within the Single Page Application, ensuring compatibility with static hosting environments like GitHub Pages.
* **Responsive Design:** Optimized for various screen sizes, providing a consistent user experience on both mobile and desktop devices (implemented with Bootstrap and CSS).
* **API Integration:** Fetches and displays real-time IPL team and match data using asynchronous HTTP GET requests.

## 🚀 Technologies Used

* **Frontend:**
    * React.js (Components, State, Props, Routing)
    * CSS
* **API Interaction:**
    * RESTful APIs
    * HTTP GET Requests
* **Version Control & Deployment:**
    * Git
    * GitHub (including GitHub Pages/`gh-pages` for live deployments)
* **Development Tools:**
    * VS Code (Integrated Development Environment)
* **Other Concepts:**
    * Client-side Routing (`HashRouter`)
    * Conditional Rendering
    * Event Listeners
    * Data Fetching & State Management
    * Camel Case Conversion (for API responses)

## 🌐 Live Demo

You can view the live deployed application here:
[https://pakupodisathish.github.io/iplDashboard/](https://pakupodisathish.github.io/iplDashboard/)

*(Note: If you encounter issues on direct refresh of sub-routes, remember to check the URL structure with `#` due to HashRouter, or ensure `homepage` in `package.json` is correctly configured if you switch to BrowserRouter with a 404 fallback.)*

## 📦 API Endpoints

This project consumes data from the following public IPL APIs:

### 1. `teamsApiUrl`
* **API:** `https://apis.ccbp.in/ipl`
* **Method:** `GET`
* **Description:** Returns a list of all IPL teams.
* **Example Response (JSON):**
    ```json
    {
      "teams": [
        {
          "name": "Royal Challengers Bangalore",
          "id": "RCB",
          "team_image_url": "[https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png](https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png)"
        },
        // ... (other teams)
      ]
    }
    ```

### 2. `teamMatchesApiUrl`
* **API:** `https://apis.ccbp.in/ipl/:id` (where `:id` is the team ID, e.g., `KKR`)
* **Method:** `GET`
* **Description:** Returns details of all recent matches for a specific team.
* **Example Response (JSON):**
    ```json
    {
      "team_banner_url": "[https://assets.ccbp.in/frontend/react-js/kkr-team-img.png](https://assets.ccbp.in/frontend/react-js/kkr-team-img.png)",
      "latest_match_details": {
        "umpires": "CB Gaffaney, VK Sharma",
        "result": "Kolkata Knight Riders Won by 7 wickets",
        "man_of_the_match": "Shubman Gill",
        "id": "1216545",
        "date": "2020-09-26",
        "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
        "competing_team": "Sunrisers Hyderabad",
        "competing_team_logo": "[https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png](https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png)"
      },
      // ... (recent matches array)
    }
    ```

## 🛠️ Setup Instructions

To get a local copy of the project up and running, follow these simple steps.

### Prerequisites

* Node.js (v16.x or later recommended, but compatible with v20+)
* npm (Node Package Manager) or Yarn
* Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/pakupodisathish/iplDashboard.git](https://github.com/pakupodisathish/iplDashboard.git)
    cd iplDashboard
    ```
    *(Ensure you use the correct casing for your repository name)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Handle Node.js/OpenSSL compatibility (if using Node.js v17+):**
    If you encounter `Error: error:0308010C:digital envelope routines::unsupported` when starting, run this command in your terminal **before** `npm start`:
    * **For Command Prompt:**
        ```cmd
        set NODE_OPTIONS=--openssl-legacy-provider
        ```
    * **For PowerShell:**
        ```powershell
        $env:NODE_OPTIONS="--openssl-legacy-provider"
        ```

### Running the App

1.  **Start the development server:**
    ```bash
    npm start
    # or yarn start
    ```
2.  Open your browser and navigate to `http://localhost:3000` (or the address provided in your terminal).

## 📂 Project Structure & Components

The project follows a component-based architecture for modularity and reusability:
src/
├── App.js                      # Main application component
├── index.js                    # Entry point of the React app
├── components/                 # Directory for all reusable components
│   ├── Home/
│   │   ├── index.js            # Home Route component (displays team list)
│   │   └── index.css
│   ├── TeamCard/
│   │   ├── index.js            # Component for individual team cards
│   │   └── index.css
│   ├── TeamMatches/
│   │   ├── index.js            # Team Matches Route component (displays team details and matches)
│   │   └── index.css
│   ├── LatestMatch/
│   │   ├── index.js            # Component for displaying the latest match details
│   │   └── index.css
│   ├── MatchCard/
│   │   ├── index.js            # Component for individual recent match cards
│   │   └── index.css
│   └── Loader/                 # (Assumed) Component for loading spinner
│       └── index.js
│       └── index.css
└── ... (other files like assets, etc.)


## 💡 Important Notes & Best Practices Implemented

* **Image Alt Attributes:** All images, including the team banner and IPL logo, have appropriate `alt` attribute values for accessibility (e.g., `team banner`, `ipl logo`).
* **Camel Case Conversion:** API responses are consistently converted from snake_case to camelCase for easier data handling in React components.
* **Route Definitions:**
    * `/` renders the `HomeRoute` component.
    * `/team-matches/:id` renders the `TeamMatchesRoute` component, dynamically fetching data based on the team `id`.
* **`HashRouter` Usage:** Utilized in `index.js` for client-side routing, making the application compatible with GitHub Pages.
* **Dynamic Styling:** Each `TeamMatchesRoute` dynamically applies different gradient background colors based on the selected team, enhancing visual appeal.

## 🤝 Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any contributions are welcome!

---





