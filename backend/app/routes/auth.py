from fastapi import APIRouter, Depends
from app.schemas.user_schema import UserSignup

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/signup")
def signup(user: UserSignup):
    return {
        "message": "Signup successful",
        "data": user
    }


