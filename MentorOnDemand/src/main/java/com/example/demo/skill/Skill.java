package com.example.demo.skill;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.example.demo.AuditModel;
import com.example.demo.training.Training;

@Entity
@Table(name = "skill")
public class Skill extends AuditModel{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name",nullable = false)
	private String name;
	@Column(name = "toc",nullable = false)
	private String toc;
	@Column(name = "prerequisites",nullable = false)
	private String prerequisites;
	
	private int trainingId;
	
	
	
	
	public Skill(int trainingId) {
		super();
		this.trainingId = trainingId;
	}
	public int getTrainingId() {
		return trainingId;
	}
	public void setTrainingId(int trainingId) {
		this.trainingId = trainingId;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getToc() {
		return toc;
	}
	public void setToc(String toc) {
		this.toc = toc;
	}
	public String getPrerequisites() {
		return prerequisites;
	}
	public void setPrerequisites(String prerequisites) {
		this.prerequisites = prerequisites;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Skill(int id, String name, String toc, String prerequisites) {
		super();
		this.id = id;
		this.name = name;
		this.toc = toc;
		this.prerequisites = prerequisites;
	}
	public Skill() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
