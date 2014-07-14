package org.springkorea.project.CommonUtil;

import java.util.Enumeration;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

public class CommonUtil {

	/**
	 * request를 HashMap에 binding한다
	 * @param request
	 * @return
	 */
	public HashMap<String, Object> mapBind(HttpServletRequest request){
		HashMap<String, Object> hm = new HashMap<String, Object>();
		String key; 
		for(
				Enumeration<?> e = request.getParameterNames(); 
				e.hasMoreElements();
				hm.put(key, request.getParameter(key))) {
				key = (String)e.nextElement(); 
		}
		
		return hm;
	}
}
