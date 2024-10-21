package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.VillageInfo;
import org.springframework.web.bind.annotation.RequestBody;

public interface IVillageService {

    void addVillage( VillageInfo villageInfo);
}
