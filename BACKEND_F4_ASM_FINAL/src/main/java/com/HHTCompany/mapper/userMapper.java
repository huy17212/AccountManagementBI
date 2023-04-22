package com.HHTCompany.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.HHTCompany.entity.role;
import com.HHTCompany.entity.user;

@Mapper
public interface userMapper {
	
	public List<user> getAllUser();
	public List<user> getByContraint(@Param("userName") String username, @Param("roleIdList") List<String> listContraint);
}
