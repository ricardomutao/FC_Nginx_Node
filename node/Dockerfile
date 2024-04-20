FROM node:15

WORKDIR /usr/src/app

# COPY . .

# RUN npm install

ENV DOCKERIZE_VERSION v0.6.1


RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/* \
    && npm install  

# EXPOSE 3000

# CMD ["node", "index.js" ] 




