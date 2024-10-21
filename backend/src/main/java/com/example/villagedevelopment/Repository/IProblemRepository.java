package com.example.villagedevelopment.Repository;


import com.example.villagedevelopment.modal.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProblemRepository extends JpaRepository<Problem,Long> {
}
