package com.example.villagedevelopment.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Feedback {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long feedbackId;

    private String feedbackName;
    private String description;

    public Feedback(String feedbackName, String description) {
        this.feedbackName = feedbackName;
        this.description = description;

    }

}
