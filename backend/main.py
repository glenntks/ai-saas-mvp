from fastapi import FastAPI
from models import Message
from ai import call_openai_api

app = FastAPI()

@app.post("/generate-reply")
async def generate_reply(message: Message):
    reply = call_openai_api(message.content)
    return {"reply": reply}