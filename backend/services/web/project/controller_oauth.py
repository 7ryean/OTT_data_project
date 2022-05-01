# 카카오 로그인_컨트롤러

from flask import request, redirect, jsonify, make_response
from flask_restx import Resource

from ..util.dto import UserDto
import requests
from ..service_oauth import social_signin
 
api = UserDto.api

# 버튼 클릭 시 실행됨 
@api.route("/")
class KakaoSignIn(Resource):
    def get(self):
        client_id = "a282918e25d9c4f0e1ff5cc2c1b93d06"
        redirect_uri = "http://seulkok.xyz/login"
        kakao_oauthurl = f"https://kauth.kakao.com/oauth/authorize?client_id={a282918e25d9c4f0e1ff5cc2c1b93d06}&redirect_uri={http://seulkok.xyz/login}&response_type=code"
        return redirect(kakao_oauthurl)


# redirect 후 실행되는 api
@api.route("/callback")
class KakaoSignInCallback(Resource):
    def get(self):
        try:
            code = request.args.get("code")  # request token 추출                                   
            client_id = "a282918e25d9c4f0e1ff5cc2c1b93d06"
            redirect_uri = redirect_uri = "http://seulkok.xyz/login"

            # HTTP 요청을 보내는 모듈인 requests
            token_request = requests.get(                                       
                f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={a282918e25d9c4f0e1ff5cc2c1b93d06}&redirect_uri={http://seulkok.xyz/login}&code={code}"
            )

            token_json = token_request.json()  # get을 통해 받아온 데이터를 jsonify : access token 만들어짐
            
            error = token_json.get("error",None)

            if error is not None :
                return make_response({"message": "INVALID_CODE"}, 400) # 400 error
            access_token = token_json.get("access_token")
 
                 
            # access token을 이용한 유저 정보 get
            profile_request = requests.get(
                    "https://kapi.kakao.com/v2/user/me", headers={"Authorization" : f"Bearer {access_token}"},
                )
            data = profile_request.json()

        except KeyError:
            return make_response({"message" : "INVALID_TOKEN"}, 400)
 
        except access_token.DoesNotExist:
            return make_response({"message" : "INVALID_TOKEN"}, 400)
          
        return social_signin(data=data)
