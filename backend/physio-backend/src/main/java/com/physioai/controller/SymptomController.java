package com.physioai.controller;

import com.physioai.entity.Symptom;
import com.physioai.service.SymptomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/symptoms")
@CrossOrigin("*")
public class SymptomController {

    @Autowired
    private SymptomService symptomService;

    @PostMapping
    public Symptom addSymptom(@RequestBody Symptom symptom) {
        return symptomService.saveSymptom(symptom);
    }

    @GetMapping("/body-part/{bodyPartId}")
    public List<Symptom> getSymptomsByBodyPart(@PathVariable Long bodyPartId) {
        return symptomService.getSymptomsByBodyPart(bodyPartId);
    }
}