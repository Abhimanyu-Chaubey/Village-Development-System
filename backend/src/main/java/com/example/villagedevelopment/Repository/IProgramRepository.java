package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProgramRepository extends JpaRepository<Program,Long> {
}
