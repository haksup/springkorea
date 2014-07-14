package org.springkorea.project.crud.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springkorea.project.crud.dao.CrudDao;
import org.springkorea.project.crud.service.CrudService;

@Service
public class CrudServiceImpl implements CrudService {
	@Autowired
	public CrudDao crudDao;
	
	@Override
	public int insertBoard(HashMap<String, Object> hashmap) {
		return crudDao.insertBoard(hashmap);
	}

	@Override
	public int updateBoard(HashMap<String, Object> hashmap) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteBoard(HashMap<String, Object> hashmap) {
		// TODO Auto-generated method stub
		return 0;
	}

}
