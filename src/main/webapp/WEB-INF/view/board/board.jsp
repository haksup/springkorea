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
		boardName : 'notice'
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
	
	<div style="padding: 20px 0 0 0;">
		<form id="board-form" class="form-horizontal">
			<div class="form-group">
		    	<label for="title" class="col-sm-1 control-label">Title</label>
			    <div class="col-sm-11">
			      <input type="text" class="form-control" id="title" name="title" />
			    </div>
		  	</div>
		  	<div class="form-group">
		    	<label for="Content" class="col-sm-1 control-label">Content</label>
		    	<div class="col-sm-11">
		      		<textarea class="form-control" id="content" name="content" rows="5"></textarea>
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<div class="col-sm-offset-1 col-sm-11">
		      		<button type="button" id="reply" class="btn btn-default">Reply</button>
		      		<button type="button" id="save" class="btn btn-default">Save</button>
		      		<button type="button" id="modify" class="btn btn-default">modify</button>
		      		<button type="button" id="delete" class="btn btn-default">delete</button>
		    	</div>
		  	</div>
		</form>
	</div>
</div>
</body>
</html>