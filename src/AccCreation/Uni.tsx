"use client";

import { Button, Label, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiGraduateCap } from "react-icons/gi";
import Header from "../Components/Header";

export const Uni = () => {
  const navigate = useNavigate();

  const [university, setUniversity] = useState("");
  const [campusOpt, setCampus] = useState<string[]>([]);
  const [facultyOpt, setFaculty] = useState<string[]>([]);

  useEffect(() => {
    const campuses: { [key: string]: string[] } = {
      "Australian Catholic University": [
        "Ballarat",
        "Brisbane",
        "Canberra",
        "Melbourne",
        "North Sydney",
        "Strathfield",
      ],
      "Australian National University": ["Canberra"],
      "Bond University": ["Gold Coast"],
      "Charles Darwin University": ["Alice Springs", "Darwin"],
      "Charles Sturt University": [
        "Albury-Wodonga",
        "Bathurst",
        "Canberra",
        "Dubbo",
        "Goulburn",
      ],
      "Central Queensland University": [
        "Brisbane",
        "Bundaberg",
        "Cairns",
        "Emerald",
        "Gladstone",
        "Mackay",
        "Melbourne",
        "Noosa",
        "Rockhampton",
        "Sydney",
        "Townsville",
      ],
      "Curtin University": [
        "Curtin Kalgoorlie",
        "Curtin Midland",
        "Curtin Murray Street",
        "Curtin Perth",
        "Curtin St Georges Terrace",
        "Geraldton Universities Centre (partner institution)",
        "Muresk Institute (partner institution)",
        "Navitas English Perth (partner institution)",
        "Pilbara Universities Centre (partner institution)",
      ],
      "Deakin University": ["Burwood", "Geelong", "Melbourne", "Warrnambool"],
      "Edith Cowan University": ["Bunbury", "Joondalup", "Mount Lawley"],
      "Federation University Australia": [
        "Ballarat",
        "Berwick",
        "Churchill",
        "Horsham",
        "Stawell",
      ],
      "Flinders University": ["Adelaide"],
      "Griffith University": [
        "Brisbane",
        "Gold Coast",
        "Logan",
        "Mt Gravatt",
        "Nathan",
        "South Bank",
      ],
      "James Cook University": ["Brisbane", "Cairns", "Townsville"],
      "La Trobe University": ["Albury-Wodonga", "Bendigo", "Melbourne"],
      "Macquarie University": ["North Ryde"],
      "Monash University": ["Berwick", "Clayton", "Parkville", "Peninsula"],
      "Murdoch University": ["Perth"],
      "Queensland University of Technology": ["Brisbane"],
      "RMIT University": ["Bundoora West", "City", "Brunswick"],
      "Southern Cross University": ["Coffs Harbour", "Gold Coast", "Lismore"],
      "Swinburne University of Technology": ["Hawthorn", "Wantirna", "Croydon"],
      "Torrens University Australia": [
        "Adelaide",
        "Brisbane",
        "Melbourne",
        "Sydney",
      ],
      "University of Adelaide": ["Adelaide"],
      "University of Canberra": ["Bruce"],
      "University of Melbourne": [
        "Parkville",
        "Southbank",
        "Burnley",
        "Creswick",
        "Dookie",
        "Shepparton",
        "Werribee",
      ],
      "University of New England": ["Armidale"],
      "University of New South Wales": [
        "Kensington",
        "Paddington",
        "Sydney CBD",
        "Canberra",
      ],
      "University of Newcastle": [
        "Callaghan",
        "Central Coast",
        "Newcastle City",
        "Port Macquarie",
      ],
      "University of Notre Dame Australia": ["Broome", "Fremantle", "Sydney"],
      "University of Queensland": [
        "Dutton Park",
        "Gatton",
        "Herston",
        "St Lucia",
      ],
      "University of South Australia": ["Adelaide"],
      "University of Southern Queensland": [
        "Ipswich",
        "Springfield",
        "Toowoomba",
      ],
      "University of Sydney": [
        "Camperdown/Darlington",
        "Camden",
        "Mallet",
        "Surrey Hills",
      ],
      "University of Tasmania": ["Hobart", "Launceston", "Cradle Coast"],
      "University of Technology Sydney": ["Ultimo", "Haymarket", "Broadway"],
      "University of the Sunshine Coast": ["Sippy Downs"],
      "University of Western Australia": ["Crawley"],
      "University of Wollongong": [
        "Wollongong",
        "Shoalhaven",
        "Southern Sydney",
      ],
      "Victoria University": [
        "Footscray",
        "Melbourne",
        "St Albans",
        "Sunshine",
      ],
      "Western Sydney University": [
        "Parramatta City Campus",
        "Liverpool City Campus",
        "Campbelltown Campus",
        "Bankstown City Campus",
        "Parramatta South Campus",
        "Hawkesburry Campus",
        "Westmead Campus",
        "Maldhan Ngurr Ngurra Lithgow Transformation Hub",
        "Penrith Campus",
        "Nirimba Campus",
        "Sydney City Campus",
        "Sydney Olympic Park Campus",
      ],
    };
    setCampus(campuses[university] || []);
  }, [campusOpt]);

  useEffect(() => {
    const faculties: { [key: string]: string[] } = {
      "Australian Catholic University": [
        "Faculty of Education and Arts",
        "Faculty of Health Sciences",
        "Faculty of Law and Business",
        "Faculty of Theology and Philosophy",
      ],
      "Australian National University": [
        "College of Arts and Social Sciences",
        "College of Asia and the Pacific",
        "College of Business and Economics",
        "College of Engineering and Computer Science",
        "College of Health and Medicine",
        "College of Law",
        "College of Science",
      ],
      "Bond University": [
        "Faculty of Society & Design",
        "Faculty of Health Sciences & Medicine",
        "Bond Business School",
        "Faculty of Law",
      ],
      "Charles Darwin University": [
        "College of Business",
        "College of Health Sciences & Medicine",
        "College of Law",
        "College of Society & Design",
      ],
      "Charles Sturt University": [
        "Faculty of Arts and Education",
        "Faculty of Business, Justice and Behavioural Sciences",
        "Faculty of Science and Health",
      ],
      "Central Queensland University": [
        "Allied Health",
        "Business & Accounting",
        "Creative, Performing & Visual Arts",
        "Digital Media, Communication & Arts",
        "Education, Teaching & Childcare",
        "Engineering, Built Environment & Aviation",
        "Information Systems & Technology",
        "Law, Criminology & Justice",
        "Nursing & Paramedicine",
        "Psychology, Social Work & Community Services",
        "Safety Sciences",
        "Science, Environment & Agriculture",
        "Service Industries",
      ],
      "Curtin University": [
        "Faculty of Business and Law",
        "Faculty of Health Sciences",
        "Faculty of Humanities",
        "Faculty of Science and Engineering",
      ],
      "Deakin University": [
        "Faculty of Arts and Education",
        "Faculty of Business and Law",
        "Faculty of Health",
        "Faculty of Science, Engineering and Built Environment",
      ],
      "Edith Cowan University": [
        "Arts & Humanities",
        "Business & Law",
        "Engineering",
        "Education",
        "Medical & Health Sciences",
        "Nursing & Midwifery",
        "Science",
        "Western Australian Academy of Performing Arts",
      ],
      "Federation University Australia": [
        "Agriculture and Environmental Science",
        "Business",
        "Creative Arts",
        "Education",
        "Health and Medical Sciences",
        "Humanities and Communication",
        "Law and Justice",
        "Engineering",
        "Nursing and Midwifery",
        "Psychology and Wellbeing",
        "Mathematics, Physics and Computing",
        "Surveying and Built Environment",
      ],
      "Flinders University": [
        "College of Arts & Humanities",
        "College of Education, Psychology and Social Work",
        "College of Humanities, Arts and Social Sciences",
        "College of Medicine and Public Health",
        "College of Nursing and Health Sciences",
        "College of Science and Engineering",
      ],
      "Griffith University": [
        "Arts, Education and Law",
        "Griffith Business School",
        "Griffith Health",
        "Griffith Sciences",
      ],
      "James Cook University": [
        "Arts, Society and Education",
        "Business, Law and Governance",
        "Healthcare Sciences",
        "Medicine and Dentistry",
        "Public Health, Medical and Veterinary Sciences",
        "Science and Engineering",
      ],
      "La Trobe University": [
        "Agriculture, Biomedicine & Environment",
        "Allied Health, Human Services & Sport",
        "Business School",
        "Computing, Engineering & Mathematical Science",
        "Education",
        "Humanities & Social Science",
        "Law School",
        "Nursing & Midwifery",
        "Psychology & Public Health",
        "Rural Health School",
      ],
      "Macquarie University": [
        "Faculty of Arts",
        "Faculty of Science and Engineering",
        "Faculty of Medicine, Health and Human Sciences",
        "Faculty of Business and Economics",
      ],
      "Monash University": [
        "Faculty of Art, Design & Architecture",
        "Faculty of Arts",
        "Faculty of Business & Economics",
        "Faculty of Education",
        "Faculty of Engineering",
        "Faculty of Information Technology",
        "Faculty of Law",
        "Faculty of Medicine, Nursing & Health Sciences",
        "Faculty of Pharmacy & Pharmaceutical Sciences",
        "Faculty of Science",
      ],
      "Murdoch University": [
        "Business",
        "Environmental and Life Sciences",
        "Health and Education",
        "Law, Arts and Social Sciences",
      ],
      "Queensland University of Technology": [
        "Faculty of Business and Law",
        "Faculty of Creative Industries, Education and Social Justice",
        "Faculty of Engineering",
        "Faculty of Health",
        "Faculty of Science and Technology",
        "Faculty of Education",
        "Faculty of Research",
      ],
      "RMIT University": [
        "College of Accounting, Information Systems & Supply Chains",
        "College of Architecture and Urban Design",
        "College of Art",
        "College of Business & Law",
        "College of Computing Technologies",
        "College of Design",
        "College of Economics, Finance & Marketing",
        "College of Education",
        "College of Engineering",
        "College of Fashion & textiles",
        "College of Health & Biomedical Sciences",
        "College of Global, Urban & Social Studies",
        "College of Management",
        "College of Media & Communication",
        "College of Property, Construction & Project Management",
        "College of Science",
      ],
      "Southern Cross University": [
        "Business, Law and Arts",
        "Science and Engineering",
        "Health",
        "Gnibi College of Indigenous Australian Peoples",
        "SCU College",
      ],
      "Swinburne University of Technology": [
        "Faculty of Business, Law and Entrepreneurship",
        "Faculty of Design and Architecture",
        "Faculty of Health Sciences",
        "Faculty of Engineering",
        "Faculty of Science, Computing and Engineering Technology",
        "Faculty of Social Sciences, Media, Film and Education",
      ],
      "Torrens University Australia": ["Business", "Design", "Education"],
      "University of Adelaide": [
        "Arts, Business, Law and Economics",
        "Health and Medical Sciences",
        "Sciences, Engineering and Technology",
      ],
      "University of Canberra": [
        "Arts and Design",
        "Business, Government and Law",
        "Education",
        "Health",
        "Science and Technology",
      ],
      "University of Melbourne": [
        "Faculty of Architecture, Building & Planning",
        "Faculty of Arts",
        "Faculty of Business & Economics",
        "Faculty of Education",
        "Faculty of Engineering & Information Technology",
        "Faculty of Fine Arts & Music",
        "Faculty of Law",
        "Faculty of Medicine, Dentistry & Health Sciences",
        "Faculty of Science",
      ],
      "University of New England": [
        "Faculty of Humanities, Arts, Social Sciences and Education",
        "Faculty of Medicine and Health",
        "Faculty of Science, Agriculture, Business and Law",
      ],
      "University of New South Wales": [
        "Faculty of Arts, Design & Architecture",
        "Faculty of Business School",
        "Faculty o fEngineering",
        "Faculty of Law & Justice",
        "Faculty of Medicine & Health",
        "Faculty of Science",
        "Faculty of UNSW Canberra at ADFA",
        "Faculty of Postgraduate Research",
      ],
      "University of Newcastle": [
        "Business and Law",
        "Engineering, Science & Environment",
        "Health, Medicine & Wellbeing",
        "Human & Social Futures",
      ],
      "University of Notre Dame Australia": [
        "School of Arts, Sciences, Law and Business",
        "School of Medicine, Nursing, Midwifery and Health Sciences",
        "School of Education and Philosophy & Theology",
      ],
      "University of Queensland": [
        "Faculty of Business, Economics & Law",
        "Faculty of Engineering, Architecture & Information Technology",
        "Faculty of Health & Behavioural Sciences",
        "Faculty of Humanities, Arts & Social Sciences",
        "Faculty of Medicine",
        "Faculty of Science",
      ],
      "University of South Australia": [
        "UniSA Allied Health & Human Performance",
        "UniSA Business",
        "UniSA Clinical & Health Sciences",
        "UniSA Creative",
        "UniSA Education Futures",
        "UniSA Justice & Society",
        "UniSA STEM",
      ],
      "University of Southern Queensland": [
        "Faculty of Agriculture and Environmental Science",
        "Faculty of Business",
        "Faculty of Creative Arts",
        "Faculty of Education",
        "Faculty of Health and Medical Sciences",
        "Faculty of Humanities and Communication",
        "Faculty of Law and Justice",
        "Faculty of Engineering",
        "Faculty of Nursing and Midwifery",
        "Faculty of Psychology and Wellbeing",
        "Faculty of Mathematics, Physics and Computing",
        "Faculty of Surveying and Built Environment",
      ],
      "University of Sydney": [
        "Faculty of Arts & Social Sciences",
        "Faculty of Engineering",
        "Faculty of Medicine & Health",
        "Faculty of Science",
        "Faculty of Architecture, Design & Planning",
        "Faculty of Business School",
        "Faculty of Music",
        "Faculty of Law",
      ],
      "University of Tasmania": [
        "College of Business and Economics",
        "College of Arts, Law and Education",
        "College of Health and Medicine",
        "College of Sciences and Engineering",
      ],
      "University of Technology Sydney": [
        "Faculty of Arts & Social Sciences",
        "Faculty of Business School",
        "Faculty of Design, Architecture & Building",
        "Faculty of Engineering & Information Technology",
        "Faculty of Health",
        "Faculty of Graduate Research School",
        "Faculty of Graduate School of Health",
        "Faculty of Law",
        "Faculty of Science",
        "TD School",
      ],
      "University of the Sunshine Coast": [
        "School of Science, Technology and Engineering",
        "School of Business and Creative Industries",
        "School of Education and Tertiary Access",
        "School of Health",
        "School of Law and Society",
      ],
      "University of Western Australia": [
        "Faculty of Agriculture and Environmental Science",
        "Faculty of Business",
        "Faculty of Creative Arts",
        "Faculty of Education",
        "Faculty of Health and Medical Sciences",
        "Faculty of Humanities and Communication",
        "Faculty of Law and Justice",
        "Faculty of Engineering",
        "Faculty of Nursing and Midwifery",
        "Faculty of Psychology and Wellbeing",
        "Faculty of Mathematics, Physics and Computing",
        "Faculty of Surveying and Built Environment",
      ],
      "University of Wollongong": [
        "Faculty of Arts, Social Sciences and Humanities",
        "Faculty of Business and Law",
        "Faculty of Engineering and Information Sciences",
        "Faculty of Science, Medicine and Health",
      ],
      "Victoria University": [
        "College of Arts, humanities & community services",
        "College of Business",
        "College of Computers, IT & Cyber Security",
        "College of Education & Early Childhood",
        "College of Engineering, Science & Manufacturing",
        "College of English & Preparation Programs",
        "College of Health, Biomedicine & Nursing",
        "College of Hospitality, Tourism & Events",
        "College of Law, Justice & Legal Practice",
        "College of Sports, Exercise & Fitness",
        "College of Sustainability",
        "College of Trades, Hair, Beauty & Massage",
      ],
      "Western Sydney University": [
        "School of Business",
        "School of Computer, Data & Mathematical Sciences",
        "School of Education",
        "School of Engineering, Design & Built Environment",
        "School of Health Sciences",
        "School of Humanities & Communication Arts",
        "School of Law",
        "School of Medicine",
        "School of Nursing & Midwifery",
        "School of Psychology",
        "School of Science",
        "School of Social Science",
        "Graduate Research School",
      ],
    };

    setFaculty(faculties[university] || []);
  }, [university]);

  return (
    <div>
      <Header />
      <div className="grid-cols-2 gap-5 sm:grid">
        <div>
          <form
            onSubmit={() => {
              navigate("/interest");
            }}
            className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-5 py-32 sm:py-48 lg:py-56"
          >
            <div className="flex flex-col space-y-2">
              <div>
                <GiGraduateCap className="h-10 w-10 text-[#3B4FE6]" />
              </div>
              <div>
                <p className="text-lg font-bold text-black">
                  Your Uni and Faculty
                </p>
              </div>
              <div>
                <p className="text-xs text-black sm:text-sm">
                  Which uni and faculty are you in?
                </p>
              </div>
            </div>
            <div>
              <Label
                htmlFor="state"
                value="State"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="state"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                <option value="VIC">Victoria</option>
                <option value="NSW">New South Wales</option>
                <option value="SA">South Australia</option>
                <option value="QLD">Queensland</option>
                <option value="ACT">Australian Capital Territory</option>
                <option value="WA">Western Australia</option>
                <option value="TAS">Tasmania</option>
                <option value="NT">Northern Territory</option>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="uni"
                value="University"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="uni"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                <option value="" disabled>
                  Select you university
                </option>
                <option value="Australian Catholic University">
                  Australian Catholic University
                </option>
                <option value="Australian National University">
                  Australian National University
                </option>
                <option value="Bond University">Bond University</option>

                <option value="Charles Darwin University">
                  Charles Darwin University
                </option>

                <option value="Charles Sturt University">
                  Charles Sturt University
                </option>

                <option value="Central Queensland University">
                  Central Queensland University
                </option>

                <option value="Curtin University">Curtin University</option>

                <option value="Deakin University">Deakin University</option>
                <option value="Edith Cowan University">
                  Edith Cowan University
                </option>
                <option value="Federation University Australia">
                  Federation University Australia
                </option>
                <option value="Flinders University">Flinders University</option>
                <option value="Griffith University">Griffith University</option>
                <option value="James Cook University">
                  James Cook University
                </option>
                <option value="La Trobe University">La Trobe University</option>
                <option value="Macquarie University">
                  Macquarie University
                </option>
                <option value="Monash University">Monash University</option>
                <option value="Murdoch University">Murdoch University</option>
                <option value="Queensland University of Technology">
                  Queensland University of Technology
                </option>
                <option value="RMIT University">RMIT University</option>
                <option value="Southern Cross University">
                  Southern Cross University
                </option>
                <option value="Swinburne University of Technology">
                  Swinburne University of Technology
                </option>
                <option value="Torrens University Australia">
                  Torrens University Australia
                </option>
                <option value="University of Adelaide">
                  University of Adelaide
                </option>
                <option value="University of Canberra">
                  University of Canberra
                </option>
                <option value="University of Melbourne">
                  University of Melbourne
                </option>
                <option value="University of New England">
                  University of New England
                </option>
                <option value="University of New South Wales">
                  University of New South Wales
                </option>
                <option value="University of Newcastle">
                  University of Newcastle
                </option>
                <option value="University of Notre Dame Australia">
                  University of Notre Dame Australia
                </option>
                <option value="University of Queensland">
                  University of Queensland
                </option>
                <option value="University of South Australia">
                  University of South Australia
                </option>
                <option value="University of Southern Queensland">
                  University of Southern Queensland
                </option>
                <option value="University of Sydney">
                  University of Sydney
                </option>
                <option value="University of Tasmania">
                  University of Tasmania
                </option>
                <option value="University of Technology Sydney">
                  University of Technology Sydney
                </option>
                <option value="University of the Sunshine Coast">
                  University of the Sunshine Coast
                </option>
                <option value="University of Western Australia">
                  University of Western Australia
                </option>
                <option value="University of Wollongong">
                  University of Wollongong
                </option>
                <option value="Victoria University">Victoria University</option>
                <option value="Western Sydney University">
                  Western Sydney University
                </option>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="campus"
                value="Campus"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="campus"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                {campusOpt.map((campus) => (
                  <option key={campus} value={campus}>
                    {campus}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label
                htmlFor="faculty"
                value="Faculty"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="faculty"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                {facultyOpt.map((faculty) => (
                  <option key={faculty} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </Select>
            </div>
            <Button
              type="submit"
              className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
            >
              Continue
            </Button>
          </form>
        </div>
        <div className="hidden sm:block">
          <img
            src="./src/media/uni.jpg"
            alt="University"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
