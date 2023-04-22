package com.HHTCompany.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.HHTCompany.entity.role;
import com.HHTCompany.service.roleService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("api/role")
public class roleAPI {
	
	@Autowired
	roleService roleService;
	
	@CrossOrigin
	@GetMapping("/getAllRole")
	ResponseEntity<?> getAllRole(){
		return ResponseEntity.ok(roleService.getAllRole());
	}
	
	@CrossOrigin
	@GetMapping("/getCountByRoleId")
	ResponseEntity<?> getCountByRoleId(){
		return ResponseEntity.ok(roleService.getCountByRoleId());
	}
	
	@CrossOrigin
	@PostMapping("/postNewRole")
	ResponseEntity<?> postNewRole(@RequestBody role role){
		return ResponseEntity.ok(roleService.postNewRole(role));
	}
	
	@CrossOrigin
	@PutMapping("/updateRole")
	ResponseEntity<?> updateRole(@RequestBody role role){
		return ResponseEntity.ok(roleService.updateRole(role));
	}
	
	@CrossOrigin
	@DeleteMapping("/deleteRole")
	ResponseEntity<?> deleteRole(@RequestParam("RoleId") int role){
		return ResponseEntity.ok(roleService.deleteRole(role));
	}
	
}
