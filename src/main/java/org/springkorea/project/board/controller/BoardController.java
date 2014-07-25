package org.springkorea.project.board.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
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
		ModelAndView mav = new ModelAndView();
		mav.setViewName("board/board");
		return mav;
	}
	
	@RequestMapping(value = "/{boardName}", method = RequestMethod.GET)
	@ResponseBody
	public HashMap<String, Object> selectListBoard(@RequestParam HashMap<String,Object> hashMap){
		List<?> listBoard = boardService.selectListBoard(hashMap);
		int listBoardCount = boardService.selectListBoardCount(hashMap);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("listBoard", listBoard);
		resultMap.put("listBoardCount", listBoardCount);
		
		return resultMap;
	}
	
	@RequestMapping(value = "/{boardName}/create", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void createBoard(HttpServletRequest request){
		HashMap<String, Object> hashMap = mapBind(request);
		boardService.insertBoard(hashMap);
	}

	@RequestMapping(value = "/{boardName}/retrieve", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public HashMap<String, Object> retrieveBoard(@RequestParam HashMap<String,Object> hashMap){
		HashMap<String, Object> retrieveMap = boardService.selectDetailBoard(hashMap);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("retrieveMap", retrieveMap);
		
		return resultMap;
	}
	
	@RequestMapping(value = "/{boardName}/modify", method = RequestMethod.POST)	// put
	@ResponseStatus(HttpStatus.OK)
	public void modifyBoard(HttpServletRequest request){
		HashMap<String, Object> hashMap = mapBind(request);
		boardService.updateBoard(hashMap);
	}

	@RequestMapping(value = "/{boardName}/{boardNo}/delete", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.OK)
	public void deleteBoard(@PathVariable("boardName") String boardName, @PathVariable("boardNo") int boardNo){
		HashMap<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("boardName", boardName);
		hashMap.put("boardNo", boardNo);
		boardService.deleteBoard(hashMap);
	}
}
