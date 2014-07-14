package org.springkorea.project.crud.service;

import java.util.HashMap;

public interface CrudService {
	public int insertBoard(HashMap<String, Object> hashmap);
	public int updateBoard(HashMap<String, Object> hashmap);
	public int deleteBoard(HashMap<String, Object> hashmap);
}
