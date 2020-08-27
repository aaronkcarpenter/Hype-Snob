from flask import Blueprint, render_template, redirect
from ..models import User
from app.models import db, User

# u = User(email='demo@gmail.com', name='1234567890')

# u.set_password('P@ssw0rd')
# db.session.add(u)
# db.session.commit()

bp = Blueprint('routes', __name__, '')

@bp.route('/')
def main_page():
  return 'hello my guy'

@bp.route('/styles')
def styles_page():
  return 'Styles Page Goes Here'

@bp.route('/shop')
def shop_page():
  return 'Shop Page Goes Here'

@bp.route('/login')
def login_page():
  return 'Login Page Goes Here'

# @bp.route('/signup', method=['POST'])
# def get_signup():
#     if form.validate_on_submit():
#       data = User()
#       form.populate_obj(data)
#       db.session.add(data)
#       db.session.commit()
#       return redirect('/login')
#     return 'Bad Data'

@bp.route('/api/signup_data')
def get_signup_data():
  results = Users.query.filter(Users.name)