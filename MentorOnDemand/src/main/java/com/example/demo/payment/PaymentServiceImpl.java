package com.example.demo.payment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class PaymentServiceImpl implements PaymentService {
@Autowired
private PaymentRepository repository;
	@Override
	public Payment create(Payment payment) {
		// TODO Auto-generated method stub
		return repository.save(payment);
	}

	@Override
	public Payment delete(int id) {
		// TODO Auto-generated method stub
		Payment payment= findById( id);
		if(payment!=null)
		{
	 repository.delete(payment);
	}
		return payment;}

	@Override
	public List<Payment> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public Payment findById(int id) {
		// TODO Auto-generated method stub
		return repository.findOne(id);
	}

	@Override
	public Payment update(Payment payment) {
		// TODO Auto-generated method stub
		return repository.save(payment);
	}

	@Override
	public List<Payment> findOnePaymentmentor(Integer mentorId) {
		// TODO Auto-generated method stub
		return repository.findOnePaymentmentor(mentorId);
	}

	@Override
	public List<Payment> findPaymentByUsersId(Integer usersId) {
		// TODO Auto-generated method stub
		return repository.findPaymentByUsersId(usersId);
	}

	@Override
	public List<Payment> findPaymentByTrainingIdandUsersId(Integer trainingid, Integer usersId) {
		// TODO Auto-generated method stub
		return repository.findPaymentByTrainingIdandUsersId(trainingid,usersId);
	}

	@Override
	public List<Payment> findPaymentByMentorId(Integer mentorId) {
		// TODO Auto-generated method stub
		return repository.findPaymentByMentorId(mentorId);
	}

	@Override
	public List<Payment> findPaymentByTrainingIdandMentorId(Integer trainingid, Integer mentorId) {
		// TODO Auto-generated method stub
		return repository.findPaymentByTrainingIdandMentorId(trainingid,mentorId);
	}

}
