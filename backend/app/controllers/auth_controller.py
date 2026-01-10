def create_user(user):
    if user.role not in ["student", "admin"]:
        raise ValueError("Invalid role")

    # hash password
    # save user with role
