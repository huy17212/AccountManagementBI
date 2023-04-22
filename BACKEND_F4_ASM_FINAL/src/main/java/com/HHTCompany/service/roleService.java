package com.HHTCompany.service;

import java.util.List;

import com.HHTCompany.entity.role;

public interface roleService {
	
	public List<role> getAllRole();
	public List<Object> getCountByRoleId();
	public int postNewRole(role role);
	public int deleteRole(int id);
	public int updateRole(role role);
	
}
