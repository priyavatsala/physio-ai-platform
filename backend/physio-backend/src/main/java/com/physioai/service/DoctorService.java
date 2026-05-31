package com.physioai.service;

import com.physioai.entity.Doctor;
import com.physioai.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor registerDoctor(Doctor doctor) {

        doctor.setVerified(false);

        return doctorRepository.save(doctor);
    }
}