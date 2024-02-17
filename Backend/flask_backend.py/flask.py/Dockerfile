FROM python:3.7-slim-buster

WORKDIR /flask

COPY requirement.txt requirement.txt
RUN pip3 install -r requirement.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]

