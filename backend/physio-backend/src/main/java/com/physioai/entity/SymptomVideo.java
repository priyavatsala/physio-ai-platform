package com.physioai.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "symptom_videos")
public class SymptomVideo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "symptom_id")
    private Symptom symptom;

    @ManyToOne
    @JoinColumn(name = "video_id")
    private Video video;

    public SymptomVideo() {
    }

    public Long getId() {
        return id;
    }

    public Symptom getSymptom() {
        return symptom;
    }

    public void setSymptom(Symptom symptom) {
        this.symptom = symptom;
    }

    public Video getVideo() {
        return video;
    }

    public void setVideo(Video video) {
        this.video = video;
    }
}