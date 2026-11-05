# Import FastAPI to create our backend application
from fastapi import FastAPI

# Import CORS middleware to allow requests from our React frontend
from fastapi.middleware.cors import CORSMiddleware

# Create the FastAPI application
app = FastAPI()

# Allow our local React frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This route checks whether the backend is running
@app.get("/")
def home():
    # Return a message that React can display
    return {"message": "CareerPrep AI backend is running"}