package com.physioai.service;

import com.physioai.dto.RegisterDoctorRequest;
import com.physioai.entity.BodyPart;
import com.physioai.entity.Doctor;
import com.physioai.entity.User;
import com.physioai.enums.Role;
import com.physioai.repository.BodyPartRepository;
import com.physioai.repository.DoctorRepository;
import com.physioai.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BodyPartRepository bodyPartRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Doctor registerDoctor(
            RegisterDoctorRequest request
    ) {

        User user = new User();

        user.setName(
                request.getFullName()
        );

        user.setEmail(
                request.getEmail()
        );

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setRole(
                Role.DOCTOR
        );

        userRepository.save(user);

        BodyPart bodyPart =
                bodyPartRepository.findById(
                        request.getBodyPartId()
                ).orElseThrow();

        Doctor doctor = new Doctor();

        doctor.setFullName(
                request.getFullName()
        );

        doctor.setEmail(
                request.getEmail()
        );

        doctor.setQualification(
                request.getQualification()
        );

        doctor.setSpecialization(
                request.getSpecialization()
        );

        doctor.setExperience(
                request.getExperience()
        );

        doctor.setVerified(false);

        doctor.setBodyPart(
                bodyPart
        );

        return doctorRepository.save(
                doctor
        );
    }

    public List<Doctor> getDoctorsByBodyPart(
            Long bodyPartId
    ) {

        List<Doctor> doctors =
                doctorRepository.findByBodyPartId(
                        bodyPartId
                );

        return doctors.stream()
                .filter(Doctor::isVerified)
                .toList();
    }

    public List<Doctor> getPendingDoctors() {

        return doctorRepository.findByVerifiedFalse();
    }

    public Doctor approveDoctor(
            Long doctorId
    ) {

        Doctor doctor =
                doctorRepository.findById(
                        doctorId
                ).orElseThrow();

        doctor.setVerified(true);

        return doctorRepository.save(
                doctor
        );
    }
}