package com.physioai.service;

import com.physioai.entity.Doctor;
import com.physioai.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor registerDoctor(Doctor doctor) {

        doctor.setVerified(false);

        return doctorRepository.save(doctor);
    }

    public List<Doctor> getDoctorsByBodyPart(Long bodyPartId) {
        return doctorRepository.findByBodyPartId(bodyPartId);
    }
}