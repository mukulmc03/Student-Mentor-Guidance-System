package com.app.FinalProjectv2.controller;

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

import com.app.FinalProjectv2.pojo.Course;
import com.app.FinalProjectv2.service.ICourseService;

@RestController
@RequestMapping("/courses")
public class CourseController {
	
	@Autowired
	private ICourseService courseService;
	
	@PostMapping
	public ResponseEntity<Course> addCourse(@RequestBody Course newCourse) {
		return ResponseEntity.ok(courseService.addNewCourse(newCourse));
	}
	
	@GetMapping("/{courseId}")
	public ResponseEntity<Course> getCourseById(@PathVariable int courseId){
		return ResponseEntity.ok(courseService.getCourseById(courseId));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllCourses(){
		return ResponseEntity.ok(courseService.getAllCourses());
	}
	
	@RequestMapping(value = "/{courseId}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteCourseById(@PathVariable int courseId){
		return ResponseEntity.ok(courseService.deleteById(courseId));
	}
	
	@PutMapping("/{courseId}")
	public ResponseEntity<?> updateCourse(@PathVariable int courseId, @RequestBody Course updatedCourse){
		return ResponseEntity.ok(courseService.updateCourse(courseId, updatedCourse));
	}
}
