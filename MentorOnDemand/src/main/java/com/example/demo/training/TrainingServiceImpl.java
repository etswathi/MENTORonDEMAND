package com.example.demo.training;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TrainingServiceImpl implements TrainingService {
	@Autowired
	private TrainingRepository repository;

	@Override
	public Training create(Training training) {
		// TODO Auto-generated method stub
		return repository.save(training);
	}

	@Override
	public Training delete(int id) {
		// TODO Auto-generated method stub
		Training training=findById(id);
		if(training!=null) {
			repository.delete(training);
		}
		return training;
	}

	@Override
	public List<Training> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public Training findById(int id) {
		// TODO Auto-generated method stub
		return repository.findOne(id);
	}

	@Override
	public Training update(Training training) {
		// TODO Auto-generated method stub
		return repository.save(training);
	}

	@Override
	public List<Training> findTrainingByMentorId(Integer mentorId) {
		// TODO Auto-generated method stub
		return  repository.findTrainingByMentorId(mentorId);
	}

	@Override
	public List<Training> findTrainingByUsersId(Integer usersId) {
		// TODO Auto-generated method stub
		return repository.findTrainingByUsersId(usersId);
	}

	@Override
	public Training findByIdAndMentorId(Integer trainingid, Integer mentorId) {
		// TODO Auto-generated method stub
		return repository.findByIdAndMentorId( trainingid, mentorId);
	}

	@Override
	public Training findByIdAndUsersId(Integer trainingid,Integer usersId) {
		// TODO Auto-generated method stub
		return  repository.findByIdAndUsersId(trainingid,  usersId);
	}

	

	

	@Override
	public List<Training> findByStartDateBetween(Date startDate, Date endDate) {
		// TODO Auto-generated method stub
		return repository.findByStartDateBetween( startDate,endDate);
	}

}