package org.springkorea.project.crud.dao;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface CrudDao {
	public int insertBoard(HashMap<String, Object> hashmap);
	public int updateBoard(HashMap<String, Object> hashmap);
	public int deleteBoard(HashMap<String, Object> hashmap);
}
