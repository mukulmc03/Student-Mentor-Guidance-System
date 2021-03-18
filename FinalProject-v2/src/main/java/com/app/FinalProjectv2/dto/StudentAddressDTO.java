package com.app.FinalProjectv2.dto;

import com.app.FinalProjectv2.pojo.Address; 
import com.app.FinalProjectv2.pojo.Student;

public class StudentAddressDTO {
	private Student student;
	private Address address;

	public StudentAddressDTO() {
		System.out.println("In StudentAdressDTO's para-less constructor!");
	}

	public StudentAddressDTO(Student student, Address address) {
		this.student = student;
		this.address = address;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}
