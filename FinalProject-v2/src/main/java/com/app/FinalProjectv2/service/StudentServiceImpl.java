package com.app.FinalProjectv2.service;

import java.util.List; 

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FinalProjectv2.dto.StudentAddressDTO;
import com.app.FinalProjectv2.exceptions.ResourceNotFoundException;
import com.app.FinalProjectv2.pojo.Address;
import com.app.FinalProjectv2.pojo.Mentor;
import com.app.FinalProjectv2.pojo.Student;
import com.app.FinalProjectv2.respository.AddressRepository;
import com.app.FinalProjectv2.respository.MentorRepository;
import com.app.FinalProjectv2.respository.StudentRepository;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private MentorRepository mentorRepository;

	@Autowired
	private AddressRepository addressRepository;
	
	//register new student
	@Override
	public String registerStudent(StudentAddressDTO studentAddressDto) {
		System.out.println(studentAddressDto.getStudent() + ", " + studentAddressDto.getAddress());
		
		//get student object from studentAddressDto
		Student newStudent = studentAddressDto.getStudent();
		
		//get address object from studentAddressDto
		Address newAddress = studentAddressDto.getAddress();
		
		//store newAddress in DB
		addressRepository.save(newAddress);
		
		//assign newAddress to newStudent
		newStudent.setStudentAddress(newAddress);
		
		//store newStudent in DB
		studentRepository.save(newStudent);
		
		return "Student registered with Student Id: " + newStudent.getStudentId() + " and Address Id: " + newStudent.getStudentAddress().getAddressId() + " !";
	}

	//get student using studentId
	@Override
	public Student getStudentById(int studentId) {
		return studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student ID!"));
	}

	//get list of all students
	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}

	//delete student using studentId
	@Override
	public String deleteStudentById(int studentId) {
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student Id not present!"));
		String msg = "Student with ID: " + student.getStudentId() + " deleted!";
		studentRepository.delete(student);
		return msg;
	}

	//update student
	@Override
	public String updateStudent(int studentId, Student newStudent) {
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student Id : " + studentId + " does not exists!"));
		student.setStudentFirstName(newStudent.getStudentFirstName());
		student.setStudentLastName(newStudent.getStudentLastName());
		student.setStudentEmail(newStudent.getStudentEmail());
		student.setStudentPassword(newStudent.getStudentPassword());
		student.setStudentDob(newStudent.getStudentDob());
		student.setStudetMobileNo(newStudent.getStudetMobileNo());
		student.setStudentGender(newStudent.getStudentGender());
		student.setStudentMarks(newStudent.getStudentMarks());
		studentRepository.save(student);
		return "Student updated!";
	}

	// assign mentor to student and get list of mentors in return
	@Override
	public Mentor assignMentorToStudent(int studentId) {
		Mentor assignedMentor = null;

		// get student of given studentId and if student is not available throw
		// exception
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student not registered!"));

		System.out.println(student);

		// get courseId of above student
		int studentCourseId = student.getAssignedStudentCourse().getCourseId();

		System.out.println(studentCourseId);

		// get list of mentors having same courseId
		List<Mentor> mentorList = mentorRepository.findMentors(studentCourseId);

		// check if list is empty(no mentor available for given courseId)
		if (mentorList.isEmpty())
			throw new ResourceNotFoundException("Mentor not available for given course ID!");

		// iterating to assign mentor to student
		for (Mentor mentor : mentorList) {

			// checking if mentor current size is less than total size given by mentor
			if (mentor.getCurrentBatchSize() < mentor.getBatchSize() + 1)

				// assign mentor to student
				student.setAssignedMentor(mentor);

			// save student in DB
			studentRepository.save(student);

			// update current batch size of mentor
			mentor.setCurrentBatchSize(mentor.getCurrentBatchSize() + 1);

			// save mentor in DB
			mentorRepository.save(mentor);

			assignedMentor = mentor;

			// mentor assigned : break out of the loop
			break;
		}
		return assignedMentor;
	}

	public List<?> getStudentByAddress(int studentId) {
		return studentRepository.getStudentByAddress(studentId);
	}
}
