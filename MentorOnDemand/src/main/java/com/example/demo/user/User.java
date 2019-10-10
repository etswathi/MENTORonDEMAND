package com.example.demo.user;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import javax.persistence.JoinColumn;

import com.example.demo.payment.Payment;
import com.example.demo.training.Training;

@Entity
@Table(name = "users")
public class User {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name="user_name")
	
	private String userName;
	@Column(name="password")
	private String password;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	  @Column(nullable=true)
		public Integer trainingId;
	  
	  @OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL)
		@JoinTable(name="user_payment",joinColumns={
			@JoinColumn(name="user_id",nullable=false,updatable=false)},
		inverseJoinColumns={@JoinColumn(name="payment_id",nullable=false,updatable=false)}
		)
	    private List<Payment> payment;
	    
	  
	  
	  
	
	public Integer getTrainingId() {
		return trainingId;
	}
	public void setTrainingId(Integer trainingId) {
		this.trainingId = trainingId;
	}
	@Column(name="contact_number")
	private Long contactNumber;
	@Column(name="email")
	private String email;
	
	@Column(name="reg_code")
	private String regCode="";
	@Column(name="role")
	private String role=null;
	@Column(name="linkedin_url")
	private String linkedin_Url =null;
	@Column(name="years_of_experience")
	private float yearsOfExperience;
	@Column(name="active")
	private Boolean active=false;
	@Column(name="confirmed_signup")
	private Boolean confirmed_SignUp=false;
	@Column(name="reset_password")
	private Boolean resetPassword=false;
	@Column(name="reset_password_date")
	private Date resetPasswordDate;
	
	
	
	
	
	
	
	public List<Payment> getPayment() {
		return payment;
	}
	public void setPayment(List<Payment> payment) {
		this.payment = payment;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getRegCode() {
		return regCode;
	}
	public void setRegCode(String regCode) {
		this.regCode = regCode;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getLinkedin_Url() {
		return linkedin_Url;
	}
	public void setLinkedin_Url(String linkedin_Url) {
		this.linkedin_Url = linkedin_Url;
	}
	public float getYearsOfExperience() {
		return yearsOfExperience;
	}
	public void setYearsOfExperience(float yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public Boolean getConfirmed_SignUp() {
		return confirmed_SignUp;
	}
	public void setConfirmed_SignUp(Boolean confirmed_SignUp) {
		this.confirmed_SignUp = confirmed_SignUp;
	}
	public Boolean getResetPassword() {
		return resetPassword;
	}
	public void setResetPassword(Boolean resetPassword) {
		this.resetPassword = resetPassword;
	}
	public Date getResetPasswordDate() {
		return resetPasswordDate;
	}
	
	public void setResetPasswordDate(Date resetPasswordDate) {
		this.resetPasswordDate = resetPasswordDate;
	}
	public User(int id, String userName, String password, String firstName, String lastName, Long contactNumber,
			String regCode, String role, String linkedin_Url, float yearsOfExperience, Boolean active,
			Boolean confirmed_SignUp, Boolean resetPassword, Date resetPasswordDate) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.regCode = regCode;
		this.role = role;
		this.linkedin_Url = linkedin_Url;
		this.yearsOfExperience = yearsOfExperience;
		this.active = active;
		this.confirmed_SignUp = confirmed_SignUp;
		this.resetPassword = resetPassword;
		this.resetPasswordDate = resetPasswordDate;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public User(String email) {
		super();
		this.email = email;
	}

	
}
	