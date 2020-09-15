FROM node:12.18.3-alpine

#docker内でのディレクトリを作成
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
COPY src /app/src/
RUN npm install
RUN npm run build

# node.js公式サイトのdocker化ドキュメント通り
# copy先にcodeディレクトリを指定


# start app
CMD [ "npm", "run", "start" ]