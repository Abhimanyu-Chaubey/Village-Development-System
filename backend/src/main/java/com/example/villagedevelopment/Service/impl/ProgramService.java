package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Repository.IProgramRepository;
import com.example.villagedevelopment.Service.IProgramService;
import com.example.villagedevelopment.modal.Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProgramService implements IProgramService {

    @Autowired
    private IProgramRepository programRepository;
    @Override
    public void addProgram(Program program) {
        programRepository.save(program);
    }
}
