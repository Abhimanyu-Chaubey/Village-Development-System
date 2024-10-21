package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Repository.IUserRepository;
import com.example.villagedevelopment.Repository.IVolunteerRepository;
import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Volunteers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
   private IVolunteersService volunteersService;

    @Autowired
    private IVolunteerRepository adminRepository;

    @Autowired
    private IVolunteerRepository volunteersRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IUserService userService;

//  private ResponseEntity<?>

    @PostMapping("/adminlogin")
    private ResponseEntity<?> adminLogin(@RequestBody HashMap<String,String> admin) {

        HashMap<String, String> res = new HashMap<>();
        try {
            String email = admin.get("email");
            String password = admin.get("password");


             if (email.equals("admin@gmail.com") && password.equals("password")) {
                res.put("message", "admin");
                return new ResponseEntity<>(res, HttpStatus.OK);
            }


            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.put("message", "invalid details");
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/addvolunteer")
    private ResponseEntity<?> addVolunteers(@RequestBody Volunteers volunteers)
    {

            volunteersService.addVolunteers(volunteers);
            return  ResponseEntity.ok("added successfully");
        }

    @GetMapping("/viewvolunteer")
    private ResponseEntity<?>  viewVolunteers()
    {
  return  new ResponseEntity(volunteersService.getVolunteers(),HttpStatus.OK);
        }

   @GetMapping("/viewuser")
    private ResponseEntity<?> viewUser()
   {
      return new ResponseEntity<>( userService.getUsers(),HttpStatus.OK);
   }
}











