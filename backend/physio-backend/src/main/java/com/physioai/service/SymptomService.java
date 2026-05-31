package com.physioai.service;

import com.physioai.entity.Symptom;
import com.physioai.repository.SymptomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SymptomService {

    @Autowired
    private SymptomRepository symptomRepository;

    public Symptom saveSymptom(Symptom symptom) {
        return symptomRepository.save(symptom);
    }

    public List<Symptom> getSymptomsByBodyPart(Long bodyPartId) {
        return symptomRepository.findByBodyPartId(bodyPartId);
    }
}