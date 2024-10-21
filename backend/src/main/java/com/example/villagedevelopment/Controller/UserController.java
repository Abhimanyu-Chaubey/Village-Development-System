package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Dto.UserLoginDto;
import com.example.villagedevelopment.Dto.VolunteerLoginDto;
import com.example.villagedevelopment.Repository.IProgramRepository;
import com.example.villagedevelopment.Repository.IVillageRepository;
import com.example.villagedevelopment.Service.IFeedbackService;
import com.example.villagedevelopment.Service.IProblemService;
import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.Service.impl.UserService;
import com.example.villagedevelopment.modal.Feedback;
import com.example.villagedevelopment.modal.Problem;
import com.example.villagedevelopment.modal.Program;
import com.example.villagedevelopment.modal.VillageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private IProgramRepository programRepository;

    @Autowired
    private IUserService userService;

    @Autowired
    private IFeedbackService feedbackService;

    @Autowired
    private IProblemService problemService;

    @Autowired
    private IVillageRepository villageRepository;

    @PostMapping("/userlogin")
    private ResponseEntity<?> volunteerLogin(@RequestBody UserLoginDto u) {
        HashMap<String, String> res = new HashMap<>();
        try {
            if (u.getEmail().equals("") && u.getPassword().equals("")) {
                res.put("msg", "please enter the details");
            }
            if (userService.findByEmailAndPassword(u.getEmail(), u.getPassword()) != null) {
                res.put("msg", "successful");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {

        }
        return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/viewprogram")
    private ResponseEntity<?> viewProgram()
    {

        return new ResponseEntity<>(programRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/addproblem")
    private ResponseEntity<?> addProblem(@RequestBody Problem problem)
    {
       problemService.addproblem(problem);
       return ResponseEntity.ok("added problem successfully");
    }


    @GetMapping("/viewvillageinfo")
    private ResponseEntity<?> viewVillageInfo()
    {

         return new ResponseEntity<>(villageRepository.findAll(),HttpStatus.OK);
    }


    @PostMapping("/sendfeedback")
    private ResponseEntity<?> sendFeedback(@RequestBody Feedback feedback)
    {
        feedbackService.sendFeedback(feedback);
        return ResponseEntity.ok("sent feedback successfully");
    }

}
