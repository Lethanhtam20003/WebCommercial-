package com.nlu.WebThuongMai.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PACKAGE)

@Entity
@Table(name = "coupons")
/**
 * giảm giá cho cho các đơn hàng
 */
public class Coupon {
    @Id
    @Column(name = "coupon_id")
    Long id;
    @Column(unique = true, nullable = false)
    String code;
    double discountPercentage;
    String description;
    int limitUser;
    @CreationTimestamp
    LocalDateTime createdAt;
    LocalDateTime expirationDate;
}
