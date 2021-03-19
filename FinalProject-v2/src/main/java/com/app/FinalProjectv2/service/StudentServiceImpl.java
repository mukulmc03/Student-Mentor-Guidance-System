package com.app.FinalProjectv2.service;

import java.util.List;  

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FinalProjectv2.dto.StudentAddressDTO;
import com.app.FinalProjectv2.exceptions.ResourceNotFoundException;
import com.app.FinalProjectv2.pojo.Address;
import com.app.FinalProjectv2.pojo.Course;
import com.app.FinalProjectv2.pojo.Mentor;
import com.app.FinalProjectv2.pojo.Student;
import com.app.FinalProjectv2.respository.AddressRepository;
import com.app.FinalProjectv2.respository.CourseRepository;
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

	@Autowired
	private CourseRepository courseRepository;


	//register new student
	@Override
	public String registerStudent(int courseId, StudentAddressDTO studentAddressDto) {
		System.out.println(studentAddressDto.getStudent() + ", " + studentAddressDto.getAddress());

		//get course by Id
		Course course = courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("No such course Avaialable!"));

		//get student object from studentAddressDto
		Student newStudent = studentAddressDto.getStudent();

		//get address object from studentAddressDto 
		Address newAddress = studentAddressDto.getAddress();

		//store newAddress in DB
		addressRepository.save(newAddress);

		//assign newAddress to newStudent
		newStudent.setStudentAddress(newAddress);

		//assign course to student
		newStudent.setAssignedStudentCourse(course);

		//store newStudent in DB
		studentRepository.save(newStudent);

		return "Student registered with Student Id: " + newStudent.getStudentId() + " and Address Id: " + newStudent.getStudentAddress().getAddressId() + " and Course Id: " + newStudent.getAssignedStudentCourse().getCourseId() + "!";
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

		//get student to be deleted
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student Id not present!"));

		//get mentor assigned to student (to decrement currentBatch size)
		Mentor mentor = student.getAssignedMentor();
		
		//check if mentor was assigned to the student or not
		if(mentor == null)
			
			//delete student from DB
			studentRepository.delete(student);
		else {
			//if mentor is assigned to the student : decrement currentBatch size of assigned mentor
			mentor.setCurrentBatchSize(mentor.getCurrentBatchSize() - 1);
			
			//delete student from DB
			studentRepository.delete(student);
		}
		return "Student with Id: " + studentId + " deleted!";
	}

	
	//update student
	@Override
	public String updateStudent(int studentId, StudentAddressDTO studentAddressDto) {

		//get student to be updated
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student Id : " + studentId + " does not exists!"));

		//get student from studentAddressDto
		Student newStudent = studentAddressDto.getStudent();

		//get address from studentAddressDto
		Address newAddress = studentAddressDto.getAddress();

		//assign newAddress to newStudent
		newStudent.setStudentAddress(newAddress);

		//assign other fields
		student.setStudentFirstName(newStudent.getStudentFirstName());
		student.setStudentLastName(newStudent.getStudentLastName());
		student.setStudentEmail(newStudent.getStudentEmail());
		student.setStudentPassword(newStudent.getStudentPassword());
		student.setStudentDob(newStudent.getStudentDob());
		student.setStudetMobileNo(newStudent.getStudetMobileNo());
		student.setStudentGender(newStudent.getStudentGender());
		student.setStudentMarks(newStudent.getStudentMarks());
		student.setStudentAddress(newStudent.getStudentAddress());

		//save student in DB
		studentRepository.save(student);
		return "Student at Id: " + studentId + " updated!";
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
			if(mentor.getCurrentBatchSize() < mentor.getBatchSize()) {

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

			//if mentor current size is more than total size given by mentor 
			else {

				//making that mentor null
				mentor = null;

				//continue the loop to check further mentors in mentorsList
				continue;
			} 
		}

		//if no mentor found throw exception
		if(assignedMentor == null)
			throw new ResourceNotFoundException("No Mentor available for Selected Course!");
		else
			return assignedMentor;
	}
}
