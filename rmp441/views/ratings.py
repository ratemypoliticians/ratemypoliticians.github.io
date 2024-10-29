import flask
import rmp441
from flask import Flask, send_from_directory
import os


@rmp441.app.route('/ratings/')
def show_ratings():
    """Display / route."""
    context = {}
    print("SUPPP")
    return flask.render_template("ratings.html", **context)