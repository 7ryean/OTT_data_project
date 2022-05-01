import os


basedir = os.path.abspath(os.path.dirname(__file__))

# CLIENT_ID = "a282918e25d9c4f0e1ff5cc2c1b93d06"
# CLIENT_SECRET = "LDOWsBx5xTTfEHOHAyB4grk76yLdiIz2"
# REDIRECT_URI = "http://elice-kdt-3rd-team-18.koreacentral.cloudapp.azure.com/api/oauth"

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "postgresql://")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    STATIC_FOLDER = f"{os.getenv('APP_FOLDER')}/project/static"
    MEDIA_FOLDER = f"{os.getenv('APP_FOLDER')}/project/media"
