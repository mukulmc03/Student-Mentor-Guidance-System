package com.app.FinalProjectv2.controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FinalProjectv2.pojo.Admin;
import com.app.FinalProjectv2.service.IAdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private IAdminService adminService;
	
	@PostMapping
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin newAdmin){
		return ResponseEntity.ok(adminService.addAdmin(newAdmin));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Admin> getDetailsById(@PathVariable int id){
		return ResponseEntity.ok(adminService.getAdminById(id));
	}
}
