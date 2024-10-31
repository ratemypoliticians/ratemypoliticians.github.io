"""
rmp441 index (main) view.

URLs include:
/
"""
import flask
import rmp441

from flask import Flask, send_from_directory
from flask import Flask, session, redirect, url_for, render_template, request, flash
import os


@rmp441.app.route('/')
def show_index():
    """Display / route."""
    if 'username' not in session or not session['username']:
        return redirect(url_for('login'))
    context = {}
    return flask.render_template("index.html", **context)


@rmp441.app.route('/account/')
def account():
    print("Here")
    if 'username' not in session or not session['username']:
        return redirect(url_for('login'))
    print("here2")
    return render_template('account.html', username=session['username'])

@rmp441.app.route('/logout/')
def logout():
    session.clear()
    return redirect(url_for('login'))

@rmp441.app.route('/login/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        if username:
            session['username'] = username
            return redirect(url_for('show_index'))
        else:
            flash("Please enter a username.")
    return render_template('login.html')

app = Flask(__name__)