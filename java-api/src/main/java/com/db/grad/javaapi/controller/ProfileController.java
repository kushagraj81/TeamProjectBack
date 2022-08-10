package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradeRepository;
import com.db.grad.javaapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TradeRepository tradeRepository;
    @GetMapping("/user/{userid}")
    @CrossOrigin(origins = "https://pets-webapp-dot-db-grads-0mjf-group-11.nw.r.appspot.com/")
    public User getUserProfile(@PathVariable int userid) {
        return userRepository.getUserInfo(userid);
    }

    @GetMapping("/profile/{userid}/trades")
    @CrossOrigin(origins = "https://pets-webapp-dot-db-grads-0mjf-group-11.nw.r.appspot.com/")
    public List<Trade> getUserTrades(@PathVariable Integer userid) {
        return tradeRepository.findByUser(userid);
    }
    @GetMapping("/profile/{userid}/active")
    @CrossOrigin(origins = "https://pets-webapp-dot-db-grads-0mjf-group-11.nw.r.appspot.com/")
    public List<Trade> getActiveTrades(@PathVariable Integer userid) {
       
        return tradeRepository.findActiveByUser(userid);
    }
}