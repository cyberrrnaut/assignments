package main

import (
    "fmt"
    "net/http"

    "github.com/gorilla/mux"
)

func main() {
    // Create a new Gorilla router
    router := mux.NewRouter()

    // Define a route
    router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!")
    })

    // Define the server configuration
    server := &http.Server{
        Addr:    ":8080", // Listen on port 8080
        Handler: router,
    }

    // Start the server
    fmt.Println("Server is running on http://localhost:8080")
    if err := server.ListenAndServe(); err != nil {
        fmt.Printf("Error starting server: %s\n", err)
    }
}
