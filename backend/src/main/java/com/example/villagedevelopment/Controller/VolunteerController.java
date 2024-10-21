package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Dto.VolunteerLoginDto;
import com.example.villagedevelopment.Repository.IFeedbackRepository;
import com.example.villagedevelopment.Repository.IProblemRepository;
import com.example.villagedevelopment.Repository.IUserRepository;
import com.example.villagedevelopment.Repository.IVolunteerRepository;
import com.example.villagedevelopment.Service.*;
import com.example.villagedevelopment.Service.impl.ProgramService;
import com.example.villagedevelopment.modal.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VolunteerController {

    @Autowired
    private IVolunteerRepository volunteerRepository;

    @Autowired
    private IVolunteersService volunteersService;

    @Autowired
    private IFeedbackRepository feedbackRepository;

    @Autowired
    private IUserService userService;

    @Autowired
    private IProgramService programService;

    @Autowired
    private IVillageService villageService;

    @Autowired
    private IProblemRepository problemRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IProblemService problemService;

    @Autowired
    private IFeedbackService feedbackService;

    @Autowired
    private IVolunteersService volunteerService;

    @PostMapping("/volunteerlogin")
    private ResponseEntity<?> volunteerLogin(@RequestBody VolunteerLoginDto c) {
        HashMap<String, String> res = new HashMap<>();
        try {
            if (c.getEmail().equals("") && c.getPassword().equals("")) {
                res.put("msg", "please enter the details");
            }
            if (volunteerService.findByEmailAndPassword(c.getEmail(), c.getPassword()) != null) {
                res.put("msg", "successful");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {

        }
      return new ResponseEntity<>(res,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/adduser")
    private ResponseEntity<?> addUser(@RequestBody Users users)
  {
     userService.addUser(users);
     return ResponseEntity.ok("added added successfully");
  }

  @GetMapping("/viewusers")
  private ResponseEntity<?> viewUsers()
{

    return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
}

  @PostMapping("/addprogram")
      private ResponseEntity<?> addProgram(@RequestBody Program program)
      {
         programService.addProgram(program);
         return ResponseEntity.ok("added program successfully");
      }
//      @GetMapping("/viewprogram")
//      private List<Program> viewProgram()
//      {
//          return volunteersService.getProgram();
//      }

      @PostMapping("/addvillage")
    private ResponseEntity<?> addVillage(@RequestBody VillageInfo villageInfo)
      {
          villageService.addVillage(villageInfo);
          return ResponseEntity.ok("added village successfully");
      }

//Security
    @GetMapping("/viewproblem")
    private ResponseEntity<?> viewProblem()
    {
        return new ResponseEntity<>(problemService.getProblems(),HttpStatus.OK);
    }

    @GetMapping("/viewfeedback")
    private ResponseEntity<?> viewFeedback(Feedback feedback)
    {
       return new ResponseEntity<>( feedbackService.getFeedback(),HttpStatus.OK);
    }
  }


