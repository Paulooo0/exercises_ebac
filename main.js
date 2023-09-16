$(document).ready(function() {
    $('form').on('submit', function (e) {
        e.preventDefault()
        
        const inputTask = $('#input_task').val()
        const tasks = $('#tasks')
        
        $(`<li class="task">${inputTask}</li>`).appendTo(tasks)
        
        $('#input_task').val('')
    })

    $("#tasks").on("click", "li.task", function (e) { 
        e.preventDefault();
        
        $(this).toggleClass("task_done");
    });
})