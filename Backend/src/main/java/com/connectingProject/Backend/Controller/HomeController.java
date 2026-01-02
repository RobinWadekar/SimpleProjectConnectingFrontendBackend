package com.connectingProject.Backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.connectingProject.Backend.Service.HomeService;

@RestController
@RequestMapping("/backend")
public class HomeController {

    @Autowired
    HomeService homeServ;

    @GetMapping("/get-msg")
    private ResponseEntity<String> getMsg() {
        return ResponseEntity.ok(homeServ.getMsg());
    }
}
