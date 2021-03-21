package com.app.FinalProjectv2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FinalProjectv2.dto.MentorAddressDTO;
import com.app.FinalProjectv2.service.IMentorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/mentor")
public class MentorController {

	@Autowired
	private IMentorService mentorService;


	//to get all students assigned to the particular mentor
	@GetMapping("/assignedStudents/{mentorId}")
	public ResponseEntity<?> getAssignedStudents(@PathVariable int mentorId){
		return ResponseEntity.ok(mentorService.getAssignedStudents(mentorId));
	}


	//to update marks of students
	@PostMapping("/updateStudentMarks/{studentId}")
	public ResponseEntity<?> updateStudentMarks(@PathVariable int studentId, @RequestBody float studentMarks){
		return ResponseEntity.ok(mentorService.updateMarksOfStudent(studentId, studentMarks));
	}


	//to update mentor
	@PutMapping("/{mentorId}")
	public ResponseEntity<?> updateMentor(@PathVariable int mentorId, @RequestBody MentorAddressDTO mentorAddressDto){
		return ResponseEntity.ok(mentorService.updateMentor(mentorId, mentorAddressDto));
	}


	//to get mentor by Id
	@GetMapping("/{mentorId}")
	public ResponseEntity<?> getMentorById(@PathVariable int mentorId){
		return ResponseEntity.ok(mentorService.getMentorById(mentorId));
	}


	//to delete mentor by mentorId
	@DeleteMapping("/{mentorId}")   
	public ResponseEntity<?> deleteMentorById(@PathVariable int mentorId){
		return ResponseEntity.ok(mentorService.deleteMentorById(mentorId));
	}


	//register new Mentor and it's address with course
	@PostMapping("/{courseId}") 
	public ResponseEntity<String> registerMentor(@PathVariable int courseId ,@RequestBody MentorAddressDTO mentorAddressDto) {
		return ResponseEntity.ok(mentorService.registerMentor(courseId, mentorAddressDto));
	}
}
