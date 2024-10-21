package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Repository.IVillageRepository;
import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.modal.VillageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VillageService implements IVillageService {

    @Autowired
    private IVillageRepository villageRepository;

    @Override
    public void addVillage(VillageInfo villageInfo) {
        villageRepository.save(villageInfo);
    }
}
