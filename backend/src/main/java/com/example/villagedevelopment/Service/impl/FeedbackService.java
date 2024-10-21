package com.example.villagedevelopment.Service.impl;


import com.example.villagedevelopment.Repository.IFeedbackRepository;
import com.example.villagedevelopment.Service.IFeedbackService;
import com.example.villagedevelopment.modal.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService implements IFeedbackService {

    @Autowired
    private IFeedbackRepository feedbackRepository;

    @Override
    public void sendFeedback(Feedback feedback) {
        feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getFeedback() {
        return feedbackRepository.findAll();
    }
}
