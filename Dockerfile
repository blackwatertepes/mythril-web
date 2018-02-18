FROM blackwatertepes/mythril

COPY . .

RUN apt-get install -y curl sudo \
  && curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash - \
  && apt-get install -y nodejs \
  && apt-get install -y vim \
  && npm install

EXPOSE 3000

CMD ["npm","start"]
