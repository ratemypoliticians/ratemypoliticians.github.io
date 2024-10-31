import flask
import rmp441
from flask import Flask, send_from_directory
import os


@rmp441.app.route('/ratings/<name>')
def show_ratings(name):
    """Display / route."""
    context = {"poliName" : name}
 
    return flask.render_template("ratings.html", **context)