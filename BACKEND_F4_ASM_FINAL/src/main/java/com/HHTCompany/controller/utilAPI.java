package com.HHTCompany.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HHTCompany.service.utilService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("api/util")
@Slf4j
public class utilAPI {
	
	@Autowired
	utilService utilService;
	
	@GetMapping("/getMonthEmployee")
	@CrossOrigin
	ResponseEntity<?> getMonthEmployee(){
		return ResponseEntity.ok(utilService.getMonthEmployee());
	}
	
	
	
	
}
