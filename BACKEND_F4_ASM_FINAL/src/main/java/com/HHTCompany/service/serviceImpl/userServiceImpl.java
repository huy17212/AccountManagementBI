package com.HHTCompany.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HHTCompany.entity.role;
import com.HHTCompany.entity.user;
import com.HHTCompany.mapper.userMapper;
import com.HHTCompany.service.userService;

@Service
public class userServiceImpl implements userService {

	@Autowired
	userMapper userMapper;
	
	@Override
	public List<user> getAllUser() {
		return userMapper.getAllUser();
	}

	@Override
	public List<user> getByContraint(String username, List<String> listContraint) {
		return userMapper.getByContraint(username, listContraint);
	}

}
