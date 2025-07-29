package utils

import (
	"math/rand"
	"regexp"
	"time"
)

// ValidateInput checks if the input string is valid based on a regex pattern.
func ValidateInput(input string, pattern string) bool {
	re := regexp.MustCompile(pattern)
	return re.MatchString(input)
}

// GenerateID creates a random string ID of a specified length.
func GenerateID(length int) string {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[rand.Intn(len(charset))]
	}
	return string(b)
}