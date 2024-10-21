package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.Dto.UserLoginDto;
import com.example.villagedevelopment.modal.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<Users,Integer> {
    UserLoginDto findByEmailAndPassword(String email, String password);
}
