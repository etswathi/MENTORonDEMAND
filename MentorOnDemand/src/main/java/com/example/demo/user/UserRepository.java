package com.example.demo.user;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.example.demo.Mentor.Mentor;

public interface UserRepository extends Repository<User, Integer>{
	
	void delete(User user);
	List<User> findAll();
	User findOne(int id);
	
	
	@Query("select user from User user where user.id=?") 
	User findOneUser(int id);
	User save(User user);
	@Query("select user from User user where user.userName=? and user.password=?")
	User validateuser(String userName, String password);
	 List<User> findByActive(Boolean active);
}
