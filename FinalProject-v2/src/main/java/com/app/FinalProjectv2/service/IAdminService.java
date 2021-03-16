package com.app.FinalProjectv2.service;

import com.app.FinalProjectv2.pojo.Admin;

public interface IAdminService {
	public Admin addAdmin(Admin newAdmin);
	public Admin getAdminById(int id);
}
