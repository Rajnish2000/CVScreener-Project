console.log('this is cv screener file in javascript');


const data = [
    {
        name: 'Rajnish singh',
        age: 20,
        gender: 'Male',
        city: 'Gorakhpur',
        language: 'javascript',
        framework: 'React.js',
        image: "https://randomuser.me/api/portraits/med/men/45.jpg"
    },
    {
        name: 'Mukesh singh',
        age: 23,
        gender: 'Male',
        city: 'gonda',
        language: 'java',
        framework: 'node.js',
        image: "https://randomuser.me/api/portraits/med/men/35.jpg"
    },

    {
        name: 'suresh chada',
        age: 25,
        gender: 'Male',
        city: 'Goa',
        language: 'python',
        framework: 'django',
        image: "https://randomuser.me/api/portraits/med/men/50.jpg"
    },

    {
        name: 'brado maja',
        age: 22,
        gender: 'Male',
        city: 'haydrabad',
        language: 'ruby',
        framework: 'React.js',
        image: "https://randomuser.me/api/portraits/med/men/52.jpg"
    },

    {
        name: 'kali devi',
        age: 30,
        gender: 'Male',
        city: 'pune',
        language: 'c++',
        framework: 'Qt',
        image: "https://randomuser.me/api/portraits/med/women/51.jpg"
    },

    {
        name: 'Malila lash',
        age: 18,
        gender: 'Female',
        city: 'punjab',
        language: 'perl',
        framework: 'asp.net',
        image: "https://randomuser.me/api/portraits/med/women/56.jpg"
    },

    {
        name: 'Danie lorra',
        age: 23,
        gender: 'Female',
        city: 'Loss angles',
        language: 'go',
        framework: 'djano',
        image: "https://randomuser.me/api/portraits/med/women/59.jpg"
    }
];



/// making iterator for iterating these object
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profiles.length) {
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else {
              return { done: true }
            }

        }
    };
}

 
    const candidate = cvIterator(data);

    cvFunction();
    let next = document.getElementById('next');
    next.addEventListener('click', cvFunction);



    function cvFunction() {
        const currentCandidate = candidate.next().value;
        console.log(currentCandidate);
        let profile = document.getElementById('profile');
        let image = document.getElementById('image');
        console.log('button hax been clicked');
        if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group"> 
    <li class="list-group-item list-group-item-primary">Name : ${currentCandidate.name}</li>
    <li class="list-group-item list-group-item-secondary">Gender : ${currentCandidate.gender}</li>
    <li class="list-group-item list-group-item-success">Age : ${currentCandidate.age}</li>
    <li class="list-group-item list-group-item-danger">city : ${currentCandidate.city}</li>
    <li class="list-group-item list-group-item-warning">Language : ${currentCandidate.language}</li>
    <li class="list-group-item list-group-item-info">framework : ${currentCandidate.framework}</li>
    
  </ul>`;
        }
        else{
            alert('list ended click "ok" to refresh it !');
            window.location.reload();
        }
    }


