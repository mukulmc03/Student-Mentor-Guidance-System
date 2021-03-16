package com.app.FinalProjectv2.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FinalProjectv2.exceptions.ResourceNotFoundException;
import com.app.FinalProjectv2.pojo.Course;
import com.app.FinalProjectv2.respository.CourseRepository;

@Service
@Transactional
public class CourseServiceImpl implements ICourseService {

	@Autowired
	CourseRepository courseRepository;
	
	@Override
	public Course addNewCourse(Course newCourse) {
		return courseRepository.save(newCourse);
	}

	@Override
	public Course getCourseById(int courseId) {
		return courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Course ID!"));
	}

	@Override
	public List<Course> getAllCourses() {
		return courseRepository.findAll();
	}

	@Override
	public String deleteById(int courseId) {
		Course course = courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Course Id...!!!"));
		String msg = "Course with ID: " + course.getCourseId() + " deleted!";
		courseRepository.deleteById(courseId);
		return msg;
	}

	@Override
	public Course updateCourse(int courseId, Course updatedCourse) {
		Course existingCourse =courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Course Id...!!!"));
		existingCourse.setCourseName(updatedCourse.getCourseName());
		existingCourse.setStartDate(updatedCourse.getStartDate());
		existingCourse.setEndDate(updatedCourse.getEndDate());
		return courseRepository.save(existingCourse);
	}

}
