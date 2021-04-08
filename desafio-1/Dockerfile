#build stage
FROM golang:1.16 AS builder
WORKDIR /go/src
COPY app .
ENV PATH="/go/bin:${PATH}"
RUN GOOS=linux GOARCH=386 go build main.go

LABEL Name=desafio-fullcycle Version=0.0.1
EXPOSE 8000
CMD [ "./main" ]
