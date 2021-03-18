package com.app.FinalProjectv2.service;

import java.util.List;

import com.app.FinalProjectv2.pojo.Query;

public interface IQueryService {

	//to get all queries
	public List<Query> getAllQueries();

	//to get query by id
	public Query getQueryById(int queryId);

	//to update answer (Done By Admin)
	public String updateAnswer(int queryId, String updatedAnswer);

	//to delete answer (done by admin)
	public String deleteAnswer(int queryId);

	//to add question (done by student & mentor)
	public String addQuestion(String question);

	//update Question (done by student & mentor)
	public String updateQuestion(int queryId, String updatedQuestion);

	//to delete question (done by admin, student & mentor)
	public String deleteQuestion(int queryId);
}
