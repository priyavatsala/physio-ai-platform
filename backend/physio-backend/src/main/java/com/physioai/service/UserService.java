package com.physioai.service;

import com.physioai.dto.LoginRequest;
import com.physioai.dto.LoginResponse;
import com.physioai.entity.Doctor;
import com.physioai.entity.User;
import com.physioai.enums.Role;
import com.physioai.repository.DoctorRepository;
import com.physioai.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {

        user.setPassword(
                passwordEncoder.encode(
                        user.getPassword()
                )
        );

        return userRepository.save(user);
    }

    public LoginResponse loginUser(
            LoginRequest loginRequest
    ) {

        Optional<User> userOptional =
                userRepository.findByEmail(
                        loginRequest.getEmail()
                );

        if (userOptional.isEmpty()) {

            return new LoginResponse(
                    "User not found",
                    "",
                    "",
                    "",
                    false
            );
        }

        User user = userOptional.get();

        if (!passwordEncoder.matches(
                loginRequest.getPassword(),
                user.getPassword()
        )) {

            return new LoginResponse(
                    "Invalid password",
                    "",
                    "",
                    "",
                    false
            );
        }

        if (user.getRole() == Role.DOCTOR) {

            Optional<Doctor> doctorOptional =
                    doctorRepository.findByEmail(
                            user.getEmail()
                    );

            if (doctorOptional.isPresent()) {

                Doctor doctor =
                        doctorOptional.get();

                if (!doctor.isVerified()) {

                    return new LoginResponse(
                            "Waiting for admin approval",
                            "DOCTOR",
                            user.getName(),
                            user.getEmail(),
                            false
                    );
                }
            }
        }

        return new LoginResponse(
                "Login successful",
                user.getRole().name(),
                user.getName(),
                user.getEmail(),
                true
        );
    }
}