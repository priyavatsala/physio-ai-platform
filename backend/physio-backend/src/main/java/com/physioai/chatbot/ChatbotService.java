package com.physioai.chatbot;

import com.physioai.dto.ChatbotResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatbotService {

    public ChatbotResponse processMessage(String message) {

        String lowerMessage = message.toLowerCase();

        List<String> recommendations = new ArrayList<>();

        if (lowerMessage.contains("knee")) {

            recommendations.add("Knee Pain Relief Exercise");
            recommendations.add("Consult Knee Rehabilitation Specialist");

            return new ChatbotResponse(
                    "Possible knee-related issue detected.",
                    recommendations
            );
        }

        if (lowerMessage.contains("neck")) {

            recommendations.add("Neck Stretching Exercise");
            recommendations.add("Consult Neck Specialist");

            return new ChatbotResponse(
                    "Possible neck-related issue detected.",
                    recommendations
            );
        }

        recommendations.add("Please provide more symptoms.");

        return new ChatbotResponse(
                "Unable to identify body part.",
                recommendations
        );
    }
}