package com.app.FinalProjectv2.pojo;

import java.time.LocalDate; 

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String username;

	@Column
	private String password;

	@Column
	private LocalDate dob;

	@Column
	private Gender gender;
	
	public Admin() {
		System.out.println("In Admin's para-less Constructor!");
	}

	public Admin(Integer id, String username, String password, LocalDate dob, Gender gender) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.dob = dob;
		this.gender = gender;
		
		System.out.println("In Admin's parameterized Constructor!");
	}

	public Integer getId() { return id; }

	public void setId(Integer id) { this.id = id; }

	public String getUsername() { return username; }

	public void setUsername(String username) { this.username = username; }

	public String getPassword() { return password; }

	public void setPassword(String password) { this.password = password; }

	public LocalDate getDob() { return dob; }

	public void setDob(LocalDate dob) { this.dob = dob; }

	public Gender getGender() { return gender; }

	public void setGender(Gender gender) { this.gender = gender; }

	@Override
	public String toString() {
		return "Admin [id=" + id + ", username=" + username + ", password=" + password + ", dob=" + dob + ", gender="
				+ gender + "]";
	}
}
