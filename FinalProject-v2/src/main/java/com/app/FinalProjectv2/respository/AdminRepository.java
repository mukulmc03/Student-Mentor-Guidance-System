package com.app.FinalProjectv2.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.FinalProjectv2.pojo.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{

}
