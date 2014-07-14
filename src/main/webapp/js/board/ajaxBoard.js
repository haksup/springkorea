/**
 * 게시판 호출
 */
// 사용자변경 옵션
var userOprion = {
		boardName		: 'board'			// 게시판명
		, currentPage	: 1				// 현재 페이지
		, blockCount	: 10			// 한 페이지의  게시물의 수
		, blockPage		: 10			// 한 화면에 보여줄 페이지 수
};

(function($) {
	
	$.fn.ajaxBoard = function(opts) {
		var url = opts.boardName;
		var $element = $(this);
		
		setOption(opts);
		var options = $.extend($.fn.ajaxBoard.defaults, opts);

		$.ajax({
			url: url,
			type: 'GET',
			data : options,
			async : false,
			datatype: 'json',
			success : function(result){
				var board = drawBoad(options, result);
				$element.html(board);
			},
			error : function(){
				alert("에러가 발생하였습니다.");
			}
			
		});
	};

	$.fn.ajaxBoard.defaults = {	// 게시판의 기본 옵션
			totalCount	: 0		// 전체 로우수
			, startRow : 0		// 시작 rownumber
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
	
	drawBoad = function(options, result){
		var rownum = options.currentPage == 1 ? result.listBoardCount + 1 : result.listBoardCount - options.blockCount * (options.currentPage - 1) + 1;
		var listBoard = result.listBoard;
		
		var board = "<table class='table table-bordered'>";
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
				board += "	<td class='text-left'>" + listBoard[i].TITLE + "</td>";
				board += "	<td class='text-center'>" + listBoard[i].REG_DATE + "</td>";
				board += "	<td class='text-center'>" + listBoard[i].REG_USER + "</td>";
				board += "</tr>";
			}
		}
		board +=	"</table>";

		return board;
	};
	
})(jQuery);