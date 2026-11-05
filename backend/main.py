# Import FastAPI to create our backend application
from fastapi import FastAPI

# Create the FastAPI application for CareerPrep AI
app = FastAPI()


# This route runs when someone visits the backend homepage
@app.get("/")
def home():
    # Return a message to confirm the backend is working
    return {"message": "CareerPrep AI backend is running"}