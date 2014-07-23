/**
 * 게시판 호출
 */
// 사용자변경 옵션
var userOprion = {
		boardName		: 'board'			// 게시판명
		, currentPage	: 1				// 현재 페이지
		, blockCount	: 5			// 한 페이지의  게시물의 수
		, blockPage		: 10			// 한 화면에 보여줄 페이지 수
		, paging		: 'number'		// number, scroll, no 세가지 옵션
};
var $element = new Array();	// 게시판 대상 저장

(function($) {
	
	$.fn.ajaxBoard = function(opts) {
		var targetSavePoint = $element.length;
		opts.targetSavePoint = targetSavePoint;
		$element[targetSavePoint] = $(this);	// 저장 대상을 배열에 저장한다.

		setOption(opts);						// 사용자 옵션 체크 후 기본값이 아닌것을 확인한다.
		var options = $.extend($.fn.ajaxBoard.defaults, opts);	// 사용자 옵션과 기본 옵션을 하나로 합친다.
		
		//authorManager();							// 권한을 설정한다. - 차후 업데이트
		callAjaxBoard(options);
	};

	$.fn.ajaxBoard.defaults = {	// 게시판의 기본 옵션
			totalCount	: 0		// 전체 로우수
			, startRow : 0		// 시작 rownumber
	};
	
	// 리스트 게시판 호출
	callAjaxBoard = function(options) {
		var url = options.boardName;
		options.startRow = (options.currentPage - 1) * options.blockCount;
		
		$.ajax({
			url: url,
			type: 'GET',
			data : options,
			async : false,
			datatype: 'json',
			success : function(result){
				var board = boardSetting(options, result);
				$element[options.targetSavePoint].html(board);
			},
			error : function(){
				alert("에러가 발생하였습니다.");
			}
			
		});
	};
	
	// 사용자 옵션 세팅
	setOption = function(options){
		var bool = false;
		
		jQuery.each(userOprion, function(userOprionKey, userOprionValue){
			jQuery.each(options, function(optionsKey, optionsValue){
				if(userOprionKey == optionsKey){
					bool = false;
					return false;		// break
				}
				bool = true;
			});

			if(bool == true){
				options[userOprionKey] = userOprionValue;
				bool = false;
			}
		});
	};
	
	// 게시판 사용자 옵션별 화면 그리기
	boardSetting = function(options, result){
		var board = "<div style='text-align:center;'>";

		// 게시판 세부화면(CRUD) 화면(S)
		if(options.mode == "R"){
			board += drawBoardRDDetail(options, result);
		}
//		else if(options.mode == "U"){
//			board += drawBoardDetail(options);
//		}
//		else if(options.mode == "D"){
//			board += drawBoardDetail(options);
//		}
		else{
			board += drawBoardCUDetail(options, result);
		}
		// 게시판 세부화면(CRUD) 화면(E)
		
		// 기본 게시판
		board += drawBoad(options, result);

		// 페이징 옵션(S)
		if(options.paging == "number"){
			board += numberPaging(options, result);
		}else if(options.paging == "scroll"){
			
		}
		// 페이징 옵션(E)
		
		board += "</div>";

		return board;
	};
	
	// 게시판 세부화면(CRUD - C, U) 화면
	drawBoardCUDetail = function(options, result){
		var paramOptions =  $.toJSON(options);
		var detail = "<div id='boardDiv" + options.targetSavePoint + "' style='padding: 0px 0 0 0; display:none;'>";
		detail 	  += "	<form id='boardForm" + options.targetSavePoint + "' name='board-form' class='form-horizontal'>";
		detail 	  += "		<div class='form-group'>";
		detail 	  += "			<label for='title' class='col-sm-1 control-label'>Title</label>";
		detail 	  += "			<div class='col-sm-11'>";
		detail 	  += "				<input type='text' class='form-control' name='title' />";
		detail 	  += "			</div>";
		detail 	  += "		</div>";
		detail 	  += "		<div class='form-group'>";
		detail 	  += "			<label for='Contents' class='col-sm-1 control-label'>Contents</label>";
		detail 	  += "			<div class='col-sm-11'>";
		detail 	  += "				<textarea class='form-control' name='contents' rows='5'></textarea>";
		detail 	  += "			</div>";
		detail 	  += "		</div>";
		detail 	  += "		<div class='form-group'>";
		detail 	  += "			<div class='col-sm-offset-1 col-sm-11 text-right'>";
		detail 	  += "				<input type='button' name='reply' class='btn btn-default' value='Reply' onclick='boardReply(\"boardForm" + options.targetSavePoint + "\")' />";
		detail 	  += "				<input type='button' name='save' class='btn btn-default' value='Save' onclick='boardSave(\"boardForm" + options.targetSavePoint + "\", " + paramOptions + ")' />";
		detail 	  += "				<input type='button' name='modify' class='btn btn-default' value='Modify' onclick='boardModify(\"boardForm" + options.targetSavePoint + "\")' />";
		detail 	  += "				<input type='button' name='delete' class='btn btn-default' value='Delete' onclick='boardDelete(\"boardForm" + options.targetSavePoint + "\")' />";
		detail 	  += "			</div>";
		detail 	  += "		</div>";
		detail 	  += "	</form>";
		detail 	  += "</div>";
		
		return detail;
	};
	
	// 게시판 세부화면(CRUD - R, D) 화면
	drawBoardRDDetail = function(options, result){
		var paramOptions =  $.toJSON(options);
		var detail = "<div id='boardDiv" + options.targetSavePoint + "' style='padding: 0px 0 0 0;'>";
		detail 	  += "	<form id='boardForm" + options.targetSavePoint + "' name='board-form' class='form-horizontal'>";
		detail 	  += "		<div class='form-group'>";
		detail 	  += "			<label for='title' class='col-sm-1 control-label'>Title</label>";
		detail 	  += "			<div class='col-sm-11'>";
		detail 	  += result.TITLE;
		detail 	  += "			</div>";
		detail 	  += "		</div>";
		detail 	  += "		<div class='form-group'>";
		detail 	  += "			<label for='Contents' class='col-sm-1 control-label'>Contents</label>";
		detail 	  += "			<div class='col-sm-11'>";
		detail 	  += result.CONTENTS;
		detail 	  += "			</div>";
		detail 	  += "		</div>";
		detail 	  += "		<div class='form-group'>";
		detail 	  += "			<div class='col-sm-offset-1 col-sm-11 text-right'>";
		detail 	  += "				<input type='button' name='reply' class='btn btn-default' value='Reply' onclick='boardReply(\"boardForm" + options.targetSavePoint + "\")' />";
		detail 	  += "				<input type='button' name='save' class='btn btn-default' value='Save' onclick='boardSave(\"boardForm" + options.targetSavePoint + "\", " + paramOptions + ")' />";
		detail 	  += "				<input type='button' name='modify' class='btn btn-default' value='Modify' onclick='boardModify(\"boardForm" + options.targetSavePoint + "\")' />";
		detail 	  += "				<input type='button' name='delete' class='btn btn-default' value='Delete' onclick='boardDelete(\"boardForm" + options.targetSavePoint + "\")' />";
		detail 	  += "			</div>";
		detail 	  += "		</div>";
		detail 	  += "	</form>";
		detail 	  += "</div>";
		
		return detail;
	};
	
	// 게시판 리스트
	drawBoad = function(options, result){
		var rownum = options.currentPage == 1 ? result.listBoardCount + 1 : result.listBoardCount - options.blockCount * (options.currentPage - 1) + 1;
		var listBoard = result.listBoard;
		
		var board = "<div id='writeBtnDiv" + options.targetSavePoint + "' class='col-xs-pull-12 text-right'>" +
				"<input type='button' name='write' class='btn btn-default' value='Write' " +
				"onclick='boardWrite(\"boardDiv" + options.targetSavePoint + "\", \"writeBtnDiv" + options.targetSavePoint + "\")' /></div>";
		board += "<div>";
		board +=	"	<table class='table table-bordered'>";
		board +=	"	<colgroup>";
		board +=	"		<col width='5%'>";
		board +=	"		<col width='75%' >";
		board +=	"		<col width='10%' >";
		board +=	"		<col width='10%' >";
		board +=	"	</colgroup>";
		board +=	"	<tr>";
		board +=	"		<th class='text-center'>번호</th>";
		board +=	"		<th class='text-center'>제목</th>";
		board +=	"		<th class='text-center'>등록일</th>";
		board +=	"		<th class='text-center'>등록자</th>";
		board +=	"	</tr>";
		if(listBoard.length == 0){
			board += "<tr>";
			board += "	<td colspan='4' align='center'>등록된 게시물이 없습니다</td>";
			board += "</tr>";
		}else{
			for(var i = 0; i < listBoard.length; i++){
				board += "<tr>";
				board += "	<td class='text-center'>" + (rownum =rownum - 1) + "</td>";
				board += "	<td class='text-left'><a onclick='boardRead(" + $.toJSON(options) + ")' style='cursor:pointer;'>" + listBoard[i].TITLE + "</a></td>";
				board += "	<td class='text-center'>" + listBoard[i].REG_DATE + "</td>";
				board += "	<td class='text-center'>" + listBoard[i].REG_USER + "</td>";
				board += "</tr>";
			}
		}
		board +=	"	</table>";
		board +=	"</div>";

		return board;
	};
	
	// 숫자 페이징
	numberPaging = function(options, result){
		var totalPage = Math.ceil(result.listBoardCount / options.blockCount);	// 전체페이지 수
		if (totalPage == 0) {
			totalPage = 1;
		}
		// 현재 페이지가 전체 페이지 수보다 크면 전체 페이지 수로 설정
		if (options.currentPage > options.totalPage) {
			options.currentPage = options.totalPage;
		}
		
		var startPage =  Math.floor((options.currentPage - 1) / options.blockPage) * options.blockPage + 1;
		var endPage = startPage + options.blockPage - 1;
		
		// 마지막 페이지가 전체 페이지 수보다 크면 전체 페이지 수로 설정
		if (endPage > totalPage) {
			endPage = totalPage;
		}
		
		var toJsonOption;
		var currentPage = options.currentPage;
		var paging =	"<div>";
		if (options.currentPage > options.blockPage) {
			options.currentPage = 1;
			toJsonOption = $.toJSON(options);
			paging +=	"<a onclick='callAjaxBoard(" + toJsonOption + ");' style='cursor:pointer;'>처음</a>&nbsp;";
			
			options.currentPage = startPage - 1;
			toJsonOption = $.toJSON(options);
			paging +=	"<a onclick='callAjaxBoard(" + toJsonOption + ");' style='cursor:pointer;'>이전</a>&nbsp;";
		}
		for (var i = startPage; i <= endPage; i++) {
			if (i > totalPage) {
				break;
			}
			if (i == currentPage) {
				paging +=	"<b>" + i + "</b>&nbsp";
			} else {
				options.currentPage = i;
				toJsonOption = $.toJSON(options);
				paging +=	"<a onclick='callAjaxBoard(" + toJsonOption + ");' style='cursor:pointer;'>" + i + "</a>&nbsp;";
			}
		}
		if (totalPage - startPage >= options.blockPage) {
			options.currentPage = endPage + 1;
			toJsonOption = $.toJSON(options);
			paging +=	"<a onclick='callAjaxBoard(" + toJsonOption + ");' style='cursor:pointer;'>다음</a>&nbsp;";
			
			options.currentPage = totalPage;
			toJsonOption = $.toJSON(options);
			paging +=	"<a onclick='callAjaxBoard(" + toJsonOption + ");' style='cursor:pointer;'>끝</a>";
		}
		paging +=		"</div>";
		return paging;
	};
	
	// 새글 작성
	boardWrite = function(boardDivId, boardBtnId){
		$('#' + boardDivId).show();						// 입력form show
		$('#' + boardDivId + " [name=reply]").hide();	// 답글 버튼 hide
		$('#' + boardDivId + " [name=modify]").hide();	// 수정 버튼 hide
		$('#' + boardDivId + " [name=delete]").hide();	// 삭제 버튼 hide
		$('#' + boardBtnId).hide();						// 새글 버튼 hide
	};
	
	// 게시판 저장
	boardSave = function(boardId, options){
		var url = options.boardName;
		
		$("#" + boardId).ajaxSubmit({
			url : url + "/create",
			data : options,
			type: "POST",
			dataType: "html",
			success: function(data) {
				alert("저장되었습니다.");
				options.mode = "R";
				callAjaxBoard(options);
			},
			error : function(){
				alert("정보를 저장 하지 못했습니다.");
			}
		});
	};
	
	// 게시판 읽기
	boardRead = function(options){
		var url = options.boardName;
		alert(options.boardNo);
		$.ajax({
			url: url + "/retrieve",
			type: 'GET',
			data : options,
			async : false,
			datatype: 'json',
			success : function(result){
				options.mode = "D";
				var board = boardSetting(options, result);
				$element[options.targetSavePoint].html(board);
			},
			error : function(){
				alert("에러가 발생하였습니다.");
			}
			
		});
	};
	

	
})(jQuery);