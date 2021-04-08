package main

import (
	"html/template"
	"log"
	"net/http"
)

type Task struct {
	Name string
	Done bool
}

func main() {
	http.HandleFunc("/", Hello)
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("public"))))
	err := http.ListenAndServe(":8000", nil)

	if err != nil {
		log.Fatal(err)
	}
}

func Hello(w http.ResponseWriter, r *http.Request) {
	task := Task{
		Name: "Imersão Full Cycle",
		Done: true,
	}

	t := template.Must(template.ParseFiles("./hello.html"))
	t.Execute(w, task)
}
