// Get elements section
const featuresBtn = document.getElementById('features-btn');
const companyBtn = document.getElementById('company-btn');
const changeToggleVisibilityContent = document.getElementsByClassName('dropdown-content');
const openNavBtn = document.getElementById('openNavBtn');
const closeNavBtn = document.getElementById('closeNavBtn');

// Navbar toggle buttons
const sidebarFeatures = document.getElementById('sidebar-features');
const sidebarCompany = document.getElementById('sidebar-company');
const changeToggleVisibilityContentNavbar = document.getElementsByClassName('sidebar-dropdown');

// Set visibility to none by default
for(let i = 0; i < changeToggleVisibilityContentNavbar.length; i++){
    changeToggleVisibilityContent[i].style.display = "none";
}

// Toggle features dropdown
function toggleDropdownFeatures(){
    if(changeToggleVisibilityContent[0].style.display == "none")
    {
        changeToggleVisibilityContent[0].style.display = "block";
        featuresBtn.innerHTML=`Features      <i class="fa-solid fa-angle-up"></i>`;
    } else{
        changeToggleVisibilityContent[0].style.display = "none";
        featuresBtn.innerHTML=`Features      <i class="fa-solid fa-angle-down"></i>`;
    }
}

// Toggle company dropdown
function toggleDropdownCompany(){
    if(changeToggleVisibilityContent[1].style.display == "none")
    {
        changeToggleVisibilityContent[1].style.display = "block";
        companyBtn.innerHTML=`Company      <i class="fa-solid fa-angle-up"></i>`;
    } else{
        changeToggleVisibilityContent[1].style.display = "none";
        companyBtn.innerHTML=`Company      <i class="fa-solid fa-angle-down"></i>`;
    }
}

// Toggle sidebar navbar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";

    // Set visibility to none when navbar is closed
    for(let i = 0; i < changeToggleVisibilityContentNavbar.length; i++){
        changeToggleVisibilityContentNavbar[i].style.display = "none"; 
    }
}

// Toggle sidebar dropdown
for(let i = 0; i < changeToggleVisibilityContentNavbar.length; i++){
    changeToggleVisibilityContentNavbar[i].style.display = "none"; // Set visibility to none by default
}
//Features button
function sidebarFeaturesToggle() {
    if(changeToggleVisibilityContentNavbar[0].style.display == "none")
    {
        changeToggleVisibilityContentNavbar[0].style.display = "block";
        sidebarFeatures.innerHTML=`Features      <i class="fa-solid fa-angle-up"></i>`;
    } else{
        changeToggleVisibilityContentNavbar[0].style.display = "none";
        sidebarFeatures.innerHTML=`Features      <i class="fa-solid fa-angle-down"></i>`;
    }
}
//Company button
function sidebarCompanyToggle() {
    if(changeToggleVisibilityContentNavbar[1].style.display == "none")
    {
        changeToggleVisibilityContentNavbar[1].style.display = "block";
        sidebarCompany.innerHTML=`Company      <i class="fa-solid fa-angle-up"></i>`;
    } else{
        changeToggleVisibilityContentNavbar[1].style.display = "none";
        sidebarCompany.innerHTML=`Company      <i class="fa-solid fa-angle-down"></i>`;
    }
}
// Call dropdown functions
featuresBtn.addEventListener('click', toggleDropdownFeatures);
companyBtn.addEventListener('click', toggleDropdownCompany);
// Call toggle sidebar
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
// Call dropdown sidebar
sidebarFeatures.addEventListener('click', sidebarFeaturesToggle);
sidebarCompany.addEventListener('click', sidebarCompanyToggle);


