package com.HHTCompany.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class role {
	private long ROLEID;
	private String TENROLE;
	private Boolean ISUSE;
	private String DES;
}
