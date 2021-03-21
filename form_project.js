var f_name = document.getElementById('f_name');
var o_marks = document.getElementById('o_marks');
var t_marks = document.getElementById('t_marks');
var subject = document.getElementById('subject');
var roll_no = document.getElementById('roll_no');

var full_name = document.getElementById('full_name').value;
var obtained_marks = document.getElementById('obtained_marks').value;
var total_marks = document.getElementById('total_marks').value;
function submit(){
    if(!f_name.value || !roll_no.value || !subject.value || !o_marks.value || !t_marks.value ){
        alert('please fill all the fields');
    }
}
