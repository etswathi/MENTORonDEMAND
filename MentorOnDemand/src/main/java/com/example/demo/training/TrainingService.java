package com.example.demo.training;


import java.util.Date;
import java.util.List;

public interface TrainingService {
	
Training create(Training training);
Training delete(int id);
List<Training> findAll();
Training findById(int id);
Training update(Training training);
List<Training> findTrainingByMentorId(Integer mentorId);
List<Training> findTrainingByUsersId(Integer usersId);
Training findByIdAndMentorId(Integer Id,Integer mentorId);
Training findByIdAndUsersId(Integer Id,Integer usersId);

List<Training> findByStartDateBetween(Date startDate, Date endDate);

}
