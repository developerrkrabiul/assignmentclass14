
// developer work all Selection

const dsecbtn = document.getElementById('d_sec_btn');
const deves_section = document.querySelector('.deves_section');
const add_deve_btn = document.querySelector('.add_deve_btn');
const d_out = document.getElementById('d_out');
const rimove_deve_form = document.getElementById('rimove_deve_form');
const devessubmit = document.getElementById('deves_btn');

dsecbtn.addEventListener('click', () => {
    deves_section.classList = "d-block"
    add_deve_btn.classList = "d-none"
})
rimove_deve_form.addEventListener('click', () => {
    deves_section.classList = "d-none"
    add_deve_btn.classList = "d-block"
})





devessubmit.addEventListener('click', function(){
    
    let dName = document.querySelector('input[name="deves_name"]').value;
    let gender = document.querySelector('input[name="Gender"]:checked').value;
    let skills = document.querySelectorAll('input[name="skill"]:checked');
    let dImage = document.querySelector('input[name="d_image"]').value;

        

        let emtarr = [];
        for(let i = 0; i < skills.length; i++){
            emtarr.push(skills[i].value);
        }

    let developer_arr;

    if (dataGet('developers')) {
        developer_arr = dataGet('developers');
      } else {
        developer_arr = [];
      }
    

    developer_arr.push({
        dName   : dName,
        gender  : gender,
        skills  : emtarr,
        dImage  : dImage   

    });

    dataSend('developers', developer_arr)

    
    deveDom();


})


deveDom();
function deveDom(){

    let alldeves = dataGet('developers');
    let ddata = " ";

   

    alldeves.map(data =>{
    let list = " ";
        data.skills.map(li =>{
            list +=`
            <li class="list-group-item">${li}</li>
            `
        })
        
        ddata +=`
            <div  class="col-lg-4 my-3 alert alert-dismissible">
                <div class="card">
                <span   class="close deve_remove" data-dismiss="alert" aria-label="close">&times;</span>
                <img src="${data.dImage}" alt="" class="d_imag card-img">
                    <div class="card-body">
                        <h2 class="d_name">Name : <span>${data.dName}</span></h2>
                        <h6 id="gender" class="alart alert-primary">Gender : <SPan>${data.gender}</SPan></h6>
                        <h6 id="gender">Skills</h6>
                        <hr>
                        <ul class="list-group">
                        ${list}                       
                        </ul>

                    </div>
                </div>
            </div>
        `

    })
    d_out.innerHTML = ddata;

};

