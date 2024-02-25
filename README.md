# BDH-Scraping-UI Project README

## Overview

This React project, developed in TypeScript, showcases a responsive grid created using the ANTD design library. The grid interacts with a MongoDB database, allowing users to download a generated CSV file. The project integrates web scraping from the BDH Online website to update data in the MongoDB. The app provides search functionality by first name, last name, and city, along with pagination to optimize backend APIs and reduce response time for large datasets.

## Features

1. **Responsive Grid with ANTD:**
   - Utilizes the ANTD design library to create a responsive grid for an improved user interface.

2. **Data Update and CSV Generation:**
   - Invoking the CSV generation function updates data in MongoDB through web scraping from [BDH Online](https://www.bdh-online.de/patienten/therapeutensuche/), ensuring the latest information is included in the generated CSV.

3. **Search Functionality:**
   - Enables users to search the grid by first name, last name, and city, facilitating easy data exploration.

4. **Pagination:**
   - Implements pagination to enhance backend APIs and minimize response time when dealing with large datasets.

## Getting Started Locally

1. **Clone the Frontend Repository:**
   ```bash
   git clone https://github.com/Uchaneishvili/BDH-Scraping-UI.git
   ```

2. **Install Dependencies:**
   ```bash
   cd BDH-Scraping-UI
   npm install
   ```

3. **Clone the Backend API Repository:**
   ```bash
   git clone https://github.com/Uchaneishvili/BDH-Scraping-API.git
   ```

4. **Install Backend API Dependencies:**
   ```bash
   cd BDH-Scraping-API
   npm install
   ```

5. **Start the Backend API:**
   ```bash
   npm start
   ```
   The API will be running on `http://localhost:3001` by default.

6. **Start the React Project:**
   ```bash
   cd BDH-Scraping-UI
   npm start
   ```
   The React app will be accessible on `http://localhost:3000`. Open your browser to explore the app.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
