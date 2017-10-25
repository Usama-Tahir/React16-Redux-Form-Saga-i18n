FROM nginx

RUN mkdir /wwwroot
COPY webpack.nginx.conf /etc/nginx/nginx.conf
RUN service nginx start