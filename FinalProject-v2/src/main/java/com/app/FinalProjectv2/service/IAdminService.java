package com.app.FinalProjectv2.service;

import com.app.FinalProjectv2.pojo.Admin;

public interface IAdminService {
	
	//to add admin
	public Admin addAdmin(Admin newAdmin);
	
	//to get admin by id
	public Admin getAdminById(int id);
}
