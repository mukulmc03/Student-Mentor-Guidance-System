package com.app.FinalProjectv2.respository;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.app.FinalProjectv2.pojo.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	
	//for getting students assigned to particular students
	@Query("select s from Student s join Mentor m on s.assignedMentor = m.mentorId where m.mentorId =:mentorId")
	public List<Student> getAssignedStudents(@Param("mentorId") int mentorId);
	
	//to find student by email & password (to authenticate student)
	@Query("select s from Student s where s.studentEmail =:email and s.studentPassword =:password")
	public Student findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

	//to get student with assignedMentor (for admin)
	@Query("select s, m.mentorFirstName, m.mentorLastName, m.mentorEmail from Student s join Mentor m"
			+ " on s.assignedMentor = m.mentorId")
	public List<?> findStudentAndMentor();
}
