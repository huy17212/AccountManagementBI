package com.HHTCompany.controller;

import java.util.HashMap;

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

import com.HHTCompany.entity.employee;
import com.HHTCompany.service.employeeService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("api/employee")
@Slf4j
public class employeeAPI {
	
	@Autowired
	employeeService employeeService;
	
	@CrossOrigin
	@GetMapping("/getEmployee")
	ResponseEntity<?> getAllEmployee(){
		return ResponseEntity.ok(employeeService.getEmployee());
	}
	
	@CrossOrigin
	@GetMapping("/getEmployeeById")
	ResponseEntity<?> getEmployeeById(@RequestParam("id") long id){
		return ResponseEntity.ok(employeeService.getEmployeeById(id));
	}
	
	@CrossOrigin
	@PostMapping("/saveEmployee")
	ResponseEntity<?> saveEmployee(@RequestBody employee employee){
		HashMap<String, Object> result = new HashMap<>();
		try {
			employeeService.saveEmployee(employee);
			result.put("success", true);
			result.put("message", true);
			result.put("data", employee);
		} catch (Exception e) {
			log.error("Wrong when call API" + 3);
			result.put("success", false);
			result.put("message", false);
			result.put("date", null);
		}
		return ResponseEntity.ok(result);
	}
	
	@CrossOrigin
	@PutMapping("/updateEmployee")
	ResponseEntity<?> updateEmployee(@RequestBody employee employee){
		HashMap<String, Object> result = new HashMap<>();
		try {
			employeeService.saveEmployee(employee);
			result.put("success", true);
			result.put("message", true);
			result.put("data", employee);
		} catch (Exception e) {
			log.error("Wrong when call API" + 3);
			result.put("success", false);
			result.put("message", false);
			result.put("date", null);
		}
		return ResponseEntity.ok(employeeService.updateEmployee(employee));
	}
	
	@CrossOrigin
	@DeleteMapping("/deleteEmployee")
	ResponseEntity<?> deleteEmployee(@RequestParam("id") long id){
		HashMap<String, Object> result = new HashMap<>();
		try {
			employeeService.deleteEmployee(id);
			result.put("success", true);
			result.put("message", true);
			result.put("data", result);
		} catch (Exception e) {
			log.error("Wrong when call API" + 3);
			result.put("success", false);
			result.put("message", false);
			result.put("date", null);
		}
		return ResponseEntity.ok(result);
	}
	
}
