package com.app.FinalProjectv2.service;

import java.util.List; 

public interface IMentorService {
	//to get list of students assigned to mentorId
	public List<?> getAssignedStudents(int mentorId);
	
	
	public String updateMarksOfStudent(int studentId, float studentsMarks);
}
