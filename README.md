# SastaGPT Readme

## Setting up the Virtual Environment

To run the SastaGPT application locally, you need to set up a virtual environment, install Flask, and run the `app.py` file.

1. **Create Virtual Environment:**
   Open your terminal or command prompt and navigate to the project directory. Run the following command to create a virtual environment named `venv`:

   ```
   python -m venv venv
   ```

2. **Activate the Virtual Environment:**
   After creating the virtual environment, activate it using the appropriate command based on your operating system:

- **Windows:**

  ```
  venv\Scripts\activate
  ```

- **Linux/macOS:**
  ```
  source venv/bin/activate
  ```

3. **Install Dependencies:**
   While the virtual environment is active, install Flask and other required packages using `pip`:
   ```
   cd SastaGPT
   ```
   ```
   pip install -r requirements.txt
   ```

## Running the Application

1. **Navigate to the Project Directory:**
   Make sure you are in the project directory where the `app.py` file is located.

2. **Set Environment Variables:**
   Ensure that your `.env` file is properly configured with the following parameters:

   ```
   OPENAI_API_KEY=your_openai_api_key
   MONGO_URL=your_mongodb_connection_string
   ```

3. **Run the Application:**
   Start the Flask application by running the following command:
   ```
   python app.py
   ```

Your Flask application will be hosted locally on `localhost:5000`.

## MongoDB Integration

SastaGPT uses MongoDB to store chat history. To integrate MongoDB:

- **Install MongoDB:**
  If you haven't already installed MongoDB, please follow the official MongoDB installation guide for your operating system.

- **Update `.env` File:**
  Update the `MONGO_URL` parameter in the `.env` file with your MongoDB connection string.

- **Modify Code:**
  Implement MongoDB integration in the `app.py` file. You can use the `pymongo` library to interact with MongoDB.

## Work Left to Do

- **User Authentication:** Implement user authentication and authorization for secure user interactions.

- **Improved UI/UX:** Enhance the user interface and experience for a more visually appealing and intuitive application.

- **Error Handling:** Implement robust error handling mechanisms to provide informative error messages to users in case of failures.

Feel free to contribute to these tasks or open issues for any bugs or additional features you'd like to see in SastaGPT!

---
