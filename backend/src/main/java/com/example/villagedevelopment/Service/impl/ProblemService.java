package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Repository.IProblemRepository;
import com.example.villagedevelopment.Service.IProblemService;
import com.example.villagedevelopment.modal.Problem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService implements IProblemService
{

    @Autowired
    private IProblemRepository problemRepository;
    @Override
    public void addproblem(Problem problem) {
        problemRepository.save(problem);
    }

    @Override
    public List<Problem> getProblems() {
       return problemRepository.findAll();
    }
}
