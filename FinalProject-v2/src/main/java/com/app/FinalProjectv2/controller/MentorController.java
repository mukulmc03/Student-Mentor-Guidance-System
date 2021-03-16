package com.app.FinalProjectv2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FinalProjectv2.service.IMentorService;

@RestController
@RequestMapping("/mentor")
public class MentorController {
	
	@Autowired
	private IMentorService mentorService;
	
	@GetMapping("/assignedStudents/{mentorId}")
	public ResponseEntity<?> getAssignedStudents(@PathVariable int mentorId){
		return ResponseEntity.ok(mentorService.getAssignedStudents(mentorId));
	}
	
	@PostMapping("/updateStudentMarks/{studentId}")
	public ResponseEntity<?> updateStudentMarks(@PathVariable int studentId, @RequestBody float studentMarks){
		return ResponseEntity.ok(mentorService.updateMarksOfStudent(studentId, studentMarks));
	}
}
