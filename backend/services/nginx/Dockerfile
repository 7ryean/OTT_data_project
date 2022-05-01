FROM nginx:1.19-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# root 에 app 폴더를 생성
#RUN mkdir -p /home/app/web

# work dir 고정
# WORKDIR /home/app/web

# work dir 에 build 폴더 생성 /app/build
# RUN mkdir build

# host pc의 build 폴더를 workdir 의 build 폴더로 복사, build 폴더 옮기기
ADD build /build
