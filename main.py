from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Разрешить запросы с React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель данных
class Item(BaseModel):
    id: int
    name: str

# Хранилище для данных (вместо базы данных)
items = []

@app.get("/items")
def get_items():
    return items

@app.post("/items")
def create_item(item: Item):
    items.append(item)
    return {"message": "Item added successfully", "item": item}
