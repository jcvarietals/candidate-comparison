// ============================================================
// ATTORNEY GENERAL — LONG-FORM POSITION DESCRIPTIONS
// text_long field for popup detail view.
// Claude Code: merge text_long into matching AG_POSITIONS
// objects. Includes all 3 candidates.
//
// The AG is California's chief law enforcement officer,
// leads the DOJ's 5,000+ employees and $1.2B budget,
// and has jurisdiction over criminal prosecution,
// civil rights, consumer protection, antitrust,
// environmental enforcement, and federal-policy litigation.
// ============================================================

export const AG_POSITIONS_LONG = {

  // ============================================================
  // ROB BONTA (D — Progressive)
  // Incumbent AG since 2021; elected 2022; first Filipino American AG
  // ============================================================
  bonta: {
    ag_trump: {
      text_long: `Bonta has filed or joined more than 70 lawsuits against the Trump administration since Trump's return to office in January 2025 — a pace of federal litigation that has no precedent in the history of the California AG's office. The cases span immigration enforcement, environmental regulation, education funding, healthcare access, federal grant withdrawals, and constitutional rights. He views this as the core function of his office in the current political moment: California is the country's most powerful blue state, and its AG is the most capable single actor in the country for mounting legal resistance to federal overreach.

      He has framed his re-election campaign explicitly around continuity: the cases he has filed are pending in federal courts across the country, and a new AG would need months to get up to speed on the legal strategies and relationships that these cases require. He has beaten Trump in court multiple times — on immigrant protections, on the ACA, on environmental rules — and argues that this record of winning is the most important credential he brings to the campaign. His critics, including Republican challenger Michael Gates, argue that this federal litigation focus has come at the expense of California's traditional AG functions and that crime, consumer protection, and local law enforcement have suffered as a result.`,
      citations: ["ag1", "ag3", "ag5"],
    },
    ag_crime: {
      text_long: `Bonta's crime record as AG is more substantive than his critics acknowledge. His office has been at the center of California's response to the fentanyl crisis — dismantling trafficking networks, prosecuting distribution rings, and coordinating with local law enforcement on supply chain enforcement. He has also led significant actions against organized retail crime, coordinating statewide investigations that have resulted in dozens of arrests of sophisticated theft operations. His office's gun trafficking enforcement has removed thousands of illegal firearms from California communities.

      The critique from Gates — that Bonta has prioritized federal litigation over crime fighting — has some political traction because the federal cases are high-profile and crime remains a top voter concern. Bonta counters that the two functions are not in conflict: his office has 5,000+ employees and a $1.2 billion budget, with separate divisions handling federal litigation and state criminal enforcement. He also argues that affordability enforcement — suing price gougers, holding pharmaceutical companies accountable, investigating insurance fraud — is crime enforcement, even if it doesn't fit the traditional prosecutor model.`,
      citations: ["ag3", "ag5"],
    },
    ag_housing: {
      text_long: `Bonta's Housing Justice Team — formerly the Housing Strike Force — is one of the most active AG housing enforcement programs in the country. He has used it to compel cities that violated state housing law to approve projects they had illegally rejected, to investigate cities that adopted zoning policies designed to exclude affordable housing, and to defend state housing streamlining laws against constitutional challenges from local governments. He co-authored Assembly Bill 1506, which gave the AG investigative authority over police shootings, but it is his housing enforcement record that is most directly relevant to California's housing crisis.

      His most significant housing case was his predecessor Xavier Becerra's 2020 lawsuit against San Mateo for violating the Housing Accountability Act — Bonta inherited and built on that precedent, using it to enforce compliance from dozens of California cities. He views housing enforcement as civil rights enforcement: when cities use exclusionary zoning to keep lower-income families and communities of color out, the AG has both the authority and the obligation to act.`,
      citations: ["ag1", "ag2"],
    },
    ag_guns: {
      text_long: `Gun safety enforcement is one of Bonta's signature issues, reflecting both his personal background — his parents participated in the civil rights movement and United Farm Workers organizing, where gun violence was a constant threat — and his political roots in the East Bay, where gun violence has devastated communities for decades. He has consistently been at the forefront of enforcing California's strict gun laws: ghost gun regulations, assault weapon restrictions, large-capacity magazine bans, and red flag law enforcement. He has praised San Diego City Attorney Mara Elliott for aggressively using red flag laws and called on other jurisdictions to follow her lead.

      He has also defended California's gun laws against Second Amendment challenges that have proliferated since the Supreme Court's 2022 Bruen decision, which changed the constitutional standard for evaluating gun regulations. These cases are among the most consequential in the AG's portfolio, with implications for not just California law but national gun regulation. He has formed multistate coalitions to coordinate legal strategy across Democratic states, recognizing that the constitutional questions being litigated in California courts will have national implications.`,
      citations: ["ag3", "ag5"],
    },
    ag_consumer: {
      text_long: `Consumer protection is where Bonta has the most extensive record of specific, concrete actions. His antitrust lawsuit against Amazon — filed in 2022 and successfully surviving a dismissal motion in 2023 — alleges that Amazon's pricing policies have inflated prices for California consumers across the entire e-commerce ecosystem. He joined the DOJ's antitrust action against Google's advertising technology practices. He has taken action against pharmaceutical companies for opioid crisis contributions, secured settlements against major agricultural price-fixing schemes, and run grant programs to curb youth tobacco and vaping sales that have distributed tens of millions of dollars to local enforcement agencies.

      He has an open investigation into the proposed Paramount-Warner media merger — the largest potential media consolidation since the AT&T-Time Warner deal — that he has been urged by artists, journalists, and congressional Democrats to challenge or block. The merger would combine two of the largest remaining independent content studios, and Bonta's investigation is focused on whether the combined entity would harm workers, consumers, and the creative industries that are central to California's economy.`,
      citations: ["ag5", "ag3"],
    },
    ag_immigration: {
      text_long: `Bonta has been the most aggressive state-level defender of California's sanctuary law and immigrant communities during Trump's second term. He has filed suits challenging ICE raids that violated state law, defended local governments that were threatened with funding cuts for maintaining sanctuary policies, and led multistate coalitions asserting that federal immigration enforcement must comply with constitutional due process requirements. He views sanctuary enforcement as a law enforcement effectiveness issue as well as a civil rights issue: communities where immigrants trust that local police will not hand them over to ICE are more likely to report crimes, cooperate with investigations, and provide information that makes everyone safer.

      He has also defended Dreamers — young people brought to the country as children who have grown up as Californians — against federal actions to terminate the Deferred Action for Childhood Arrivals program. He argues that terminating DACA would be both legally wrong and morally unjustifiable, and has committed to continuing those cases regardless of how the federal litigation evolves.`,
      citations: ["ag1", "ag2", "ag3"],
    },
    ag_environment: {
      text_long: `Environmental enforcement is one of Bonta's most active areas. He has joined multistate coalitions challenging federal rollbacks of EPA regulations, defended California's authority to set its own vehicle emissions standards (which the Trump administration has repeatedly tried to revoke), and used California's unique statutory authority to sue oil companies for deceptive practices. His civil rights investigation into the emergency response to the 2025 Eaton Fire — announced in February 2026 — is examining whether race, age, or disability discrimination influenced evacuation warnings or other aspects of the response, a novel application of civil rights law to disaster response.

      He has also taken on environmental justice cases — prosecuting polluters in communities disproportionately affected by industrial pollution, particularly in the San Joaquin Valley and in communities of color near major highways and industrial facilities. He views environmental enforcement as inseparable from civil rights: the communities bearing the greatest burden of environmental harm are disproportionately communities of color and low-income communities, and the AG has both the authority and the obligation to protect them.`,
      citations: ["ag1", "ag5"],
    },
    ag_reproductive: {
      text_long: `After the Supreme Court's 2022 Dobbs decision eliminating federal abortion rights, Bonta moved quickly to establish California as a sanctuary for reproductive healthcare. His office created legal defense funds for out-of-state patients traveling to California for abortions, launched enforcement actions against pregnancy crisis centers engaged in deceptive practices, and participated in multistate litigation defending access to mifepristone and other reproductive healthcare. He has also defended California providers against threats of prosecution from states that have criminalized abortion, arguing that states cannot reach across their borders to punish healthcare that is legal where it is provided.

      He views reproductive rights as inseparable from his broader civil rights agenda: the freedom to make decisions about one's own body is a fundamental liberty, and when states and the federal government try to restrict that liberty, the California AG has both the legal standing and the moral obligation to push back. He has been endorsed by Planned Parenthood and NARAL California, which view his reproductive rights record as among the strongest in the country.`,
      citations: ["ag1", "ag5"],
    },
    ag_ai: {
      text_long: `Bonta's AI and tech enforcement record is centered on antitrust — his lawsuits against Amazon and Google represent California's most significant interventions in the technology sector's market concentration. He has expressed concern about AI-generated misinformation and has been urged by artists and entertainment industry unions to scrutinize how the Paramount-Warner merger would affect AI-generated content and the workers whose livelihoods depend on traditional content creation.

      He has also been active on data privacy enforcement, defending California's Consumer Privacy Act against federal preemption efforts and bringing enforcement actions against companies that have violated California's strict privacy rules. His approach to AI governance is regulation-and-enforcement-first: use existing antitrust, consumer protection, and privacy law to address AI's harms before creating new AI-specific regulatory frameworks. He is skeptical of the argument that AI is too new and too complex for existing law to apply, viewing it as a version of the "move fast and break things" ethos that has previously been used to exempt tech companies from regulations that apply to other industries.`,
      citations: ["ag5"],
    },
    ag_civil: {
      text_long: `Bonta's civil rights credentials are foundational to his identity as a public official. His parents were civil rights activists; he is the first Filipino American California AG; and he has made police accountability a priority of his tenure in ways that have drawn both praise and criticism. He co-authored AB 1506, which gives the AG investigative authority over police shootings of unarmed civilians — one of the most consequential police accountability laws passed in any state in the post-George Floyd era. His office has investigated dozens of officer-involved shootings since the law took effect, with several investigations leading to charging decisions.

      He has also enforced California's police transparency laws, requiring law enforcement agencies to release information about officer misconduct that they had previously kept secret. He investigated the Altadena fire evacuation response for potential civil rights violations — a signal that he views civil rights enforcement as extending beyond traditional police misconduct into all forms of government action that may be discriminatory. His critics argue that his police accountability investigations have been too slow and that his office lacks the capacity to handle the volume of cases the law requires.`,
      citations: ["ag1", "ag5"],
    },
  },

  // ============================================================
  // MICHAEL GATES (R — Conservative)
  // Former Huntington Beach City Attorney; former Trump DOJ official
  // ============================================================
  gates: {
    ag_trump: {
      text_long: `Gates's relationship with the Trump administration is the defining feature of his candidacy — and the sharpest contrast with Bonta. He served as a deputy assistant attorney general in Trump's DOJ Civil Rights Division from January to November 2025, leaving to return to Huntington Beach's city attorney office and launch his gubernatorial campaign. He is the only candidate in the race with direct recent experience inside the federal DOJ, which he argues gives him the relationships and knowledge needed to work collaboratively with the federal government rather than spending the AG's time and resources fighting it in court.

      His position is that Bonta's 70+ federal lawsuits represent a fundamental misuse of the AG's office: the AG is California's chief law enforcement officer, not the chief political opponent of the federal government. He would pursue cooperative federalism — identifying areas of genuine legal conflict and fighting those, while cooperating with the federal government on the many areas where state and federal interests align, including crime, fentanyl, and border security. He argues that the adversarial posture damages California's relationships with federal law enforcement agencies that California communities depend on for crime fighting and disaster response.`,
      citations: ["ag3", "ag8", "ag10"],
    },
    ag_crime: {
      text_long: `Crime is the centerpiece of Gates's campaign, and where he believes Bonta has been most delinquent. As Huntington Beach city attorney, he built a reputation for aggressive prosecution of criminal cases that came through city ordinance enforcement — encampment clearances, quality-of-life crime enforcement, gang injunctions — and for challenging what he called the lenient criminal justice policies emanating from Sacramento. He would refocus the AG's office on its traditional law enforcement functions: violent crime, gang enforcement, repeat offenders, and the fentanyl crisis.

      He argues that Bonta's progressive criminal justice policies — including his advocacy for sentencing reform and his office's civil rights investigations of police agencies — have created a climate of hesitation in law enforcement that has contributed to rising crime. He would use the AG's authority to push back against district attorneys whose charging practices he views as too lenient, and would support law enforcement agencies that are pursuing aggressive enforcement against violent criminals. He is endorsed by a coalition of law enforcement associations that view him as the candidate most committed to traditional police priorities.`,
      citations: ["ag6", "ag9", "ag10"],
    },
    ag_housing: {
      text_long: `Gates fought state housing mandates as Huntington Beach city attorney — specifically, he filed lawsuits challenging laws that would have required Huntington Beach to approve more affordable housing as part of the state's Housing Element process. He argued that these laws violated local governments' constitutional authority over land use and that Sacramento had overstepped its role in mandating specific housing production targets for individual cities. He lost those cases in court, but they were central to his reputation as a defender of local control against state overreach.

      As AG, he would not use the office to enforce state housing mandates against cities — a complete reversal of Bonta's approach, which has made housing enforcement a priority. He would instead work with cities to find voluntary solutions to housing shortages, respecting their authority to make local land-use decisions. His critics argue that this approach would effectively nullify years of state housing law progress and allow cities to continue blocking affordable housing without consequence.`,
      citations: ["ag2", "ag6", "ag9"],
    },
    ag_guns: {
      text_long: `Gates would defend Second Amendment rights of law-abiding Californians — a sharp reversal from Bonta's record of aggressively enforcing California's strict gun laws. He is endorsed by the California Rifle and Pistol Association and views many of California's gun regulations as unconstitutional restrictions on rights that the Supreme Court has confirmed are fundamental. He would focus gun enforcement on trafficking, illegal weapons, and violent criminals who possess firearms illegally, rather than pursuing enforcement against legal gun owners who are in technical violation of California's uniquely restrictive gun laws.

      He would push back against California's assault weapon ban, large-capacity magazine restrictions, and other regulations that the Bruen decision has put in constitutional question, arguing that these laws violate the Second Amendment and should not be defended in litigation. His position reflects the national Republican alignment on guns: strong enforcement against criminal use, strong opposition to regulations on lawful ownership.`,
      citations: ["ag9", "ag7"],
    },
    ag_consumer: {
      text_long: `Gates's consumer protection philosophy is business-friendly: he supports defending taxpayers by recovering funds from fraud and waste in government programs, but is more skeptical of aggressive antitrust actions against large corporations that he views as legitimate market actors. He opposes what he characterizes as the use of consumer protection law to pursue political agendas — specifically Bonta's antitrust actions against Amazon and Google, which he views as politically motivated attacks on successful companies rather than genuine consumer harm remedies.

      He would focus consumer protection on fraud — scams targeting seniors, insurance fraud, contractor fraud, and identity theft — rather than on market structure and corporate pricing practices. His approach reflects a narrower view of the AG's consumer protection role: preventing deceptive practices and fraud rather than restructuring markets through antitrust enforcement.`,
      citations: ["ag9", "ag6"],
    },
    ag_immigration: {
      text_long: `Immigration enforcement is the area where Gates and Bonta are most directly opposed. Gates championed voter ID laws and opposed sanctuary policies as Huntington Beach city attorney, and his work at the Trump DOJ Civil Rights Division — which critics say was redirected away from traditional civil rights enforcement toward immigration enforcement assistance — puts him squarely in the cooperative-federalism camp. He would pursue stronger enforcement of immigration laws at the state level, working with federal ICE rather than against it.

      He would not defend California's sanctuary law in its current form, viewing it as an illegal obstruction of federal immigration enforcement. He would work with the federal government to identify and prosecute state actors who obstruct federal immigration enforcement, and would end the practice of California cities and counties receiving state funding while refusing to cooperate with ICE. His position is the most complete reversal of California's sanctuary posture of any statewide candidate in either race.`,
      citations: ["ag8", "ag6", "ag7"],
    },
    ag_environment: {
      text_long: `Gates's environmental enforcement position is more limited than Bonta's. He would protect coastal zones, wildlife habitats, water supplies, and high-fire-risk areas from what he calls reckless or unlawful development — but primarily through local land-use authority and existing property rights law rather than state environmental regulation. He is skeptical of expansive state environmental mandates and would not join multistate coalitions challenging federal rollbacks of EPA standards, viewing those efforts as political rather than legal.

      He would focus environmental enforcement on pollution that directly harms California residents — air quality violations, water contamination, toxic waste — rather than on climate-related enforcement or challenges to federal environmental policy rollbacks. His approach would significantly narrow the scope of California's environmental enforcement relative to Bonta's era, withdrawing from the multistate coalitions that have been the primary vehicle for state-level climate action.`,
      citations: ["ag9"],
    },
    ag_reproductive: {
      text_long: `Gates has not taken a specific position on abortion as an AG candidate, which reflects both the political risk of the issue and the reality that the California AG's role in reproductive rights enforcement is primarily defensive rather than affirmative. He is aligned with the California Republican Party, which generally opposes state-funded abortion expansion and the use of public resources to shield providers from other states' prosecutions. He would likely not prioritize using the AG's office to protect out-of-state patients traveling to California or to defend California providers against out-of-state prosecution threats.

      He has not called for rolling back California's abortion access laws, which are among the most protective in the country, but his silence on the issue and his Republican affiliation signal that his AG's office would be far less aggressive than Bonta's in defending and expanding reproductive rights. For California voters who view reproductive rights as a top priority, this is the area where the contrast between the two major candidates is most consequential.`,
      citations: ["ag7"],
    },
    ag_ai: {
      text_long: `Gates has not developed a detailed AI policy position, which is consistent with his campaign's focus on crime, immigration, and the contrast with Bonta's federal litigation approach. His general pro-business, anti-regulation disposition implies skepticism toward aggressive AI antitrust enforcement or regulatory mandates on the tech sector. He would not pursue the antitrust investigations against Amazon and Google that Bonta has prioritized, viewing those cases as politically motivated.

      His cybersecurity and technology background — as Huntington Beach city attorney, he dealt with municipal cybersecurity challenges and technology contracts — gives him some relevant experience with tech governance, but he has not articulated how he would approach the emerging AI governance questions that the AG's office will increasingly face. His likely approach would be to apply existing law — consumer protection, privacy, fraud prevention — to AI harms as they arise, without the proactive antitrust and market-structure interventions that Bonta has pursued.`,
      citations: ["ag9"],
    },
    ag_civil: {
      text_long: `Gates's civil rights record is defined by his time in the Trump DOJ Civil Rights Division — an office that critics say was redirected under Trump's second term away from traditional civil rights enforcement (protecting racial and ethnic minorities, people with disabilities, and LGBTQ individuals from discrimination) and toward enforcement priorities that aligned with conservative political objectives. He is careful to describe his work there as focused on protecting constitutional rights broadly, but he has not detailed what cases he worked on or what policy decisions he participated in.

      As Huntington Beach city attorney, he was involved in challenges to California's housing mandates that affected racial integration in housing — positions that put him on the opposite side from the civil rights consensus on fair housing. He supports law enforcement and opposes what he views as progressive-driven civilian oversight that undermines police authority and morale. His supporters argue that strong support for law enforcement is a civil rights position — communities of color that suffer the most from crime benefit the most from effective policing; his critics argue that police accountability and community safety are not in conflict and that his record suggests he would weaken both.`,
      citations: ["ag8", "ag6"],
    },
  },

  // ============================================================
  // MARJORIE MIKELS (G — Left alternative)
  // Longtime Inland Empire litigator; anti-war; anti-surveillance focus
  // ============================================================
  mikels: {
    ag_trump: {
      text_long: `Mikels supports resisting federal overreach but frames the challenge more broadly than Bonta's lawsuit-focused approach. She argues that both major parties have been complicit in building the surveillance state, military contracting relationships, and corporate power structures that enable the kind of executive overreach Trump represents. For her, resisting Trump means not just filing lawsuits but also investigating California's own participation in federal programs and infrastructure that enable the overreach she opposes — including contracts between California agencies and federal surveillance, intelligence, and military contractors.

      She also raises the concern that Bonta's approach, while confronting Trump on immigration and environmental regulation, has not challenged the surveillance and military infrastructure that cross-cuts both parties. She would use the AG's investigative authority to examine how California state agencies — including airports, ports, and public universities — are used in federal military and intelligence supply chains without adequate public oversight. She views this as a civil liberties issue that neither Bonta nor Gates will address.`,
      citations: ["ag3", "ag4"],
    },
    ag_crime: {
      text_long: `Mikels approaches crime through a structural and civil liberties lens: she is skeptical of mass incarceration as a crime-reduction strategy and supports decriminalization of drug offenses, community-based alternatives to prosecution, and a significant reduction in the use of cash bail and pretrial detention. She views the criminal justice system's disproportionate impact on communities of color as itself a form of crime — or at least a systemic injustice that the AG, as the state's chief law officer, has an obligation to address.

      She would focus the AG's prosecutorial resources on the crimes that cause the most harm: corporate crime, environmental crime, financial fraud, and government corruption. She is skeptical of the quality-of-life crime enforcement that Gates champions, viewing broken-windows policing as a vehicle for criminalizing poverty and homelessness rather than addressing public safety. Her approach would shift the AG's crime-fighting priorities toward the top of the economic ladder rather than the bottom.`,
      citations: ["ag3", "ag4"],
    },
    ag_housing: {
      text_long: `Mikels supports strong state enforcement of housing laws to protect tenants and expand affordable housing — consistent with Bonta's approach but with an additional focus on the surveillance and data privacy dimensions of housing policy. She opposes the public-private surveillance deals between government and technology companies that she says are being used to monitor homeless people, profile renters, and assist landlords in eviction and discrimination, arguing that these contracts represent a violation of civil liberties that the AG has authority to investigate and prohibit.

      She would also enforce California's existing fair housing laws more aggressively, focusing on discrimination based on source of income — which is illegal in California but widely practiced — and on algorithm-based discrimination in rental pricing and screening. She views housing discrimination enforcement as a civil rights issue as much as a housing issue, and would direct the AG's civil rights division to prioritize cases where technology is being used to automate discrimination.`,
      citations: ["ag3", "ag4"],
    },
    ag_guns: {
      text_long: `Mikels supports strict gun control enforcement — she is aligned with the mainstream California Democratic position on gun safety. She would enforce California's existing gun laws, defend them against Second Amendment challenges, and use the AG's authority to investigate gun trafficking and the straw purchase schemes that route illegal firearms into California's communities. She has not made gun policy a central campaign issue, which reflects both her campaign's limited resources and her broader focus on corporate crime, surveillance, and anti-war positions that distinguish her from the other candidates.

      She supports addressing the root causes of gun violence — economic desperation, mental health crises, and community disinvestment — as long-term complements to strict gun law enforcement. She would not support the approach Gates advocates, which she views as using gun rights rhetoric to undermine regulations that protect the communities most harmed by gun violence.`,
      citations: ["ag4"],
    },
    ag_consumer: {
      text_long: `Mikels's consumer protection focus is on corporate accountability, with a specific emphasis on how California industry is becoming entangled with AI resource consumption and military technology in ways that harm California workers and communities. She would investigate the clandestine relationships between California-based technology companies and the defense and intelligence communities — specifically the use of California airports, ports, and public infrastructure in military supply chains — which she argues represent an accountability gap that neither Bonta nor Gates will close.

      She supports aggressive antitrust enforcement against Big Tech — consistent with Bonta's approach — but frames it more broadly as a challenge to concentrated corporate power generally, including in media, finance, and real estate. She is particularly focused on the platform economy's effect on gig workers, who she argues have been systematically deprived of employee status and labor protections through corporate lobbying and regulatory capture.`,
      citations: ["ag3"],
    },
    ag_immigration: {
      text_long: `Mikels's immigration position is the strongest of any candidate in either major statewide race: she supports protecting sanctuary policies, opposing ICE enforcement that violates state law, and pushing back against the federal government's immigration crackdown as a matter of both civil rights and political principle. She frames immigration enforcement primarily as a human rights crisis — referencing the deaths in federal detention, the family separations, and the constitutional violations that have characterized both Trump administrations' immigration enforcement.

      She would use the AG's authority to investigate and prosecute federal agents who violate California law during immigration enforcement operations — a power that exists in California law but has not been aggressively used. She would also support sanctuary policies at the local level, provide legal resources for immigrants facing deportation, and challenge the federal government's authority to condition California funding on immigration enforcement cooperation.`,
      citations: ["ag4"],
    },
    ag_environment: {
      text_long: `Environmental enforcement is among Mikels's strongest areas, with a specific focus on nuclear waste and defense industry pollution that other candidates have not addressed. She would use the AG's authority to investigate and prosecute nuclear waste disposal in California — arguing that the state's oversight of military and industrial nuclear material has been inadequate and that California communities near nuclear facilities face underacknowledged health risks. She frames nuclear environmental enforcement as both a public health and a civil rights issue: the communities bearing the greatest nuclear risk are disproportionately communities of color.

      She would also challenge California's participation in federal military and intelligence infrastructure projects that have environmental implications — pipeline approvals, port development, military facility expansion — that are typically shielded from standard environmental review by national security considerations. She views the national security exemption from environmental law as an accountability gap that the AG has standing to challenge.`,
      citations: ["ag3", "ag4"],
    },
    ag_reproductive: {
      text_long: `Mikels strongly supports abortion access and reproductive rights and would use the AG's office aggressively to protect California providers and patients from out-of-state prosecution threats, federal interference, and private enforcement schemes like those upheld by the Supreme Court in the Texas SB 8 case. She would maintain and expand the legal defense mechanisms that Bonta created after Dobbs, and would be more aggressive than Bonta in challenging attempts by other states to reach into California to prosecute conduct that is legal here.

      She also frames reproductive rights as intersecting with her anti-surveillance agenda: digital tracking of period apps, location data from visits to abortion clinics, and payment records from reproductive healthcare purchases are all potential sources of evidence for states trying to prosecute out-of-state abortions. She would push for stronger California privacy protections specifically designed to protect reproductive healthcare data from out-of-state law enforcement access.`,
      citations: ["ag4"],
    },
    ag_ai: {
      text_long: `AI and surveillance technology are Mikels's signature issues — the area where she most clearly distinguishes herself from both Bonta and Gates. She is specifically concerned about public-private surveillance contracts: agreements between California government agencies and Silicon Valley companies that give private actors access to government data, and give government agencies access to private surveillance infrastructure, without adequate public oversight or accountability. She would investigate these contracts, publish what she finds, and pursue legal action against arrangements that she concludes violate California privacy law or constitutional rights.

      She also focuses on the military and intelligence applications of AI developed by California companies — arguing that the public does not know how much of California's technology sector is entangled with defense and intelligence contracting, and that this entanglement has implications for civil liberties, labor rights, and democratic accountability. She would use the AG's investigative authority to produce public reports on these relationships, giving California voters information they currently cannot easily find.`,
      citations: ["ag3"],
    },
    ag_civil: {
      text_long: `Civil rights — including but not limited to traditional police accountability — is the core of Mikels's campaign. She supports robust free speech protections specifically for critics of the war in Gaza and advocates for Palestinian rights, who she argues have faced disproportionate government surveillance, protest restrictions, and employment retaliation. She views the civil liberties of political dissenters as a test case for the broader principle of civil rights enforcement: an AG who will protect only the speech of those with mainstream political views is not really protecting free speech at all.

      She would use the AG's civil rights authority to investigate government surveillance of political activists, to challenge protest restrictions that she views as content-based and unconstitutional, and to hold law enforcement accountable for the use of force against protesters. She is the most willing of the three candidates to use the AG's authority against the California government itself — investigating state agencies for civil rights violations rather than limiting enforcement to private actors and local governments.`,
      citations: ["ag3", "ag4"],
    },
  },

};
