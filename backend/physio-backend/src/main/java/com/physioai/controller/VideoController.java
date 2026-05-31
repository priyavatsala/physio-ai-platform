package com.physioai.controller;

import com.physioai.entity.Video;
import com.physioai.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin("*")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @PostMapping("/upload")
    public Video uploadVideo(@RequestBody Video video) {
        return videoService.saveVideo(video);
    }

    @GetMapping("/body-part/{bodyPart}")
    public List<Video> getVideosByBodyPart(@PathVariable String bodyPart) {
        return videoService.getVideosByBodyPart(bodyPart);
    }
}