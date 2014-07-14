<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript">
function getContextPath(){
    var offset=location.href.indexOf(location.host)+location.host.length;
    var ctxPath=location.href.substring(offset,location.href.indexOf('/',offset+1));
    return ctxPath;
}
</script>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery/jquery-2.1.1.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery/jquery.form.js"></script>
<!-- bootstrap(S) -->
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/bootstrap.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/affix.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/alert.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/bootstrap.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/button.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/carousel.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/collapse.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/dropdown.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/modal.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/popover.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/scrollspy.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/tab.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/tooltip.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap/transition.js"></script>
<!-- bootstrap(E) -->

<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap-theme.css" />