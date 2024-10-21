package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFeedbackRepository extends JpaRepository<Feedback,Long> {
}
