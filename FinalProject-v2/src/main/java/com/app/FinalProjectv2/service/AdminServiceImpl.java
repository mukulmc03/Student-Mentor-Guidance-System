package com.app.FinalProjectv2.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FinalProjectv2.exceptions.ResourceNotFoundException;
import com.app.FinalProjectv2.pojo.Admin;
import com.app.FinalProjectv2.respository.AdminRepository;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public Admin addAdmin(Admin newAdmin) {
		return adminRepository.save(newAdmin);
	}

	@Override
	public Admin getAdminById(int id) {
		return adminRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Admin ID!") );
	}
}
