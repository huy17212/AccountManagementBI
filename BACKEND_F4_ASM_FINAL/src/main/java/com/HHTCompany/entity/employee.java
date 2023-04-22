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
public class employee {
	private long MANV;
	private String TENV;
	private String DIACHI;
	private String GMAIL;
	private String PHONE;
	private String AVATAR;
	private Date BIRTHDAY;
	private Boolean ISUSE;
	private long ROLEID;
}
