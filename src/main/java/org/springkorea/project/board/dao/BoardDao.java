package org.springkorea.project.board.dao;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardDao {
	public List<?> selectListBoard(HashMap<String, Object> hashMap);
	public int selectListBoardCount(HashMap<String, Object> hashMap);
	public HashMap<String, Object> selectDetailBoard(HashMap<String, Object> hashMap);
	public int insertBoard(HashMap<String, Object> hashMap);
	public int updateBoard(HashMap<String, Object> hashMap);
	public int deleteBoard(HashMap<String, Object> hashMap);
}
