package com.example.demo.calender;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "calender")
public class Calender {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int calenderId;
	@Column
	private String listofMentor;
	public int getCalenderId() {
		return calenderId;
	}
	public void setCalenderId(int calenderId) {
		this.calenderId = calenderId;
	}
	public String getListofMentor() {
		return listofMentor;
	}
	public void setListofMentor(String listofMentor) {
		this.listofMentor = listofMentor;
	}
	public Calender(int calenderId, String listofMentor) {
		super();
		this.calenderId = calenderId;
		this.listofMentor = listofMentor;
	}
	public Calender() {
		super();
		// TODO Auto-generated constructor stub
	}
}