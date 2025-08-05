package com.myProjects.QizzeoBE.Repository;

import com.myProjects.QizzeoBE.Models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
}
