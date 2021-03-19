package com.app.FinalProjectv2.controller;

import java.util.List;  

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.FinalProjectv2.dto.StudentAddressDTO;
import com.app.FinalProjectv2.pojo.Student;
import com.app.FinalProjectv2.service.IStudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

	@Autowired
	private IStudentService studentService;

	//register new student and its' address
	@PostMapping("/{courseId}")
	public ResponseEntity<String> registerStudent(@PathVariable int courseId, @RequestBody StudentAddressDTO studentAddressDto) {
		//System.out.println(studentAddressDto.getStudent() + ", " + studentAddressDto.getAddress());
		return ResponseEntity.ok(studentService.registerStudent(courseId, studentAddressDto));
	}

	//get list of registered students
	@GetMapping
	public List<Student> getAllStudents(){
		return studentService.getAllStudents();
	}

	//get student by it's student ID
	@GetMapping("/{studentId}")
	public ResponseEntity<Student> getStudentById(@PathVariable int studentId){
		Student student = studentService.getStudentById(studentId);
		return ResponseEntity.ok(student);
	}

	//update student
	@PutMapping("/{studentId}")
	public ResponseEntity<String> updateStudent(@PathVariable int studentId, @RequestBody StudentAddressDTO studentAddressDto){
		return ResponseEntity.ok(studentService.updateStudent(studentId,studentAddressDto));
	}

	//delete student by it's student ID
	@RequestMapping(value = "/{studentId}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteStudent(@PathVariable int studentId){
		return ResponseEntity.ok(studentService.deleteStudentById(studentId));
	}

	//assign mentor to student
	@GetMapping("/assignMentor/{studentId}")
	public ResponseEntity<?> assignMentorToStudent(@PathVariable int studentId){
		return ResponseEntity.ok(studentService.assignMentorToStudent(studentId));
	}
}