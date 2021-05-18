function onss() {
    text1.border = '1px'
    text1.borderColor = 'red'
}

function search() {
    var obj = text1.value;
    if (!obj) {
        alert('请输入要查询的uid');
        return;
    }
    location.href = `pro_search.html?uid=${obj}`
}

function tz_lb() {
    parent.location.href = 'http://127.0.0.1:8080/pro_list.html'
}

function tz_dl() {
    parent.location.href = `http://127.0.0.1:8080/pro_login.html`
}

function tz_zc() {
    parent.location.href = `http://127.0.0.1:8080/pro_reg.html`
}

function tz_sc() {
    parent.location.href = `http://127.0.0.1:8080/pro_del.html`
}

