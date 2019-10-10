package com.example.demo.training;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface TrainingRepository extends Repository<Training, Integer>{

	void delete(Training training);
	List<Training> findAll();
	Training findOne(int id);
	Training save(Training training);
	@Query("select training from Training training where training.mentors.id=?")
	List<Training> findTrainingByMentorId(Integer mentorId);
	
	
	@Query("select training from Training training where training.id=? and training.mentors.id=? ")
	Training findByIdAndMentorId(Integer id,Integer mentorId);
	Training findByIdAndUsersId(Integer id,Integer usersId);
	
	List<Training>findByStartDateBetween(Date startDate,Date endDate);
	List<Training> findTrainingByUsersId(Integer usersId);
	
}
