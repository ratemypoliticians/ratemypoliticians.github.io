"""rmp441 development configuration."""

import pathlib

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'0S6z\xf9\xd42\x88\xa1\xb5\x06\x8f-\xea\xef\xee\x9e\xea\x01\x06h]\xd2{'
SESSION_COOKIE_NAME = 'login'

# File Upload to var/uploads/
RMP441_ROOT = pathlib.Path(__file__).resolve().parent.parent
UPLOAD_FOLDER = pathlib.Path('/var/www/uploads')

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024

# Database file is var/rmp441.sqlite3
DATABASE_FILENAME = RMP441_ROOT/'var'/'rmp441.sqlite3'

