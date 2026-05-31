package com.physioai.controller;

import com.physioai.entity.Doctor;
import com.physioai.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/register")
    public Doctor registerDoctor(@RequestBody Doctor doctor) {
        return doctorService.registerDoctor(doctor);
    }
}
