package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.Dto.VolunteerLoginDto;
import com.example.villagedevelopment.modal.*;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


public interface IVolunteersService {


    void  addUser(Users users);

    void addProgram(Program schema);

    List<Program> getProgram();

    void addProblem(Problem problem);

    void addVillage(VillageInfo villageInfo);

    void addVolunteers(Volunteers volunteers);

    List<Volunteers> getVolunteers();

   VolunteerLoginDto findByEmailAndPassword(String email, String password);
}
