package com.myProjects.QizzeoBE.Dto;

import java.util.List;

public class QuizDTO {
    private String title;
    private String description;
    private String code;
    private List<QuestionDTO> questions;

    public QuizDTO(String title, String description, String code, List<QuestionDTO> questions) {
        this.title = title;
        this.description = description;
        this.code = code;
        this.questions = questions;
    }

    public static class QuestionDTO {
        private String text;
        private List<String> options;

        public QuestionDTO(String text, List<String> options) {
            this.text = text;
            this.options = options;
        }

        // Getters
        public String getText() { return text; }
        public List<String> getOptions() { return options; }
    }

    // Getters
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getCode() { return code; }
    public List<QuestionDTO> getQuestions() { return questions; }
}
