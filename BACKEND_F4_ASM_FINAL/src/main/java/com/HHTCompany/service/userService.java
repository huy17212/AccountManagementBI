package com.HHTCompany.service;

import java.util.List;

import com.HHTCompany.entity.role;
import com.HHTCompany.entity.user;

public interface userService {
	
	public List<user> getAllUser();
	public List<user> getByContraint(String userName, List<String> roleIdList);
	

}
