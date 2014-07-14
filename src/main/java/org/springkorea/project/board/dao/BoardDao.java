package org.springkorea.project.board.dao;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardDao {
	public List<?> selectListBoard(HashMap<String, Object> hashmap);
	public int selectListBoardCount(HashMap<String, Object> hashmap);
	public int insertBoard(HashMap<String, Object> hashmap);
	public int updateBoard(HashMap<String, Object> hashmap);
	public int deleteBoard(HashMap<String, Object> hashmap);
}
