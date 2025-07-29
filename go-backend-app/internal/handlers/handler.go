package handlers

import (
    "net/http"
    "encoding/json"
    "github.com/gorilla/mux"
    "go-backend-app/internal/models"
)

type Handler struct {
    // You can add dependencies here, like a database connection
}

func (h *Handler) GetItems(w http.ResponseWriter, r *http.Request) {
    // Logic to retrieve items from the database or in-memory store
    items := []models.Item{
        {ID: 1, Name: "Item 1", Description: "Description for Item 1"},
        {ID: 2, Name: "Item 2", Description: "Description for Item 2"},
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(items)
}

func (h *Handler) CreateItem(w http.ResponseWriter, r *http.Request) {
    var item models.Item
    if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
    // Logic to save the item to the database or in-memory store
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(item)
}

func NewHandler() *Handler {
    return &Handler{}
}

func (h *Handler) RegisterRoutes(r *mux.Router) {
    r.HandleFunc("/items", h.GetItems).Methods("GET")
    r.HandleFunc("/items", h.CreateItem).Methods("POST")
}