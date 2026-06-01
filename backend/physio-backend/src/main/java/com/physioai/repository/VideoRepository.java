package com.physioai.repository;

import com.physioai.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video, Long> {

    List<Video> findByBodyPart(String bodyPart);

    List<Video> findByStatus(String status);

    List<Video> findByBodyPartAndStatus(
            String bodyPart,
            String status
    );
}