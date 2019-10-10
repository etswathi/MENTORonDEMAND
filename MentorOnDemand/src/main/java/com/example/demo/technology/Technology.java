package com.example.demo.technology;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.demo.AuditModel;
import com.example.demo.training.Training;

@Entity
@Table(name = "technology")
public class Technology extends AuditModel{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "tech_name",nullable = false)
	private String techName;
	@Column(name = "description",nullable = false)
	private String description;
	
	
	
	
	public Integer getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTechName() {
		return techName;
	}
	public void setTechName(String techName) {
		this.techName = techName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Technology(int id, String techName, String description) {
		super();
		this.id = id;
		this.techName = techName;
		this.description = description;
		
	}
	public Technology() {
		super();
		// TODO Auto-generated constructor stub
	}
}