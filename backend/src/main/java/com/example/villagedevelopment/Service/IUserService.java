package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.Dto.UserLoginDto;
import com.example.villagedevelopment.modal.Feedback;
import com.example.villagedevelopment.modal.Problem;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.VillageInfo;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IUserService {

    void addUser(Users users);
    void addProblem(Problem problem);

    List<Problem> viewProblem();

    List<VillageInfo> viewVillageInfo();


    List<Users> getUsers();

    UserLoginDto findByEmailAndPassword(String email,String password);


    }

