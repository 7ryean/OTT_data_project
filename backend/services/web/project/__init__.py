import os
import random
import re

from werkzeug.utils import secure_filename
from flask import (
    Flask,
    jsonify,
    send_from_directory,
    request,
    redirect,
    url_for
)
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import psycopg2
import sqlite3
dbpath = '/home/app/web/project/tempdb.db'

app = Flask(__name__)
CORS(app)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    active = db.Column(db.Boolean(), default=True, nullable=False)

    def __init__(self, email):
        self.email = email


survey_questions = [
    [0,'코미디','드라마','멜로/로맨스', '공포'],
    [0,'코미디','멜로/로맨스','액션','공포'],
    [0,'멜로/로맨스','코미디','액션','공포'],
    [0,'공포','코미디','멜로/로맨스','액션'],
    [0,'액션','공포','멜로/로맨스','코미디']
]


platforms = {
    'netflix':'contents_netflix',
    'watcha':'contents_watcha',
    'tving':'contents_tving',
    'disney':'contents_disneyplus',
    '넷플릭스':'contents_netflix',
    '왓챠':'contents_watcha',
    '티빙':'contents_tving',
    '디즈니플러스':'contents_disneyplus'
}


@app.route("/upload", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        file = request.files["file"]
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config["MEDIA_FOLDER"], filename))
    return """
    <!doctype html>
    <title>upload new File</title>
    <form action="" method=post enctype=multipart/form-data>
      <p><input type=file name=file><input type=submit value=Upload>
    </form>
    """


@app.route("/surveyopen", methods=["GET", "POST"])
def surveyopen():
    if request.method == "GET":
        contents = []
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute("select * from contents_netflix order by random() LIMIT 2;")
            netflix = c.fetchall()
            c.execute("select * from contents_watcha order by random() LIMIT 2;")
            watcha = c.fetchall()
            c.execute("select * from contents_disneyplus order by random() LIMIT 2;")
            disney = c.fetchall()
            c.execute("select * from contents_tving order by random() LIMIT 2;")
            tving = c.fetchall()
            c.close()
        for i in range(2):
            contents.append({'ott': 'netflix','title': netflix[i][1], 'poster': netflix[i][7]})
            contents.append({'ott': 'watcha','title': watcha[i][1], 'poster': watcha[i][7]})
            contents.append({'ott': 'disney','title': disney[i][1], 'poster': disney[i][7]})
            contents.append({'ott': 'tving','title': tving[i][1], 'poster': tving[i][7]})      
        data = {'contents': contents }
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/surveyresult", methods=["GET", "POST"])
def surveyresult():
    if request.method == "POST":
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute("select genre, count(*) from user_watch_history_dedup group by genre;")
            genre = c.fetchall()
            c.close()
        genre_dic = {}
        for x in genre:
            genre_dic[x[0]] = x[1]
        survey = request.form["survey"]
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute("select ott, count(*) from user_watch_history group by ott;")
            ott_count = c.fetchall()
            c.close()
        nowott = sorted(ott_count, key=lambda x: x[1])[-1][0]
        answer = re.findall("\d+", survey)
        answer = list(map(int, answer))
        for i in range(5):
            genre_list = survey_questions[i]
            genre = genre_list[answer[i]]
            genre_dic[genre] = genre_dic.get(genre, 0) + 1
        most_genre = sorted(genre_dic.items(), key=lambda x: x[1])
        most_genre = most_genre[0][0]
        ott_table = platforms[nowott]
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute(f"select * from {ott_table} where genre='{most_genre}';")
            most_genre_contents = c.fetchall()
            c.close()
        info = []
        reports = random.sample(most_genre_contents,8)
        for x in reports:
            content_temp = {
                'ott' : nowott,
                'title': x[1],
                'genre': x[2],
                'desc': x[4],
                'poster': x[7]
                }
            info.append(content_temp)
        data = {'mostOTT':nowott, 'contents': info}
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/detail", methods=["GET", "POST"])
def moviedetail():
    if request.method == "POST":
        ott = request.form['ott']
        title = request.form['title']
        ott_table = platforms[ott]
        datelist = ['2021년 7월 28일', '2020년 10월 2일', '2021년 11월 13일', '2021년 4월 30일','2021년 12월 10일']
        try:
            with sqlite3.connect(dbpath,check_same_thread=False) as conn :
                c = conn.cursor()
                c.execute(f"select * from {ott_table} where title='{title}';")
                movieinfo = c.fetchall()[0]
                c.close()
            desc = movieinfo[4]
            playdate = random.choice(datelist)
            genre = movieinfo[2]
            cast = movieinfo[6]
            keyword = movieinfo[3]
            time = movieinfo[8]
            poster = movieinfo[7]
        except:
            desc = '1991년 소말리아의 수도 모가디슈에서는 내전으로 총성이 끊이지 않는다. 대한민국의 UN 가입을 위해 그곳에 파견된 대사관 직원들은 살아남기 위해 하루하루를 버텨내고, 설상가상 북한 대사관 일행들이 도움을 요청하며 문을 두드리는데… 1분 정보: 소말리아의 모가디슈는 대한민국 국민의 출입이 금지된 지역이라 실제 촬영은 모로코의 에사우이라에서 진행했다. 코로나19 상황에서 2020년 성수기의 흥행작이었던 <다만 악에서 구하소서> 이후 대략 1년 만에 300만을 돌파한 영화!'
            playdate = '2021년 7월 28일'
            genre = '드라마'
            cast = '김윤석 조인성 허준호 구교환 김소진 정만식 김재화  등'
            keyword = '#한국 #15세이상관람가 #드라마 #액션'
            time = '121분'
        info = {
            'ott' : ott,
            'title' : title,
            'desc' : desc,
            'playdate' : playdate,
            'genre' : genre,
            'cast' : cast,
            'keyword' : keyword,
            'time' : time,
            'poster' : poster
        }
        data = {'movieinfo':info }
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/main", methods=["GET", "POST"])
def mainpage():
    if request.method == "GET":
        info = []
        netflix = {
            'title':'스파이더맨',
            'poster':'spider.jpg',
            'summary':'sdsd',
            'trailer':'dddd.mp4',
            'openingDate':''
        }
        data = {'movieinfo':'info'}
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/subscribe", methods=["GET", "POST"])
def subscribe():
    if request.method == "POST":
        survey = request.form["ott"]
        data = {'mostOTT':'netflix', 'mostContent':'ironman', 'survey':survey}
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@app.route("/mypage", methods=["GET", "POST"])
def mypage():
    if request.method == "POST":
        ott = request.form["ott"]
        date = request.form['date']

        data = {'nextOTT' : ott }
        api_res = jsonify(data)
        api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res
