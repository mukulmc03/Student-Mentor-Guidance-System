package com.app.FinalProjectv2.service;

import com.app.FinalProjectv2.pojo.User;

public interface IUserService {
	
	//to get admin by email and password
	public Object authenticateUser(User user);
}
