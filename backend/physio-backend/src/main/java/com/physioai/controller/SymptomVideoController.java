package com.physioai.controller;

import com.physioai.entity.SymptomVideo;
import com.physioai.service.SymptomVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin("*")
public class SymptomVideoController {

    @Autowired
    private SymptomVideoService symptomVideoService;

    @PostMapping
    public SymptomVideo addRecommendation(
            @RequestBody SymptomVideo symptomVideo) {

        return symptomVideoService.saveRecommendation(symptomVideo);
    }

    @GetMapping("/symptom/{symptomId}")
    public List<SymptomVideo> getRecommendations(
            @PathVariable Long symptomId) {

        return symptomVideoService.getRecommendations(symptomId);
    }
}