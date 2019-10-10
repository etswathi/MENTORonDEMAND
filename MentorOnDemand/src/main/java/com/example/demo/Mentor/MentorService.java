package com.example.demo.Mentor;

import java.util.List;

import com.example.demo.user.User;

public interface MentorService {
Mentor create(Mentor mentor);
Mentor delete(int id);
List<Mentor> findAll();
Mentor findById(int id);
Mentor update(Mentor mentor);
List<Mentor> findByActive(Boolean active);
Mentor validatementor(String userName, String password);

}
