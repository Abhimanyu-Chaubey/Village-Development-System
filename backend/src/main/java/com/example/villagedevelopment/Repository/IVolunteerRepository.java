package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.Dto.VolunteerLoginDto;
import com.example.villagedevelopment.modal.Volunteers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVolunteerRepository extends JpaRepository<Volunteers,Long> {
    VolunteerLoginDto findByEmailAndPassword(String email, String password);
}
