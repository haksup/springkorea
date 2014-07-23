package org.springkorea.project.board.service;

import java.util.HashMap;
import java.util.List;

public interface BoardService {
	public List<?> selectListBoard(HashMap<String, Object> hashMap);
	public int selectListBoardCount(HashMap<String, Object> hashMap);
	public HashMap<String, Object> selectDetailBoard(HashMap<String, Object> hashMap);
	public int insertBoard(HashMap<String, Object> hashMap);
	public int updateBoard(HashMap<String, Object> hashMap);
	public int deleteBoard(HashMap<String, Object> hashMap);
}
