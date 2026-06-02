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

    public List<Video> getVideosByBodyPart(
            String bodyPart
    ) {

        return videoRepository
                .findByBodyPartIgnoreCaseAndStatus(
                        bodyPart,
                        "APPROVED"
                );
    }

    public List<Video> getPendingVideos() {

        return videoRepository.findByStatus(
                "PENDING"
        );
    }

    public Video approveVideo(
            Long videoId
    ) {

        Video video =
                videoRepository.findById(
                        videoId
                ).orElseThrow();

        video.setStatus(
                "APPROVED"
        );

        return videoRepository.save(
                video
        );
    }

    public List<Video> getVideosByDoctor(
            String email
    ) {

        return videoRepository.findByUploadedBy(
                email
        );
    }
}