
let AllData = [
    {
        'a': 'Pyhton',
        'b': 'HTML',
        'c': 'Java',
        'd': 'C'
    },
    {
        'a': 'HTML',
        'b': 'C++',
        'c': 'Data Science',
        'd': 'Machine Learning'
    },
    {
        'a': 'Pyhton',
        'b': 'C++',
        'c': 'CSS',
        'd': 'C#'
    },
    {
        'a': 'Java',
        'b': 'Data Science',
        'c': 'JavaScript',
        'd': 'C#'
    },
    {
        'a': 'C',
        'b': 'Machine Learning',
        'c': 'CSS',
        'd': 'javaScript'
    }
]

let Results = [
    {
        'number': 13,
        'name': 'Python'
    },

    {
        'number': 12,
        'name': 'HTML'
    },

    {
        'number': 14,
        'name': 'Java'
    },
    {
        'number': 15,
        'name': 'C'
    },
    {
        'number': 23,
        'name': 'C++'
    },
    {
        'number': 24,
        'name': 'Data Science'
    },
    {
        'number': 25,
        'name': 'Machine Learning'
    },
    {
        'number': 35,
        'name': 'CSS'
    },
    {
        'number': 45,
        'name': 'JavaScript'
    },
    {
        'number': 34,
        'name': 'C#'
    }
]

let startbtn = document.querySelector('.startbtn');
let startingDiv = document.querySelector('.startingDiv');
let gussName = document.querySelector('.gussName');
let checkName = document.querySelector('.checkName');
let afterName = document.querySelector('.afterName');
let resultbtn = document.querySelector('.resultbtn');
let seeName = document.querySelector('.seeName');

startbtn.addEventListener('click', () => {
    gussName.style.display = 'block';
    startingDiv.style.display = 'none';
})

afterName.addEventListener('click', () => {
    checkName.style.display = 'block';
    gussName.style.display = 'none';
})


count = 1;
let DisplatData = (index) => {
    if (count == 5) {
        resultbtn.style.display = 'block';
        count = 4;
    }

    checkName.innerHTML = '';
    checkName.innerHTML = `
                <h2 class="text-3xl py-5">
                    The name you selected,is the name on this page
                </h2>
                <ul>
                    <li class="bg-gray-500 p-2 text-2xl my-2">${AllData[index].a}</li>
                    <li class="bg-gray-500 p-2 text-2xl my-2">${AllData[index].b}</li>
                    <li class="bg-gray-500 p-2 text-2xl my-2">${AllData[index].c}</li>
                    <li class="bg-gray-500 p-2 text-2xl my-2">${AllData[index].d}</li>
                </ul>
                <div class="text-center py-9 yesnobtn">
                    <button class="btn bg-white text-black font-bold p-2 px-5 rounded me-5" onclick="DisplatData(${count});giveindex(${index})">Yes</button>
                    <button class="btn bg-white text-black font-bold p-2 px-5 rounded me-2" onclick="DisplatData(${count})">No</button>
                </div>
            `

    if (count <= 4) {
        count++;
    } else {
        count = 4;
    }
}


let num = '';

function giveindex(getindex) {
    if (num.length < 2) {
        getindex++;
        num += getindex;
    }
}

resultbtn.addEventListener('click', function () {
    Results.filter((v, i) => {
        if (v.number == num) {
            return resultName = v.name;

        }

    });

    intervalcount = 5;

    let stopinterval = setInterval(function () {
        if (intervalcount == 0) {
            seeName.innerHTML = `<span>
                        It's ${resultName}
                    </span>`
            clearInterval(stopinterval);
        }
        else {
            seeName.innerHTML = `<span>
                         ${intervalcount}
                </span>`
            intervalcount--;
        }
    }, 1000);

    resultbtn.style.display = 'none';
    seeName.style.display = 'flex';
    checkName.style.display = 'none';

})
DisplatData(0);
