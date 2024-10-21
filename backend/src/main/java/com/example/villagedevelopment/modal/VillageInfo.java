package com.example.villagedevelopment.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class VillageInfo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long Id;

    private String villageName;

    private String population;

    private String area;

    private String crops;
    private String districtName;
    private  String stateName;


    public VillageInfo(String villageName, String population, String area, String crops, String districtName, String stateName) {
        this.villageName = villageName;
        this.population = population;
        this.area = area;
        this.crops = crops;
        this.districtName = districtName;
        this.stateName = stateName;
    }


}
