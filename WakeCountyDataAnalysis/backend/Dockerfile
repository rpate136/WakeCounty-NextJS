FROM python:3.11

WORKDIR /app/backend

COPY app.py /app/backend/

COPY requirements.txt /app/backend/requirements.txt

RUN pip install -r requirements.txt

ENV PORT=5000

EXPOSE 5000

CMD python3 ./app.py