package com.app.FinalProjectv2.service;

import java.util.List;

import com.app.FinalProjectv2.dto.StudentAddressDTO;
import com.app.FinalProjectv2.pojo.Address;
import com.app.FinalProjectv2.pojo.Mentor;
import com.app.FinalProjectv2.pojo.Student;

public interface IStudentService {

	// to register new Student 
	public String registerStudent(int courseId, StudentAddressDTO studentAddressDto);

	// to get Student details by Id
	public Student getStudentById(int studentId);

	// to get all Students
	public List<Student>getAllStudents();

	// to delete Student by Student Id
	public String deleteStudentById(int studentId);

	// to update the course in table
	public String updateStudent(int studentId, StudentAddressDTO studentAddressDto);

	//assign mentor to student and get list of assigned mentors in return
	public Mentor assignMentorToStudent(int studentId);

	Address getAddressByStudentId(int studentId);

	Mentor getMentorByStudentId(int studentId);

	Address getAssignedMentorsAddressByStudentId(int studentId);
}