package com.HHTCompany.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface utilMapper {

	public List<Object> getMonthEmployee();

}
