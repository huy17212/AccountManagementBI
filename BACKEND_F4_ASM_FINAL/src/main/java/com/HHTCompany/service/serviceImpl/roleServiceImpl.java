package com.HHTCompany.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HHTCompany.entity.role;
import com.HHTCompany.mapper.roleMapper;
import com.HHTCompany.service.roleService;

@Service
public class roleServiceImpl implements roleService {
	
	@Autowired
	roleMapper roleMapper;
	
	@Override
	public List<role> getAllRole() {
		return roleMapper.getAllRole();
	}

	@Override
	public List<Object> getCountByRoleId() {
		// TODO Auto-generated method stub
		return roleMapper.getCountByRoleId();
	}

	@Override
	public int postNewRole(role role) {
		return roleMapper.postNewRole(role);
		
	}

	@Override
	public int deleteRole(int id) {
		return roleMapper.deleteRole(id);
		
	}

	@Override
	public int updateRole(role role) {
		return roleMapper.updateRole(role);		
	}

}
