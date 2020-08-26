FROM nginx:1.19.0
COPY src /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
RUN apt-get update -y 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]