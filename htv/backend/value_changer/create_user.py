import sqlite3

from datetime import datetime

def add_user(username, password):

    conn = sqlite3.connect("user_database.db")
    cur = conn.cursor()

    account_date = datetime.now().strftime("%Y-%m-%d")
    tree_level = 0
    studying_streak = 0

    cur.execute('''
        INSERT INTO user_data (username, password, account_date, tree_level, studying_streak) VALUES (?, ?, ?, ?, ?)''',
          (username, password, account_date, tree_level, studying_streak))
    
    conn.commit()