package com.example.villagedevelopment.modal;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Entity
    public class Program {

        @Id
        @GeneratedValue(strategy= GenerationType.IDENTITY)
        private Long Id;

        private String program;

        private String fromDate;
        private String toDate;

        public Program(String program, String fromDate, String toDate) {
            this.program = program;
            this.fromDate = fromDate;
            this.toDate = toDate;

        }

    }
