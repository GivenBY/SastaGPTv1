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

3. **Install Flask:**
While the virtual environment is active, install Flask using `pip`:

```
pip install flask
```

## Running the Application

1. **Navigate to the Project Directory:**
Make sure you are in the project directory where the `app.py` file is located.

2. **Run the Application:**
Start the Flask application by running the following command:

```
python app.py
```

Your Flask application will be hosted locally on `localhost:5000`.

## Additional Information

- `app.py`: This file contains the Flask application code.
- `venv/`: This directory contains the Python virtual environment files and packages.

Make sure to deactivate the virtual environment once you are done using the application:

```
deactivate
```

Now you are all set to run the SastaGPT application locally on your machine!


## Work Left to Do

- **MongoDB Integration:** Implement MongoDB integration to store chat history.

- **OpenAI AI Chat Integration:** Integrate OpenAI's API to enhance the chat functionality with AI capabilities.

Feel free to contribute to these tasks or open issues for any bugs or additional features you'd like to see in SastaGPT!

