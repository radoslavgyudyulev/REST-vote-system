# REST-vote-system

There is three endpoins :
    "POST"
    /api/create => Accept three params : q,a1,a1 and return obj with access token
    
    EXAMPLE >
    
    "vote": {
        "q": "How are you today?",
        "a1": "fine.",
        "a2": "bad."
    },
    "a1points": 0,
    "a2points": 0,
    "_id": "5b798326d509d04c5b887202",
    "token": "OXMkOp8DujUX",
    "__v": 0
    
    
    /api/get => Accept token and return the obj
    
    EXAMPLE >
    
    POST request with token in the body // token = "OXMkOp8DujUX"
    
    RESPONSE >
    
    "vote": {
        "q": "How are you today?",
        "a1": "fine.",
        "a2": "bad."
    },
    "a1points": 0,
    "a2points": 0,
    "_id": "5b798326d509d04c5b887202",
    "token": "OXMkOp8DujUX",
    "__v": 0
    
    /api/vote => Accept token and point (point must be 1 for votting a1 or 2 for votting a2)
    
    POST request request with token in the body and point // token = "OXMkOp8DujUX"   point = 1
    
    RESPONSE >
    
    "vote": {
        "q": "How are you today?",
        "a1": "fine.",
        "a2": "bad."
    },
    "a1points": 1,
    "a2points": 0,
    "_id": "5b798326d509d04c5b887202",
    "token": "OXMkOp8DujUX",
    "__v": 0
    
