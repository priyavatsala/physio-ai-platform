package com.physioai.repository;

import com.physioai.entity.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SymptomRepository extends JpaRepository<Symptom, Long> {

    List<Symptom> findByBodyPartId(Long bodyPartId);

}