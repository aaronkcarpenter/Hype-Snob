from .middlewares import login_required
from flask import Flask, json, g, request
from app.kudo.service import Service as Kudo
from app.kudo.schema import GithubRepoSchema
from flask_cors import CORS