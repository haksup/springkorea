package org.springkorea.project.board.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springkorea.project.board.dao.BoardDao;
import org.springkorea.project.board.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {
	@Autowired
	private BoardDao boardDao;
	
	@Override
	public List<?> selectListBoard(HashMap<String, Object> hashMap) {
		return boardDao.selectListBoard(hashMap);
	}

	@Override
	public int selectListBoardCount(HashMap<String, Object> hashMap) {
		return boardDao.selectListBoardCount(hashMap);
	}
	
	@Override
	public int insertBoard(HashMap<String, Object> hashMap) {
		return boardDao.insertBoard(hashMap);
	}

	@Override
	public HashMap<String, Object> selectDetailBoard(HashMap<String, Object> hashMap) {
		return boardDao.selectDetailBoard(hashMap);
	}
	
	@Override
	public int updateBoard(HashMap<String, Object> hashMap) {
		return boardDao.updateBoard(hashMap);
	}

	@Override
	public int deleteBoard(HashMap<String, Object> hashMap) {
		return boardDao.deleteBoard(hashMap);
	}

	
}
