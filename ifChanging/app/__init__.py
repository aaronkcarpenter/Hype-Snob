from flask import Flask
from .config import Configuration
from .routes import routes
from flask_migrate import Migrate
from .models import db

app = Flask(__name__)
app.config.from_object(Configuration)
app.register_blueprint(routes.bp)
db.init_app(app)
Migrate(app, db)

with app.app_context():
    db.create_all()