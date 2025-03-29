from fastapi import APIRouter
import random

router = APIRouter()

# Sample responses (for now)
responses = {
    "happy": ["I'm glad you're feeling happy! 🎉", "Happiness looks great on you! 😊"],
    "sad": ["I'm here for you. 💙", "It's okay to feel sad sometimes. Do you want a song recommendation?"],
    "angry": ["Take a deep breath. Let's calm down together. 🌿", "I know anger can be tough. Want to talk about it?"],
    "neutral": ["Tell me more! I'm listening. 🎧", "Let's find a song that matches your vibe!"]
}

@router.post("/chat")
async def chat(user_message: dict):
    mood = user_message.get("mood", "neutral")  # Default to neutral
    response = random.choice(responses.get(mood, responses["neutral"]))  
    return {"bot_response": response}
