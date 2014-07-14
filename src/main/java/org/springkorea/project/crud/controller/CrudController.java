package org.springkorea.project.crud.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springkorea.project.CommonUtil.CommonUtil;
import org.springkorea.project.crud.service.CrudService;

@Controller
@RequestMapping("/crud")
public class CrudController extends CommonUtil{
	private String boardNm;
	
	private HashMap<String, Object> hashMap;
	
	@Autowired
	private CrudService crueService;
	
	@RequestMapping("/{boardNm}")
	public ModelAndView board(HttpServletRequest request, HttpServletResponse response,
							@PathVariable("boardNm") String boardNm) throws Exception {
		this.boardNm = boardNm;
		ModelAndView mav = new ModelAndView();
		mav.setViewName("crud/crud");
		return mav;
	}
	
	@RequestMapping(value = "/board", method = RequestMethod.POST)
	public void insertBoard(HttpServletRequest request, HttpServletResponse response){
		hashMap = mapBind(request); 
		hashMap.put("boardName", boardNm);
		crueService.insertBoard(hashMap);
	}

	@RequestMapping(value = "/board", method = RequestMethod.PUT)
	public void updateBoard(HttpServletRequest request, HttpServletResponse response){
		System.out.println("PUT " + boardNm);
	}

	@RequestMapping(value = "/board", method = RequestMethod.DELETE)
	public void deleteBoard(HttpServletRequest request, HttpServletResponse response){
		System.out.println("DELETE " + boardNm);
	}
}
