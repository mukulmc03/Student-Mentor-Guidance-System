package com.app.FinalProjectv2.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.FinalProjectv2.pojo.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
	
}
