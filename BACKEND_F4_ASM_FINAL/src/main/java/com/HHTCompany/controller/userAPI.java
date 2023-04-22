package com.HHTCompany.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.HHTCompany.entity.role;
import com.HHTCompany.entity.user;
import com.HHTCompany.service.userService;
import com.HHTCompany.service.serviceImpl.userExcelExporter;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("api/user")
public class userAPI {

	@Autowired
	userService userService;
	
	@GetMapping("/getAllUser")
	@CrossOrigin
	ResponseEntity<?> getAllUsers(){
		return ResponseEntity.ok(userService.getAllUser());
	}
	
	@CrossOrigin
	@GetMapping("/exportToExcel")
	public void exportToExcel(HttpServletResponse response, @RequestParam("username") String username, @RequestParam("listContraint") List<String> listContraint ){
		response.setContentType("application/octet-stream");
		String headerKey = "Content-Disposition";
		String headerValue = "attachement; filename=Users.xlsx";
		
		response.setHeader(headerKey, headerValue);
		List<user> list =  userService.getByContraint(username, listContraint);
		
		userExcelExporter userExcelExporter = new userExcelExporter(list);
		try {
			userExcelExporter.export(response);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping("/getByContraint")
	@CrossOrigin
	ResponseEntity<?> getByContraint(@RequestParam("username") String username, @RequestParam("listContraint") List<String> listContraint){		
		
//		HashMap<String, Object> result = new HashMap<>();
//		try {
//			userService.getByContraint(username, listContraint);
//			result.put("success", true);
//			result.put("message", true);
//			result.put("data1", username);
//			result.put("data2", listContraint);
//		} catch (Exception e) {
//			log.error("Wrong when call API" + 3);
//			result.put("success", false);
//			result.put("message", false);
//			result.put("date", null);
//		}
		
		return ResponseEntity.ok(userService.getByContraint(username, listContraint));
	}
	
	
	
}
