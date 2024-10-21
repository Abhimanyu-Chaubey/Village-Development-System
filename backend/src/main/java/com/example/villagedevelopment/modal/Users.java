package com.example.villagedevelopment.modal;

import lombok.*;

import javax.management.relation.Role;
import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Users  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String name;

    public Users(String name, String phoneNumber, String address, String email, String password) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
        this.password = password;
    }

    private String phoneNumber;
    private String address;

    private String email;

    private String password;


}

