package com.HHTCompany.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.HHTCompany.entity.role;
@Mapper
public interface roleMapper {
	public List<role> getAllRole();
	public List<Object> getCountByRoleId();
	public int deleteRole(@Param("RoleId") int id);
	public int postNewRole(role role);
	public int updateRole(role role);
}
