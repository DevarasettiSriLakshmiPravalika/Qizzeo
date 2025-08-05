package com.myProjects.QizzeoBE.Service;

import com.myProjects.QizzeoBE.Dto.QuizDTO;
import com.myProjects.QizzeoBE.Models.Quiz;
import com.myProjects.QizzeoBE.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public QuizDTO getQuizDTOById(Long id) {
        Quiz quiz = quizRepository.findById(id).orElseThrow(() -> new RuntimeException("Quiz not found"));
        return mapToDTO(quiz);
    }

    public List<QuizDTO> getAllQuizDTOs() {
        return quizRepository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    public void deleteQuiz(Long id) {
        quizRepository.deleteById(id);
    }

    private QuizDTO mapToDTO(Quiz quiz) {
        return new QuizDTO(
                quiz.getTitle(),
                quiz.getDescription(),
                quiz.getCode(),
                quiz.getQuestions().stream()
                        .map(q -> new QuizDTO.QuestionDTO(q.getText(), q.getOptions()))
                        .collect(Collectors.toList())
        );
    }
}
