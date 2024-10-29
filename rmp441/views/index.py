"""
rmp441 index (main) view.

URLs include:
/
"""
import flask
import rmp441

from flask import Flask, send_from_directory
import os


@rmp441.app.route('/')
def show_index():
    """Display / route."""
    context = {}
    return flask.render_template("index.html", **context)

app = Flask(__name__)

# Serve files from the 'uploads' folder
@app.route('/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(os.path.join(app.root_path, 'sql/uploads'), filename)
