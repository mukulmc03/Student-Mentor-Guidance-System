package com.app.FinalProjectv2.respository;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.FinalProjectv2.pojo.Mentor;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, Integer> {

	@Query("select m from Mentor m join Course c on m.assignedMentorCourseId = c.courseId where c.courseId =:studentCourseId order by m.avgRating desc")
	public List<Mentor> findMentors(@Param("studentCourseId") int studentCourseId);

	
	  @Query("select m from Mentor m where m.mentorId =:mentorId") 
	  public Mentor findByMentorId(Integer mentorId);
	 
}
