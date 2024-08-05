/* .js files add interaction to your website */

/*Personalize It Feature*/
var displayName = document.getElementById("reflect");
var myButton = document.getElementById("myButton");

if (myButton) {
  myButton.addEventListener("click", generateScript);
}

function generateScript() {
  var text = document.getElementById("myText").value;
  var learn = document.getElementById("myText2").value;
  displayName.innerHTML = "My name is " + text + " and I learned that " + learn + ".";
}

/*Fact Generator Feature*/
var factList = [
  "Black people make up 4.3% of the Canadian population and are diverse, speaking a mix of languages and identifying with a variety of cultures and religions.",

  "Almost 60% of Canada’s Black population is born abroad.",

  "Racism remains a major issue, with 58% of Black people aged 15 years or older reporting discrimination. Further, 50% of Black employees reported that they have experienced discrimination in promotional processes." ,


  "Black Canadians born in this country earn 76 cents for every dollar of what Canadian-born non-racialized workers do." ,

]

console.log(factList); 

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count== factList.length){
    count = 0;
  }
}

var factHis = [
  "1604: “Mathieu Da Costa, a multilingual interpreter, became the first Black person on record to land in Canadian territory." ,

  "1628: “Olivier Le Jeune was the first Black person on record to live in New France (Canada). He was an enslaved African taken from his country when he was a young child and his name was from the priest who bought him." ,
  
  "1628: “Olivier Le Jeune was the first Black person on record to live in New France (Canada). He was an enslaved African taken from his country when he was a young child and his name was from the priest who bought him." ,

  "1689: “Because of labour shortages, King Louis XIV approved the colonists enslaving both Africans and Pawnee Indigenous people in New France. Continuing this slavery was a specific term of the Articles of Capitulation that gave New France to Britain in 1760." ,

 "1767: “While many Black people came to Canada as slaves with white settlers, by 1767 there were 104 free Black persons living in Nova Scotia, New Brunswick and Prince Edward Island." ,

  "1775 to 1783: “Freedom from slavery was offered to enslaved Africans who agreed to fight for the British during the American War of Independence. As a result, 10 percent of the United Empire Loyalists that came to Canada after the war were estimated to be Black. They faced discrimination in Canada, causing some to return to the United States, the country where they had been enslaved, or to resettle in Sierra Leone, on the African continent. Some Black war veterans had their land grant processes slowed down, or received much smaller plots of land, or even no land was awarded despite earlier pledges." ,

  "1793: “The plight of Chloe Cooley, an enslaved African woman who was sold to a new owner in the United States, inspired anti-slavery activists in Canada and John Graves Simcoe, Lieutenant Governor of Upper Canada to introduce The Act to prevent the further Introduction of Slaves and to limit the Term of Contracts for Servitude that prohibited bringing new slaves into Ontario. Even though the Act did not free the enslaved people who were already in Ontario, Canada became a destination for slaves seeking freedom and strengthened the abolitionist movement, although slavery continued in Canada for another 40 years." ,

  "1800-1865: “Some 30,000 Black people came to Canada through the Underground Railroad." ,

  "1815: “Black veterans of the War of 1812, some of whom were free men, and some of whom were slaves, were given land grants in Nova Scotia and Ontario, although many of these lands were not suitable for agriculture." ,

  "1833: “Slavery was abolished in Canada, with the Act on the Abolition of Slavery in the British Empire." ,

  "Early 1850s: “Black people in Canada supported the global anti-slavery movement by founding two abolitionist newspapers: The Voice of the Fugitive (1851) and The Provincial Freeman (1853). The second was founded by Mary Ann Shadd, the first Black woman to own and publish a newspaper in North America." ,

  "1858: “Some 800 free Black people moved to British Columbia from California to escape racial discrimination and oppression, even though they faced racism in Canada." ,

  "1879: “Many Black families started to move from Oklahoma to Alberta for similar reasons, even though they faced opposition to their immigration." ,

  "1910: “The Immigration Act prohibited immigrants who were declared “unsuited to the climate or requirements of Canada,” effectively blocking most non-white immigrants." ,

  "1946: “Halifax businesswoman Viola Desmond was arrested for refusing to move from her seat in the “whites-only” section of a movie theatre." ,

  "1962: “The City of Halifax demolished Africville, the historic Black neighbourhood of Halifax." ,

  "1982: “The Canadian Charter of Rights and Freedom, became part of Canada’s Constitution, adding equality as a constitutionally guaranteed right for all Canadians. The Charter provides legal protection against discrimination based on race, national or ethnic origin, colour, religion, sex, age, and mental or physical disability." ,

  "1989: “The report of the Royal Commission on the Donald Marshall Jr. Prosecution highlighted the nature of systemic racial discrimination towards Indigenous Peoples and Black people in the criminal justice system in Nova Scotia." ,

  "1997: “The Supreme Court of Canada confirmed in the case of R. v. S. (R.D.) ([1997] 3 S.C.R. 484) that the comments of a Black judge about her experience of racism did not make her biased in a criminal case involving a Black youth." ,

  "2005: “The Right Honourable Michaëlle Jean became Canada’s first Black Governor General." ,

  "2010: “Mayor Peter Kelly of Halifax apologized on behalf of municipal, provincial and federal governments, for demolishment of Africville in 1962." ,

  "2010: “The Government of Nova Scotia issued an apology and a posthumous pardon to Viola Desmond." ,

  "2013: “The United Nations declared 2015-2024 as the International Decade for People of African Descent." ,

  "2014: “Impact of Race and Culture Assessments were developed in Nova Scotia to encourage consideration of the contribution of anti-Black racism and systemic discrimination to the reasons a Black accused appears before a court." ,

  "2014: “Lincoln Alexander Day became a national day of recognition on January 21. Alexander is celebrated for being the first Black Member of Parliament and Ontario’s first Black Lieutenant-Governor." ,

  "2016: “At the invitation of the Government of Canada, the Working Group of Experts on People of African Descent visited Canada on a mission to examine the situation of Black persons in this country. At the conclusion of their mission, the three-member United Nations delegation submitted the 2017 Report of the Working Group of Experts on People of African Descent on its mission to Canada, presenting recommendations to assist Canada in its efforts to combat all forms of racism, racial discrimination, xenophobia, Afrophobia and related intolerance." ,

  "2018: “The Government of Canada formally endorsed the United Nations’ International Decade for People of African Descent. This represented an important commitment to taking action on the issues that affect people of African descent in Canada, including improving research and data collection, addressing mental health challenges, systemic discrimination and the overrepresentation of Black people in the criminal justice system, including as victims of crime." ,

  "2021: “Court of Appeal cases in both Nova Scotia (R v Anderson, 2021 NSCA 62) and Ontario (R v Morris, 2021 ONCA 680) recognized the reality of anti-Black racism and systemic discrimination in the criminal justice system and its impact on Black people in Canada." ,

  "2023: “The Halifax Declaration for the Eradication of Racial Discrimination was issued following the National Black Canadians Summit in 2022. The Summit is a flagship program of the Michaëlle Jean Foundation." ,

]

console.log(factHis); 

var his = document.getElementById("history");
var myClick = document.getElementById("myButton2");
var number = 0;

if (myClick) {
  myButton2.addEventListener("click", displayHistory);
}

function displayHistory() {
  his.innerHTML = factHis[count];
  count++;
  if (count== factHis.length){
    count = 0;
  }
}
