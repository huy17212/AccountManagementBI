package com.HHTCompany.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HHTCompany.entity.employee;
import com.HHTCompany.mapper.employeeMapper;
import com.HHTCompany.service.employeeService;

@Service
public class employeeServiceImpl implements employeeService {
	
	@Autowired 
	employeeMapper employeeMapper;
	
	@Override
	public List<employee> getEmployee() {
		return employeeMapper.getEmployee();
	}

	@Override
	public employee getEmployeeById(long id) {
		return employeeMapper.getEmployeeById(id);
	}

	@Override
	public int saveEmployee(employee employee) {
		return employeeMapper.insertEmployee(employee);
	}
	
	@Override
	public int updateEmployee(employee employee) {
		return employeeMapper.updateEmployee(employee);
	}

	@Override
	public int deleteEmployee(long id) {
		return employeeMapper.deleteEmployee(id);
	}

}
