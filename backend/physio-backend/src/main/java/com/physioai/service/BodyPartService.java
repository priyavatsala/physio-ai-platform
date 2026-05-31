package com.physioai.service;

import com.physioai.entity.BodyPart;
import com.physioai.repository.BodyPartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BodyPartService {

    @Autowired
    private BodyPartRepository bodyPartRepository;

    public BodyPart saveBodyPart(BodyPart bodyPart) {
        return bodyPartRepository.save(bodyPart);
    }

    public List<BodyPart> getAllBodyParts() {
        return bodyPartRepository.findAll();
    }
}