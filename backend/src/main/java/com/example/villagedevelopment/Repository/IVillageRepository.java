package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.VillageInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVillageRepository extends JpaRepository<VillageInfo,Long> {
}
