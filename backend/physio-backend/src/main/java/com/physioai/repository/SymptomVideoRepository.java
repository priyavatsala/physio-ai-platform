package com.physioai.repository;

import com.physioai.entity.SymptomVideo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SymptomVideoRepository extends JpaRepository<SymptomVideo, Long> {

    List<SymptomVideo> findBySymptomId(Long symptomId);

}