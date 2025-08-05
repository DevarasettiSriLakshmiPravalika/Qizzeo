package com.myProjects.QizzeoBE.Controller;

import com.myProjects.QizzeoBE.Dto.QuizDTO;
import com.myProjects.QizzeoBE.Models.Quiz;
import com.myProjects.QizzeoBE.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/qizzeo")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @PostMapping("/addQuiz")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
        quiz.setCode(generateUniqueCode());
        return ResponseEntity.ok(quizService.saveQuiz(quiz));
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuizDTO> getQuizById(@PathVariable Long id) {
        return ResponseEntity.ok(quizService.getQuizDTOById(id));
    }

    @GetMapping("/all")
    public ResponseEntity<List<QuizDTO>> getAllQuizzes() {
        return ResponseEntity.ok(quizService.getAllQuizDTOs());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable Long id) {
        quizService.deleteQuiz(id);
        return ResponseEntity.ok("Quiz deleted successfully.");
    }

    private String generateUniqueCode() {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            int randomIndex = (int) (Math.random() * characters.length());
            result.append(characters.charAt(randomIndex));
        }
        return result.toString();
    }
}
