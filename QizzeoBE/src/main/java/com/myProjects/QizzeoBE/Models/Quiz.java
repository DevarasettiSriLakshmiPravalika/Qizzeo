package com.myProjects.QizzeoBE.Models;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String code;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "quiz_id") // Maps to the foreign key in the Question table
    private List<Question> questions;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public Quiz(Long id, String title, String description, String code, List<Question> questions) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.code = code;
		this.questions = questions;
	}

	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Quiz [id=" + id + ", title=" + title + ", description=" + description + ", code=" + code
				+ ", questions=" + questions + "]";
	}

    // Getters and Setters
    
}
