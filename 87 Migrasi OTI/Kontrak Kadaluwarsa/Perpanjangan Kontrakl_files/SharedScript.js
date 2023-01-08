function setMenuActive(p_area, p_controller) {
    var dataparent;

    $.ajax({
        type: 'POST',
        async: false,
        url: "/Login/getAllParentID",
        data: { p_area: p_area, p_controller: p_controller },
        success: function (data) {
            dataparent = data;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //alert('Error -  Data tidak valid (' + xhr.status + ')');
            toastr.warning('@Resources.Lang.notValid');
        }
    })

    var a = dataparent.split('|');

    var i;
    for (i = 0; i < a.length; ++i) {
        //alert(a[i]);
        $('#menu_' + a[i]).parent('li').addClass('active');
    }
};

function setBreadCrumb(p_area, p_controller) {
    var dataparent;

    $.ajax({
        type: 'POST',
        async: false,
        url: "/Login/getBreadCrumb",
        data: { p_area: p_area, p_controller: p_controller },
        success: function (data) {
            dataparent = data;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //alert('Error -  Data tidak valid (' + xhr.status + ')');
            toastr.warning('@Resources.Lang.notValid');
        }
    })

    var datalistbreadcrumb = dataparent.split('|');

    var v_breadcrumbstring = "";
    for (var i = 0; i < datalistbreadcrumb.length; i++) {
        if (i == datalistbreadcrumb.length - 1) {
            v_breadcrumbstring += '<li class="active"><strong>' + datalistbreadcrumb[i] + '</strong></li>';
        }
        else {
            v_breadcrumbstring += '<li class="active">' + datalistbreadcrumb[i] + '</li>';
        }
    };

    $("#breadCrumbLayoutDiv").html(
        '<div class="row wrapper border-bottom white-bg page-heading" style="height:30px !important;">' +
        '    <div class="col-sm-12" style="padding-top: 5px">' +
        '        <ol class="breadcrumb">' +
        //'            <li><span class="glyphicon glyphicon-home"></span></li>' +
        '            <li>Home</li>' +
                     v_breadcrumbstring +
        '        </ol>' +
        '    </div>' +
        '</div>'
    );
};