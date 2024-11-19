from flask import Flask, render_template, request, redirect, url_for, session, flash
import sqlite3
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

DATABASE = 'users.db'

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_products_db():
    with get_db() as db:
        db.execute('''
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                price REAL NOT NULL
            )
        ''')
        db.commit()


def setup():
    if not os.path.exists(DATABASE):
        init_db()  # Create users table
        init_products_db()  # Create products table if not exists


setup()
print("Database setup complete")

@app.route('/', methods=['GET', 'POST'])
def index():
    if 'username' in session:
        return render_template('index.html', username=session['username'])
    
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        with get_db() as db:
            user = db.execute('SELECT * FROM users WHERE username = ? AND password = ?',
                              (username, password)).fetchone()
            if user:
                session['username'] = user['username']
                return redirect(url_for('index'))
            else:
                return 'Invalid credentials'
    
    return render_template('login.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']
    
    with get_db() as db:
        try:
            db.execute('INSERT INTO users (username, password) VALUES (?, ?)',
                       (username, password))
            db.commit()
            return redirect(url_for('index'))
        except sqlite3.IntegrityError:
            return 'Username already exists'

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('feedback'))

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        rating = request.form.get('rating')
        comment = request.form.get('comment')
        # Flash message to inform the user
        flash('Your feedback has been successfully submitted!', 'success')
        return redirect(url_for('index'))
    
    return render_template('feedback.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/shopping')
def main_page():
    if 'username' not in session:
        return redirect(url_for('index'))

    username = session['username']

    try:
        with get_db() as db:
            products = db.execute('SELECT * FROM products').fetchall()
    except sqlite3.OperationalError as e:
        return f"Database error: {e}"

    return render_template('main_page.html', username=username, products=products)


 

if __name__ == '__main__':
    setup()  # Ensure this initializes the database and tables
    app.run(debug=True)
