package com.physioai.repository;

import com.physioai.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    List<Doctor> findByBodyPartId(Long bodyPartId);

    List<Doctor> findByVerifiedFalse();

    List<Doctor> findByVerifiedTrue();

    Optional<Doctor> findByEmail(String email);
}