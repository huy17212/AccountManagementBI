package com.HHTCompany.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.HHTCompany.entity.employee;

@Mapper
public interface employeeMapper {
	
	public List<employee> getEmployee();
	
	public employee getEmployeeById(@Param("id") long id);
	
	public int insertEmployee(employee employee);
	
	public int updateEmployee(employee employee);
	
	public int deleteEmployee(@Param("id") long id);
	
}
