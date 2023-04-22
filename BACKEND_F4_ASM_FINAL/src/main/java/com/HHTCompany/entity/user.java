package com.HHTCompany.entity;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class user {
	
	private int USERID;
	private String USERNAME;
	private int ROLEID;
	private String EMAIL;
	private String NUMBERPHONE;
	private Date BIRTHDAY;

}
