import flask
import rmp441
from flask import Flask, send_from_directory
import os
from flask import Flask, session, redirect, url_for, render_template, request, flash


@rmp441.app.route('/ratings/<name>')
def show_ratings(name):
    """Display / route."""
    if 'username' not in session or not session['username']:
        return redirect(url_for('login'))

    context = {"poliName" : name}
 
    return flask.render_template("ratings.html", **context)