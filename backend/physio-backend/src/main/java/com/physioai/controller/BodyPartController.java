package com.physioai.controller;

import com.physioai.entity.BodyPart;
import com.physioai.service.BodyPartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/body-parts")
@CrossOrigin("*")
public class BodyPartController {

    @Autowired
    private BodyPartService bodyPartService;

    @PostMapping
    public BodyPart addBodyPart(@RequestBody BodyPart bodyPart) {
        return bodyPartService.saveBodyPart(bodyPart);
    }

    @GetMapping
    public List<BodyPart> getAllBodyParts() {
        return bodyPartService.getAllBodyParts();
    }
}