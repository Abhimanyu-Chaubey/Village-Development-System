package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Dto.VolunteerLoginDto;
import com.example.villagedevelopment.Repository.*;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteersService implements IVolunteersService {

    @Autowired
    private IVolunteerRepository volunteerRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IProgramRepository programRepository;

    @Autowired
    private IVillageRepository villageRepository;

    @Autowired
    private IProblemRepository problemRepository;

    @Override
    public void addUser(Users users) {
        userRepository.save(users);
    }

    @Override
    public void addProgram(Program program) {
        programRepository.save(program);
    }

    @Override
    public List<Program> getProgram() {
       return programRepository.findAll();
    }

    @Override
    public void addProblem(Problem problem) {
          problemRepository.save(problem);
    }

    @Override
    public void addVillage(VillageInfo villageInfo) {
        villageRepository.save(villageInfo);
    }

    @Override
    public void addVolunteers(Volunteers volunteers) {
        volunteerRepository.save(volunteers);
    }

    @Override
    public List<Volunteers> getVolunteers() {
       return volunteerRepository.findAll();
    }

    @Override
  public VolunteerLoginDto findByEmailAndPassword(String email, String password) {
       return volunteerRepository.findByEmailAndPassword(email, password);
    }

}
