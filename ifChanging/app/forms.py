from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, EmailField
from wtforms.validators import InputRequired, Email


class SignUpForm(FlaskForm):
  name = StringField('Full Name', validators=[InputRequired('Please enter your full name.')])
  email = EmailField('Email Address', validators=[InputRequired('Please enter a valid email address.'). ('Please enter your email address')])
  password = PasswordField('Password', validators=[DataRequired('Please enter a password'), ('Password must be at least 248 Characters long.')])
  submit = SubmitField('Submit')