console.log('Hello, console!');

const submit = document.getElementById('submit');
submit.addEventListener('click', registerCourse.bind(this));

async function registerCourse(){
    const course_text = document.getElementById('search').value.toLowerCase();
    // find data in dropdown box for grade 

    console.log(course_text);
    
    // add grade data to body
    var body = {
        course: course_text
    };

    var req = {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch('/register', req);
}

async function getCourses(){
    var response = await fetch('/registered',  {mode: 'cors'});
    var data = await response.json();

    console.log(data);

    //TODO: display the data nicely in a table
}
