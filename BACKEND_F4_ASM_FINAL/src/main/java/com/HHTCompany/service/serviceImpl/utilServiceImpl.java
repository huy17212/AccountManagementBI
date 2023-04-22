package com.HHTCompany.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HHTCompany.mapper.utilMapper;
import com.HHTCompany.service.utilService;

@Service
public class utilServiceImpl implements utilService {
	
	@Autowired
	utilMapper utilMapper;
	
	@Override
	public List<Object> getMonthEmployee() {
		// TODO Auto-generated method stub
		return utilMapper.getMonthEmployee();
	}

}
