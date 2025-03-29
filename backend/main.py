from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define chatbot response
@app.get("/api/chat")
def chat(mood: str):
    responses = {
        "happy": "I'm glad to hear that! 😊...here is a song for you: permanent vacation 5sos",
        "sad": "Oh no, I'm here for you! 💙 here is a song for you: Hound Dog elvis presley",
        "hello": "Hi...how are you feeling today?",
        "hi": "Hello...how are you feeling today?",
        "i'm feeling happy": "That's Great!, Happiness looks great on you!",
        "yes": "you want a song recommendation?, tell me how u feel in one word",
        "angry": "Take a deep breath. Let's calm down together. 🌿 I know anger can be tough here is a song for you: 12 Stones broken",
        "frustrated": "Oh no, Im here for you, wanna listen to some music? here's a song that will work for you ",
        "loved": "Omg! my single heart!...here's a song for you: Love is wicked brick and lace",
        "calm": "tha sounds good!..heres a song recommendation for you: Careless whisper George Michael",
        "Rock": "Let's Rock! Young Blood 5sos",
        "Rich": "Tommy Richman Million Dollars Baby",
        "Alone": "OH no, Here's a song for you Sickick Broken",
        "iam feeling good": "you want a song recommendation?, tell me how u feel in one word",
        "im feeling good": "you want a song recommendation?, tell me how u feel in one word",
        "i'm feeling good": "you want a song recommendation?, tell me how u feel in one word",
        "im feeling well": "you want a song recommendation?, tell me how u feel in one word",
        "good": "you want a song recommendation?, tell me how u feel in one word",
        "Thanks": "You are welcome you want a song recommendation?, tell me how u feel in one word",
        "Thank you": "You are welcome you want a song recommendation?, tell me how u feel in one word",

    }
    return {"response": responses.get(mood.lower(), "I don't understand that mood.")}
