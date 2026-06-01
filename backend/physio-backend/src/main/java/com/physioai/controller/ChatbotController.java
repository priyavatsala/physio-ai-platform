package com.physioai.controller;

import com.physioai.chatbot.ChatbotService;
import com.physioai.dto.ChatbotRequest;
import com.physioai.dto.ChatbotResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chatbot")
@CrossOrigin("*")
public class ChatbotController {

    @Autowired
    private ChatbotService chatbotService;

    @PostMapping
    public ChatbotResponse chat(@RequestBody ChatbotRequest request) {
        return chatbotService.processMessage(request.getMessage());
    }
}