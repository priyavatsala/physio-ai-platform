package com.physioai.service;

import com.physioai.entity.Video;
import com.physioai.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public Video saveVideo(Video video) {
        return videoRepository.save(video);
    }

    public List<Video> getVideosByBodyPart(String bodyPart) {
        return videoRepository.findByBodyPart(bodyPart);
    }
}