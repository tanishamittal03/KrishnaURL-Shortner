package routes

import (
    "github.com/gin-gonic/gin"
    "go-backend-app/internal/handlers"
)

func SetupRoutes(router *gin.Engine, handler *handlers.Handler) {
    router.GET("/items", handler.GetItems)
    router.POST("/items", handler.CreateItem)
}