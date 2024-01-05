# Frontend dockerfile 

FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

ENV NEXT_PUBLIC_API_URI=http://localhost:5001

EXPOSE 8080

CMD ["npm","run","dev"]

