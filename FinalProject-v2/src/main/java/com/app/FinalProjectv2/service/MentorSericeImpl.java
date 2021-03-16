package com.app.FinalProjectv2.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FinalProjectv2.exceptions.ResourceNotFoundException;
import com.app.FinalProjectv2.pojo.Mentor;
import com.app.FinalProjectv2.pojo.Student;
import com.app.FinalProjectv2.respository.MentorRepository;
import com.app.FinalProjectv2.respository.StudentRepository;

@Service
@Transactional
public class MentorSericeImpl implements IMentorService {
	
	@Autowired
	private StudentRepository studentRespository;
	
	@Autowired
	private MentorRepository mentorRepository;
	
	@Override
	public List<?> getAssignedStudents(int mentorId) {
		
		//get mentor using mentorId
		Mentor mentor = mentorRepository.findByMentorId(mentorId);
		
		if(mentor == null)
			throw new ResourceNotFoundException("Mentor not Registered!");
		
		//to get students assigned to particular mentorId
		List<Student> studentList = studentRespository.getAssignedStudents(mentorId);
		
		//if studentList is empty throw exception
		if(studentList.isEmpty())
			throw new ResourceNotFoundException("No student assigned!");
		
		//System.out.println(studentList);
		return studentList;
	}

	//to update marks of students
	@Override
	public String updateMarksOfStudent(int studentId, float studentMarks) {
		
		//get student using studentId
		Student student = studentRespository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException("Student not found!"));
		
		if(studentMarks > 100)
			return "Marks should not be greater than 100!";
		
		//set new marks to student
		student.setStudentMarks(studentMarks);
		
		//save student in DB
		studentRespository.save(student);
		
		return "Marks updated successfully";
	}
	
	

}
