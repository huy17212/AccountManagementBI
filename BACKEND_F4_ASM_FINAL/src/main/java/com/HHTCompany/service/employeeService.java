package com.HHTCompany.service;

import java.util.List;

import com.HHTCompany.entity.employee;

public interface employeeService {
	
	public List<employee> getEmployee();
	
	public employee getEmployeeById(long id);
	
	public int saveEmployee(employee employee);
	
	public int deleteEmployee(long id);
	
	public int updateEmployee(employee employee);
}
