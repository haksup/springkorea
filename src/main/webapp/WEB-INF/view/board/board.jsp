<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- js, css include(S)-->
<%@ include file="/WEB-INF/view/include/header.jsp"%>
<!-- js, css include(E)-->

<script type="text/javascript" src="<%=request.getContextPath()%>/js/board/ajaxBoard.js"></script>

<script language="javascript">
jQuery(document).ready(function(){
	
	$('#divTest').ajaxBoard({
		boardName : 'notice',
		blockCount : 5
	});
	$('#divTest2').ajaxBoard({
		boardName : 'notice',
		blockCount : 5
	});
	
});
</script>

<title>ajaxBoard</title>
</head>
<body>

<div class="container-fluid" style="width: 1024px;">
	<div>
		<h3>게시판 <small>Board</small></h3>
	</div>
	<div id="divTest"></div>
	<div>
		<h3>게시판 <small>Board</small></h3>
	</div>
	<div id="divTest2"></div>
</div>
</body>
</html>