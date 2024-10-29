"""File to serve an image from the static/uploads/ directory."""
import os
import flask
import rmp441


@rmp441.app.route("/uploads/<filename>")
def serve_image(filename):
    """Serve an image from the static/uploads/ directory."""

        # print("username not in sesssion")
        # return flask.redirect(flask.url_for("login"))
    temp_root_path = os.path.dirname(rmp441.app.root_path)
    file_path = os.path.join(temp_root_path, "var", "uploads", filename)
    if not os.path.isfile(file_path):
        flask.abort(404)
    return flask.send_from_directory(
        os.path.join(temp_root_path, "var", "uploads"), filename
    )
