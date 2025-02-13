package com.mangabox.mangabox_backend.services;

import com.mangabox.mangabox_backend.Daos.UserDao;
import com.mangabox.mangabox_backend.entities.CustomUserDetails;
import com.mangabox.mangabox_backend.entities.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailsService implements UserDetailsService {
    private final UserDao userDao;

    public CustomUserDetailsService(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userDao.findByEmail(email);
        return new CustomUserDetails(user);
    }
}
