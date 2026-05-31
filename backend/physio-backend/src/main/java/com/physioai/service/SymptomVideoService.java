package com.physioai.service;

import com.physioai.entity.SymptomVideo;
import com.physioai.repository.SymptomVideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SymptomVideoService {

    @Autowired
    private SymptomVideoRepository symptomVideoRepository;

    public SymptomVideo saveRecommendation(SymptomVideo symptomVideo) {
        return symptomVideoRepository.save(symptomVideo);
    }

    public List<SymptomVideo> getRecommendations(Long symptomId) {
        return symptomVideoRepository.findBySymptomId(symptomId);
    }
}