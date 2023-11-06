function getinvestigationslist() {
	$.ajax({
		url: "getinvestigationslist",
		type: "POST",
        dataType: "json",
		success: function(data) {
            let str = "";
            for(items of data) {
                str += "<p id=\"" + items.idx + "\" class=\"investigation\">" + items.investigationName + "</p>";
            }
			
            $('.investigationList').html(str);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}

function insertinvestigation(investigationName) {
    $.ajax({
		url: "insertinvestigation",
		type: "POST",
        data: {investigationName},
        dataType: "json",
		success: function(data) {
            alert("새로운 수사파일을 만들었습니다.");
            $('.newcategoryalert').removeClass('show');

            getinvestigationslist();
		},
		error: function(xhr, status, error) {
            alert("동일한 수사 파일이 있습니다.");
			console.log(xhr, status, error);
		}
	})
}

$(document).ready(function() {
    getinvestigationslist();
    $('.menu-icon').on('click',function() {
        var $categoryMenu = $('.categorymenu');
		var currentLeft = parseFloat($categoryMenu.css('left'));
		
        if (currentLeft < 0) {
            $categoryMenu.animate({ left: '0px' }, 300);
            $('.main').animate({ paddingLeft: '300px' }, 300);
        } else {
            $categoryMenu.animate({ left: '-310px' }, 300);
            $('.main').animate({ paddingLeft: '0px' }, 300);
        }
    });

    $('.addcategory').on('click',function() {
        $('.newcategoryalert').addClass('show');
    });

    $('.newbtn').on('click',function() {
        var investigationName = $("input[name='investigationName']").val();
        if(investigationName.trim() == "" ) {
            alert("수사 파일 명을 입력해주세요!");
        } else {
            insertinvestigation(investigationName);
        }
        
    });

    $('.cancelbtn').on('click',function() {
        $('.newcategoryalert').removeClass('show');
    });
})
