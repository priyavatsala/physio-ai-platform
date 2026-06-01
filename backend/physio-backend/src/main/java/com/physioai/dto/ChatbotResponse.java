package com.physioai.dto;

import java.util.List;

public class ChatbotResponse {

    private String message;

    private List<String> recommendations;

    public ChatbotResponse() {
    }

    public ChatbotResponse(String message, List<String> recommendations) {
        this.message = message;
        this.recommendations = recommendations;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<String> getRecommendations() {
        return recommendations;
    }

    public void setRecommendations(List<String> recommendations) {
        this.recommendations = recommendations;
    }
}