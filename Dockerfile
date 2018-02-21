FROM blackwatertepes/mythril

COPY . .

RUN apt-get install -y curl sudo \
  && curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash - \
  && apt-get install -y nodejs \
  && apt-get install -y vim \
  && apt-get install -y postgresql postgresql-contrib \
  && npm install \
  && npm install -g nodemon

CMD ["npm","start"]
