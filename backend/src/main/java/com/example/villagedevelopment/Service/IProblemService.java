package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.Problem;

import java.util.List;

public interface IProblemService {

    void addproblem(Problem problem);

    List<Problem> getProblems();
}
