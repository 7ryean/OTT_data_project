from flask.cli import FlaskGroup
from project import app, db, User


cli = FlaskGroup(app)


@cli.command("create_db")
def create_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@cli.command("seed_db")
def seed_db():
    user = User(email='shk8532@gmail.com')
    db.session.add(user)
    db.session.commit()


if __name__ == "__main__":
    cli()
