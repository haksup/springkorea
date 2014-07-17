package org.springkorea.project.board.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springkorea.project.CommonUtil.CommonUtil;
import org.springkorea.project.board.service.BoardService;

@Controller
@RequestMapping("/board")
public class BoardController extends CommonUtil{
	@Autowired
	private BoardService boardService;
	
	@RequestMapping("/boardView")
	public ModelAndView board() throws Exception {
		System.out.println("aaa");
		ModelAndView mav = new ModelAndView();
		mav.setViewName("board/board");
		return mav;
	}
	
	@RequestMapping(value = "/{boardNm}", method = RequestMethod.GET)
	@ResponseBody
	public HashMap<String, Object> selectListBoard(@RequestParam HashMap<String,Object> hashMap ){
		List<?> listBoard = boardService.selectListBoard(hashMap);
		int listBoardCount = boardService.selectListBoardCount(hashMap);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("listBoard", listBoard);
		resultMap.put("listBoardCount", listBoardCount);
		
		return resultMap;
	}
}
