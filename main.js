const companies= [
    {name: "company One",category: "finance",start:1981,end:2003},
    {name: "company two",category: "retail",start:1992,end:2008},
    {name: "company three",category: "auto",start:1999,end:2007},
    {name: "company four",category: "technology",start:2007,end:2010},
    {name: "company five",category: "retail",start:1987,end:2001},
    {name: "company six",category: "finance",start:1981,end:2010},
    {name: "company seven",category: "auto",start:1986,end:1996},
    {name: "company eight",category: "technology",start:2000,end:2009},
    {name: "company nine",category: "finance",start:1981,end:1989},
];

const ages=[36,28,41,26,35,23,24,5,66,77,46,54,59,20];

// for(let i=0; i< companies.length;i++){
//     console.log(companies[i]);
//   }

//forEach


// companies.forEach(function(company){
//   console.log(company.name);
// });

//filter


//get 21 and older

// let canDrink =[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i] <=21){
    
//       canDrink.push(ages[i]);
//     }
// }



// const canDrink = ages.filter(function(age){
//   if(age >=21){
//         return true;
//     }
// });

const canDrink = ages.filter(age => age >= 21);




//filter retail companies

const retailCompanies=companies.filter(function(company){
    if(company.category === 'retail'){
        return true;
    }
});




const retailcompanies = companies.filter(company => company.category === 'retail');

//get 80s companies


const eightiesCompanies = companies.filter(company => (company.start >=1980 && company.start<1990));

//get compines that lasted 10years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

//console.log(lastedTenYears)

//map

//create array of company names
// const companyname = companies.map(function(company){
//     return company.name;
// }) ;

//console.log(companyname);

const testMap =companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end} - ${company.category}]`;
});

//console.log(testMap);

const testmap=companies.map(company=>`${company.name}[${company.start}-${company.end}]`);

//console.log(testmap);
//const agesSquare = ages.map(age=> Math.sqrt(age));

//console.log(agesSquare);
//const agesTimesTwo=ages.map(ages=>ages*2);

//console.log(agesTimesTwo);

// const agemap=ages
// .map(age=>Math.sqrt(age))
// .map(age=>age*2); 

//console.log(agemap);

//sort

//sort companies by start year

// const sortedcompanies=companies.sort(function(c1,c2){
//     if(c1.start>c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });


//console.log(sortedcompanies);
//const sortedcompanies = companies.sort((a,b)=>(a.start>b.start?1:-1));

//console.log(sortedcompanies);

// Sort ages
//const sortages=ages.sort((a,b)=>a-b);
//console.log(sortages)


//reduce

// let agesum=0;

// for(let i=0;i<ages.length;i++){
//     agesum+=ages[i];
// }


// const agesum=ages.reduce(function(total,age){
//     return total+age;
// },0);

//const agesum=ages.reduce((total,age)=>total+age,0);
//console.log(agesum);

//get total years for all companies

// const totalyears=companies.reduce(function(total,company){
//     return total+(company.end-company.start);
// },0);

 const totalyears=companies.reduce((total,company)=>total+
 (company.end-company.start),0);

//console.log(totalyears);



//combine Methods

const combined=ages
 .map(age=>age*2)
 .filter(age=>age>=40)
 .sort((a,b)=>a-b)
 .reduce((a,b)=>a+b,0);
 console.log(combined)