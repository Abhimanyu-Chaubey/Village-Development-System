package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.Feedback;

import java.util.List;


public interface IFeedbackService {

    void sendFeedback(Feedback feedback );

    List<Feedback> getFeedback();
}
