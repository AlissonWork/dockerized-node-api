FROM node:24-alpine

WORKDIR /usr/src/app

# 3. Copia APENAS os arquivos de dependência primeiro (Truque de performance de cache)
COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]