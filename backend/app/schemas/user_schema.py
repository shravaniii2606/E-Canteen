from pydantic import BaseModel, EmailStr
from typing import Literal

class UserSignup(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: Literal["student", "admin"]

