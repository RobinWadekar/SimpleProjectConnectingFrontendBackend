package com.connectingProject.Backend.Service;

import org.springframework.stereotype.Service;

@Service
public class HomeService {

    public String getMsg() {
        return new String("This is a custom Message from BACKEND");
    }
}
