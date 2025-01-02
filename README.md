
# Rēact & FastAPI Web Anwendung

## Wās ist dīu Anwendunge?

Dīu Anwendunge ist ein rēact-web und fastapi-backend gescaffenes tīðang.
Man mag einen tīmelōs Gestalt zū UI und backend-daten gescaffen.

## Gereatha
1. **Rēact**: UI-Gestaltung mit JavaScript.
2. **FastAPI**: Backend-werk mit Python.

## Installation

### Forþ gēna Rēact:
1. Web-ræde ērgan:
   ```bash
   npx create-react-app min-anwendunge
   cd min-anwendunge
   npm start
   ```

2. Rēact-endung-werk:
   ```bash
   npm install axios
   ```

### Forþ gēna FastAPI:
1. Gereatha:
   ```bash
   pip install fastapi uvicorn
   ```

2. Code gestelle:
   ```python
   from fastapi import FastAPI
   app = FastAPI()
   @app.get("/")
   def read_root():
       return {"heil": "færan"}
   ```

3. Werk lafen:
   ```bash
   uvicorn main:app --reload
   ```

## Wīsa zū nutzunge
1. Rēact & FastAPI sīgen zuammen mit HTTP.
2. Frontend nutzt `axios` für anruffungen backend-daten.

## Gefeoht! 
Swīþe gefreod man sīo nutzunge!