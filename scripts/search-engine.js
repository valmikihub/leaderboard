/* -----------------> IMPORTS <----------------- */

import staffs from "../data/staffs.js";

/* -----------------> REFRENCES <----------------- */

const Plus4List = document.getElementById("plus4-entry");
const searchInput = document.getElementById("search-staff");
const top3Section = document.querySelector("#top3 ol");
const staffPage = document.getElementById("staff-page");
const exitStaffPageBtn = document.getElementById("exit-staff-page");
const staffPageContent = document.getElementById("staff-page-content");

/* -----------------> GLOBAL VARIABLES <----------------- */

let sortedStaffs = [];
let isSearching = false;

/* -----------------> OPEN / STAFF PAGE <----------------- */

function closeStaffPage(){
    staffPage.close();
}

function openStaffPage(staff){
    staffPage.showModal()
    staffPageContent.innerHTML = `
        <img class="avatar" src="${staff.avatar || "/assets/images/none.png"}" alt="Avatar">
        <h1 class="name">${staff.name.legal}</h1>
        <ul class="status">
            <li>
                <p> ${staff.rating} </p>
                <i class="material-icons-round">star</i>
            </li>
            <li>
                <i class="material-icons-round">school</i>
                <p>${GetProfessionFromID(staff.profession)}</p>
            </li>
            <li>
                <i class="material-icons-round">menu_book</i>
                <p>${GetSubjectFromID(staff.subject)}</p>
            </li>
        </ul>
        <ol class="rater" id="staff-rater">
            <li>
                <label for="rate-1">
                    <input id="rate-1" type="radio" name="rating" value="1">
                    <i class="material-icons-round">star</i>
                </label>
            </li>
            <li>
                <label for="rate-2">
                    <input id="rate-2" type="radio" name="rating" value="2">
                    <i class="material-icons-round">star</i>
                </label>
            </li>
            <li>
                <label for="rate-3">
                    <input id="rate-3" type="radio" name="rating" value="3">
                    <i class="material-icons-round">star</i>
                </label>
            </li>
            <li>
                <label for="rate-4">
                    <input id="rate-4" type="radio" name="rating" value="4">
                    <i class="material-icons-round">star</i>
                </label>
            </li>
            <li>
                <label for="rate-5">
                    <input id="rate-5" type="radio" name="rating" value="5">
                    <i class="material-icons-round">star</i>
                </label>
            </li>
        </ol>
        <label class="field" for="review-field">
            <p>Leave a little review (Optional)</p>
            <input type"field" id="review-field" name="rating">
        </label>
        <button id="post-review" class="primary">Review</button>
    `
    const PostReview = document.getElementById("post-review");
    PostReview.addEventListener('click', () => {
        closeStaffPage();
    });

    for(let i = 1; i <= 5; i++){
        const rateBtn = document.getElementById(`rate-${i}`);
        const rateValue = Number(rateBtn.getAttribute("Value"));
        const rateLabel = rateBtn.parentElement
        rateBtn.addEventListener('click', () => {
            for(let j = 1; j <= 5; j++){
                const otherRateBtn = document.getElementById(`rate-${j}`);
                const otherRateValue = Number(otherRateBtn.getAttribute("Value"));
                const otherRateLabel = otherRateBtn.parentElement
                if(otherRateValue <= rateValue){
                    otherRateLabel.querySelector("i").style.color = "var(--star)";
                }
                else{
                    otherRateLabel.querySelector("i").style.color = "var(--shade)";
                }
            }
        });
    };
};

/* -----------------> CHECK FUNCTIONS <----------------- */

/* -----------------> GET FUNCTIONS <----------------- */

function GetProfessionFromID(id){
    if(id == 1){
        return "Principle"
    }
    else if(id == 2){
        return "Teacher"
    }
    else{
        return "No Profession"
    }
}

