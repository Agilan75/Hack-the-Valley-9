import sqlite3

def increase_tree_level(username):
    conn = sqlite3.connect("backend/user_database.db")
    cur = conn.cursor()
    
    data_request = cur.execute(f"SELECT * FROM user_data WHERE username = ?", (username,))
    user_data = cur.fetchone()
    
    tree_level = user_data[4]
    username = user_data[1]

    tree_level += 1

    print(username, tree_level)
    
    cur.execute("UPDATE user_data SET tree_level = ? WHERE username = ?", (tree_level, username))
    conn.commit()