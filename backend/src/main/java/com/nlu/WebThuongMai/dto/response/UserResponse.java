package com.nlu.WebThuongMai.dto.response;

import com.nlu.WebThuongMai.enums.Role;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    long id;
    String username;
    String firstName;
    String lastName;
    String avatar;
    LocalDate birthday;
    String gender;
    String email;
    String phone;
    String address;
    Role role;
    String status;
    LocalDateTime created_at;
    LocalDateTime updated_at;
}