function GetSubjectFromID(id){
    id = Math.abs(id)

    if(id == 1){
        return "Nepali"
    }
    else if(id == 2){
        return "English"
    }
    else if(id == 3){
        return "Physics"
    }
    else if(id == 4){
        return "Chemistry"
    }
    else if(id == 5){
        return "Mathematics"
    }
    else if(id == 6){
        return "Biology"
    }
    else{
        return "No Subject"
    }
}

/* -----------------> INITILIZE <----------------- */

function initializeStaffs() {
    sortedStaffs = staffs
        .filter(staff => staff.name.legal !== "")
        .sort((a, b) => b.rating - a.rating);
    
    updateTopThree();
    updatePlusFourList(sortedStaffs);
}

/* -----------------> UPDATE / TOP 3 RANK <----------------- */

function updateTopThree() {
    const top3Items = top3Section.querySelectorAll("li");
    
    for (let i = 0; i < 3; i++) {
        if (sortedStaffs[i]) {
            const item = top3Items[i];
            const nameElement = item.querySelector(".name");
            const ratingElement = item.querySelector(".rating");
            const avatarElement = item.querySelector(".avatar");
            
            nameElement.textContent = `${sortedStaffs[i].name.legal}`;
            
            const ratingText = ratingElement.childNodes[0];
            const starIcon = ratingElement.querySelector(".material-icons-round");
            ratingText.textContent = sortedStaffs[i].rating;
            
            avatarElement.src = sortedStaffs[i].avatar || "/assets/images/none.png";

            item.addEventListener('click', () => {
                openStaffPage(sortedStaffs[i]);
            })
        }
    }
}

/* -----------------> UPDATE / 4+ RANK <----------------- */

function updatePlusFourList(staffArray) {
    Plus4List.innerHTML = "";
    
    const startIndex = isSearching ? 0 : 3;
    
    staffArray.slice(startIndex).forEach((staff, index) => {
        const actualRank = isSearching ? 
            sortedStaffs.findIndex(s => s === staff) + 1 : 
            startIndex + index + 1;
            
        const ProfileElement = document.createElement("li");
        ProfileElement.innerHTML = `
        <b class="rank">#${actualRank}</b>
        <img src="${staff.avatar || "/assets/images/none.png"}" alt="Avatar" class="avatar">
        <ol class="tags">
            <li>
                <p>${GetProfessionFromID(staff.profession[0])}</p>
            </li>
            <li>
                <p>${GetSubjectFromID(staff.subject)}</p>
            </li>
        </ol>
        <h3 class="name">
            ${staff.name.legal}
            <p>
                ${staff.name.nick}
            </p>
        </h3>
        <ol class="status">
            <li>
                <p>${staff.rating}</p>
                <i class="material-icons-round">star</i>
            </li>
        </ol>
        `;
        ProfileElement.id = `staff-${staff.name.nick}`
        Plus4List.append(ProfileElement);
        ProfileElement.addEventListener('click', () => {
            openStaffPage(staff);
        })
    });
}

/* -----------------> SEARCHBAR <----------------- */

function handleSearch(query) {
    if (query.trim() === "") {
        isSearching = false;
        top3Section.style.display = "grid";
        updateTopThree();
        updatePlusFourList(sortedStaffs);
        return;
    }
    
    isSearching = true;
    top3Section.style.display = "none";
    
    const filtered = sortedStaffs.filter(staff => {
        const searchTerm = query.toLowerCase();
        const name = `${staff.name.legal} ${staff.name.nick}`.toLowerCase();
        const profession = GetProfessionFromID(staff.profession[0]).toLowerCase();
        const subject = GetSubjectFromID(staff.subject).toLowerCase();
        
        return name.includes(searchTerm) || 
               profession.includes(searchTerm) || 
               subject.includes(searchTerm);
    });
    
    updatePlusFourList(filtered);
}

/* -----------------> SEARCH EVENT <----------------- */

searchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value);
});

/* -----------------> FINALIZE <----------------- */

initializeStaffs();

/* -----------------> CLOSE / STAFF PAGE <----------------- */

exitStaffPageBtn.addEventListener('click', () => {
    closeStaffPage();
});