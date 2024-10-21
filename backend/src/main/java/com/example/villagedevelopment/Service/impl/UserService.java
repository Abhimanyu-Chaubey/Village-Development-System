package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Dto.UserLoginDto;
import com.example.villagedevelopment.Repository.IProblemRepository;
import com.example.villagedevelopment.Repository.IUserRepository;
import com.example.villagedevelopment.Repository.IVillageRepository;
import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.modal.Feedback;
import com.example.villagedevelopment.modal.Problem;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.VillageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IProblemRepository problemRepository;

    @Autowired
    private IVillageRepository villageRepository;




    @Override
    public void addUser(Users users) {
        userRepository.save(users);
    }

    @Override
    public void addProblem(Problem problem) {
        problemRepository.save(problem);
    }

    @Override
    public List<Problem> viewProblem() {
        return problemRepository.findAll();
    }

    @Override
    public List<VillageInfo> viewVillageInfo() {
        return villageRepository.findAll();
    }

    @Override
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserLoginDto findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email,password);
    }


}
