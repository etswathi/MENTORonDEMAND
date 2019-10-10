package com.example.demo.payment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.training.Training;
import com.example.demo.training.TrainingService;
import com.example.demo.user.User;
import com.example.demo.user.UserService;

@RestController
@CrossOrigin
//@RequestMapping({"/api"})
@RequestMapping({"/payments"})
public class PaymentController {

	@Autowired
	private PaymentService paymentService;
	@Autowired
	private TrainingService trainingsService; 
	@Autowired
	private UserService userservice; 
	@PostMapping
	public Payment create(@RequestBody Payment td) {
		
		Training tr=trainingsService.findById(td.getTrainingId());
		User ur=userservice.findById(td.getUserId());
		if(tr!=null)
		{
			tr.getPayments().add(td);
			ur.getPayment().add(td);
			paymentService.create(td);
		
		}
		return td;
		/*return paymentService.create(td);*/
	}
	
		
		
		
		
	
	@GetMapping(path = {"/{id"})
	public Payment findOne(@PathVariable("id")int id) {
		return paymentService.findById(id);
		
	}
	
	@PutMapping(path= {"/{id}"})
	public Payment update(@PathVariable("id")int id,@RequestBody Payment payment) {
		
		 payment.setId(id);
	        return paymentService.update(payment);
	    }
	  @GetMapping("/findPaymentByUsersId/{userId}")
	    public List < Payment > getCoursesByUsers(@PathVariable(value = "userId") Integer usersId) {
	        return paymentService.findPaymentByUsersId(usersId);}
	  
	  
	  @GetMapping("/findPaymentByMentorId/{mentorId}")
	    public List < Payment > getCoursesByMentor(@PathVariable(value = "mentorId") Integer mentorId) {
	        return paymentService.findPaymentByMentorId(mentorId);}
	
	
	  @GetMapping("/findPaymentByTrainingIdandUsersId/{trainingId}/{userId}")
	  public List<Payment> findPaymentByTrainingIdandUsersId(@PathVariable(value = "trainingId") Integer trainingid,@PathVariable(value = "userId")Integer usersId){
	    	System.out.println(paymentService.findPaymentByTrainingIdandUsersId(trainingid, usersId));
	    	return paymentService.findPaymentByTrainingIdandUsersId(trainingid,usersId);}
	  
	  @GetMapping("/findPaymentByTrainingIdandMentorId/{trainingId}/{mentorId}")
	  public List<Payment> findPaymentByTrainingIdandMentorId(@PathVariable(value = "trainingId") Integer trainingid,@PathVariable(value = "mentorId")Integer mentorId){
	    	System.out.println(paymentService.findPaymentByTrainingIdandMentorId(trainingid, mentorId));
	    	return paymentService.findPaymentByTrainingIdandMentorId(trainingid,mentorId);}
	  
	  
	
	  @GetMapping("/findOnePaymentmentor/{mentorId}")
	    public List < Payment > getPaymentByMentor(@PathVariable(value = "mentorId") Integer mentorId) {
	        return paymentService.findOnePaymentmentor(mentorId);}

	    @DeleteMapping(path ={"/{id}"})
	    public Payment delete(@PathVariable("id") int id) {
	        return paymentService.delete(id);
	    }

	    @GetMapping
	    public List<Payment> findAll(){
	        return paymentService.findAll();
	    }

}
