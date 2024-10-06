import sqlite3

def create_db():
    conn = sqlite3.connect('backend/user_database.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_data (
            email TEXT NOT NULL,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            account_date TEXT NOT NULL,
            tree_level INTEGER NOT NULL,
            studying_streak INTEGER NOT NULL
        )
    ''')

    # close connection commit
    conn.commit()
    conn.close()

    print("Database created")

create_db()