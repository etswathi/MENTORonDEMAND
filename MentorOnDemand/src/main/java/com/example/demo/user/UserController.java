package com.example.demo.user;

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

@RestController
@CrossOrigin(origins="*",maxAge=3600)
//@RequestMapping({"/api"})
@RequestMapping({"/users"})
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	
	@Autowired
	private TrainingService trainingsService;
	@PostMapping
	public User create(@RequestBody User user) {
		
/*Training tr=trainingService.findById(user.getTrainingId());
		
		if(tr!=null)
		{
			tr.getUsers().add(user);
			trainingService.create(tr);
		
		}*/
		return userService.create(user);
		
		
		
	}
	@GetMapping(path = {"/{id"})
	public User findOne(@PathVariable("id")int id) {
		return userService.findById(id);
		
	}
	@GetMapping("/findOneUser/{id}")
	public User findOneUser(@PathVariable("id")int id) {
		return userService.findById(id);
		
	}
	
	
	
	
	
	
	

	    @DeleteMapping(path ={"/{id}"})
	    public User delete(@PathVariable("id") int id) {
	        return userService.delete(id);
	    }

	    @GetMapping
	    public List<User> findAll(){
	        return userService.findAll();
	    }
	    @GetMapping(path = {"/{userName}/{password}"})
		public User validateuser(@PathVariable("userName")String userName,@PathVariable("password")String password) {
			return userService.validateuser(userName,password);
	    }
	    @PutMapping(path= {"/update/{id}"})
	    public User update(@PathVariable("id")int id,@RequestBody User user) {
			
//			 user.setId(id);
		 Training tr=trainingsService.findById(user.getTrainingId());
			
			if(tr!=null)
			{
				tr.getUsers().add(user);
				
				trainingsService.update(tr);
				
			
			}
			return user;
			
		        
		    }
	    
	    @PutMapping(path= {"/updates/{id}"})
	    public User updates(@PathVariable("id")int id,@RequestBody User user) {
			
			
			return  userService.update(user);
			
		        
		    }
	    
	    
	    
	    @GetMapping(path = {"/active/{active}"})
		public List<User> findByActive(@PathVariable("active") Boolean active)
		{
			return userService.findByActive(active);
		}

}
