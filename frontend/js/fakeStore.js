let fakeStore = {
  kindjobs: [{
      id: "1",
      term: "FullTime",
      image: "https://pixabay.com/static/uploads/photo/2013/07/13/12/17/walking-stick-159542__180.png",
      sector: "Elderly",
      title: "Senior Social Worker",
      location: "Singapore",
      scope: "Social Worker",
      salary: 5500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam contemni non poteris. Duo Reges: constructio interrete. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Istam voluptatem perpetuam quis potest praestare sapienti? Minime vero, inquit ille, consentit.",
      min_qualification: "Diploma",
      min_yrs_exp: 20,
      postdate: new Date("2016/09/16"),
      deadline: new Date(new Date("2016/09/16").getFullYear(), new Date("2016/09/16").getMonth(), new Date("2016/09/16").getDate()+7),
    },{
      id: "2",
      term: "PartTime",
      image: "https://pixabay.com/static/uploads/photo/2013/07/13/14/00/bear-161915__180.png",
      // "http://placeholders.org/50"
      sector: "Children & Youth",
      title: "Youth Counsellor",
      location: "Singapore",
      scope: "Counsellor",
      salary: 2000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam contemni non poteris. Duo Reges: constructio interrete. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Istam voluptatem perpetuam quis potest praestare sapienti? Minime vero, inquit ille, consentit.",
      min_qualification: "MPhil",
      min_yrs_exp: 10,
      postdate: new Date("2016/09/16"),
      deadline: new Date(new Date("2016/09/16").getFullYear(), new Date("2016/09/16").getMonth(), new Date("2016/09/16").getDate()+7),
    },{
      id: "3",
      term: "Internship",
      image: "https://pixabay.com/static/uploads/photo/2016/04/22/03/43/hands-1345059__180.jpg",
      sector: "Social Enterprises",
      title: "HR Payroll & Benefits",
      location: "Singapore",
      scope: "Corporate Functions",
      salary: 800,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam contemni non poteris. Duo Reges: constructio interrete. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Istam voluptatem perpetuam quis potest praestare sapienti? Minime vero, inquit ille, consentit.",
      min_qualification: "BA",
      min_yrs_exp: 1,
      postdate: new Date("2016/09/16"),
      deadline: new Date(new Date("2016/09/16").getFullYear(), new Date("2016/09/16").getMonth(), new Date("2016/09/16").getDate()+7),
    },{
      id: "4",
      term: "Contract",
      image: "https://pixabay.com/static/uploads/photo/2016/04/22/03/43/hands-1345059__180.jpg",
      sector: "Social Enterprises",
      title: "Financial Advisor",
      location: "Singapore",
      scope: "Corporate Functions",
      salary: 4000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam contemni non poteris. Duo Reges: constructio interrete. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Istam voluptatem perpetuam quis potest praestare sapienti? Minime vero, inquit ille, consentit.",
      min_qualification: "MBa",
      min_yrs_exp: 4,
      postdate: new Date("2016/09/16"),
      deadline: new Date(new Date("2016/09/16").getFullYear(), new Date("2016/09/16").getMonth(), new Date("2016/09/16").getDate()+7),
    },{
      id: "5",
      term: "FullTime",
      image: "https://pixabay.com/static/uploads/photo/2016/04/07/10/41/wheelchair-1313566__180.png",
      sector: "Disabled",
      title: "Physical Therapist for Burn Victims",
      location: "Singapore",
      scope: "Physical Therapist",
      salary: 5000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam contemni non poteris. Duo Reges: constructio interrete. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Istam voluptatem perpetuam quis potest praestare sapienti? Minime vero, inquit ille, consentit.",
      min_qualification: "MD",
      min_yrs_exp: 10,
      postdate: new Date("2016/09/16"),
      deadline: new Date(new Date("2016/09/16").getFullYear(), new Date("2016/09/16").getMonth(), new Date("2016/09/16").getDate()+7),
    },{
      id: "6",
      term: "Contract",
      image: "https://pixabay.com/static/uploads/photo/2016/04/01/12/15/boy-1300621__180.png",
      sector: "Family Services",
      title: "Marriage Counsellor",
      location: "Singapore",
      scope: "Counsellor",
      salary: 3000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam contemni non poteris. Duo Reges: constructio interrete. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Istam voluptatem perpetuam quis potest praestare sapienti? Minime vero, inquit ille, consentit.",
      min_qualification: "PhD",
      min_yrs_exp: 90,
      requirements: "Nosti, credo, illud: Nemo pius est, qui pietatem",
      postdate: new Date("2016/09/16"),
      deadline: new Date(new Date("2016/09/16").getFullYear(), new Date("2016/09/16").getMonth(), new Date("2016/09/16").getDate()+7),
    }
  ],

  searchFilters: [{
    sector: [{
      id: 1,
      sector_name: "Elderly"
    },{
      id: 2,
      sector_name: "Children & Youth"
    },{
      id: 3,
      sector_name: "Social Enterprises"
    },{
      id: 4,
      sector_name: "Disabled"
    },{
      id: 5,
      sector_name: "Family Services"
    }],
    scope: [{
      id: 1,
      scope_name: "Social Worker"
    },{
      id: 2,
      scope_name: "Counsellor"
    },{
      id: 3,
      scope_name: "Social Worker"
    },{
      id: 4,
      scope_name: "Social Worker"
    },{
      id: 5,
      scope_name: "Social Worker"
    }],
    term: [{
      id: 1,
      employment_term: "FullTime",
    }],
  }],

};

export default fakeStore;
