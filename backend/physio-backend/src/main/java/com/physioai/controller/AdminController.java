package com.physioai.controller;

import com.physioai.entity.Doctor;
import com.physioai.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping("/pending-doctors")
    public List<Doctor> getPendingDoctors() {

        return doctorRepository.findByVerifiedFalse();
    }

    @PutMapping("/approve-doctor/{id}")
    public Doctor approveDoctor(
            @PathVariable Long id
    ) {

        Doctor doctor =
                doctorRepository.findById(id)
                        .orElseThrow();

        doctor.setVerified(true);

        return doctorRepository.save(
                doctor
        );
    }
}