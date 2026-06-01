package com.physioai.dto;

public class LoginResponse {

    private String message;
    private String role;
    private String name;
    private String email;
    private boolean verified;

    public LoginResponse() {
    }

    public LoginResponse(
            String message,
            String role,
            String name,
            String email,
            boolean verified
    ) {
        this.message = message;
        this.role = role;
        this.name = name;
        this.email = email;
        this.verified = verified;
    }

    public String getMessage() {
        return message;
    }

    public String getRole() {
        return role;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }
}