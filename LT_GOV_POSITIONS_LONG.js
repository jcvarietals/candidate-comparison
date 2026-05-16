// ============================================================
// LIEUTENANT GOVERNOR — LONG-FORM POSITION DESCRIPTIONS
// text_long field for popup detail view.
// Claude Code: merge text_long into matching LT_GOV_POSITIONS
// objects. Includes all 6 candidates (original 4 + Kellman +
// Oliver Ma from INCREMENTAL file).
//
// IMPORTANT FRAMING: The Lt. Gov. has limited formal power.
// All long-form entries are grounded in what the office can
// actually do: vote on UC Regents, CSU Trustees, and Community
// College Board of Governors; serve on the State Lands
// Commission; advise on the Coastal Commission; break Senate
// ties; act as governor when the governor leaves California.
// ============================================================

export const LT_GOV_POSITIONS_LONG = {

  // ============================================================
  // JOSH FRYDAY (D — Progressive)
  // ============================================================
  fryday: {
    housing: {
      text_long: `Fryday is the only candidate who has lived in 17 different homes before the age of 18 — a personal history that makes housing access feel like a biographical rather than an ideological issue. His platform centers on a measurable target: at least one million units of housing committed or permitted on public and campus land during his term, tracked and reported publicly. The Lt. Gov.'s seats on the UC Regents and CSU Trustees give him direct authority to require those systems to treat student and workforce housing as core infrastructure rather than a secondary amenity. He would push both systems to build housing near jobs and transit rather than only in expensive urban cores, and to streamline approvals so that campus housing projects move at the speed of need rather than the speed of bureaucracy.

      He frames housing as the foundational issue that determines whether every other California priority — healthcare, climate, public safety — is achievable. When teachers, nurses, and firefighters cannot afford to live in the communities they serve, those services erode. When workers commute three hours a day because they cannot afford housing near their jobs, California adds emissions, congestion, and stress. His approach is to use the Lt. Gov.'s convening power to bring developers, city planners, labor unions, and university administrators to the same table and create a permitting environment that removes bureaucratic obstacles without sacrificing labor or environmental standards.`,
      citations: ["lg3", "lg2", "lg1"],
    },
    homeless: {
      text_long: `Fryday frames homelessness as the most direct symptom of the housing shortage — not a separate crisis with its own causes, but the inevitable consequence of a state that has chronically underbuilt housing relative to demand. His primary intervention would be through the higher education boards: building student and workforce housing on campus land keeps tens of thousands of students and university employees from competing in the broader housing market, which in turn reduces the pressure that pushes lower-income renters into instability.

      His service background — having led California Volunteers for Newsom, coordinating responses to COVID food insecurity and other crises — gives him a different lens than most candidates. He has mobilized tens of thousands of Californians to tackle community problems and sees the Lt. Gov.'s ability to convene state, local, and nonprofit actors as a tool for coordinating the fragmented homelessness response that currently produces inconsistent outcomes across counties. He has not proposed specific enforcement mechanisms or shelter mandates, positioning himself as a facilitator and systems-builder rather than an enforcer.`,
      citations: ["lg3", "lg10"],
    },
    economy: {
      text_long: `Fryday's economic platform is centered on two interrelated proposals: cutting regulatory friction for businesses to strengthen California's competitiveness, and expanding international trade partnerships to develop new markets for California's exports. Both fall within the Lt. Gov.'s statutory role as chair of the California Commission for Economic Development. He was part of Newsom's cabinet during the pandemic recovery and has direct experience with how state-level decisions affect business confidence and investment decisions in real time.

      His most distinctive economic proposal is the universal service year: a California-specific program modeled on the GI Bill, where Californians aged 18 to 25 would receive tuition credits, down-payment assistance, or job credentials in exchange for a year of community service. This would simultaneously expand the workforce pipeline, reduce the cost of college, and build social cohesion across a state that is deeply economically stratified. He has already built the infrastructure for this through the Climate Action Corps and College Corps programs he created in the Newsom administration. Scaling those from pilot to statewide would be among his first priorities.`,
      citations: ["lg3", "lg10", "lg2"],
    },
    energy: {
      text_long: `Energy is Fryday's deepest credential area. Before joining Newsom's cabinet, he was COO of NextGen America — the climate advocacy nonprofit founded by Tom Steyer — giving him years of direct experience in clean energy policy and mobilization. As Lt. Gov., he would use the State Lands Commission to advance clean energy permitting on public land, support coastal land-use decisions that prioritize resilience over fossil fuel infrastructure, and push community colleges to credential the trade workers needed to build solar, wind, and battery storage projects at scale.

      His Climate Action Corps, which he created and launched as Chief Service Officer, places young Californians in climate-focused service roles — planting trees, hardening infrastructure, building resilience — and pays for their college in exchange. Scaling this program through the community college system would simultaneously address the clean energy workforce shortage and lower the cost of higher education. He is endorsed by California Environmental Voters, which views him as the candidate most reliably committed to both climate action and the economic transition that must accompany it. His energy platform is the most integrated of any Lt. Gov. candidate — connecting the office's higher ed authority, State Lands role, and convening power into a single clean energy deployment strategy.`,
      citations: ["lg3", "lg10", "lg2"],
    },
    immigration: {
      text_long: `Fryday has spoken out against the Trump administration's National Guard deployment to Los Angeles, calling it unnecessary, wasteful, and damaging to community trust. He supports California's sanctuary protections and frames immigration as a workforce and community stability issue: California's agricultural, healthcare, and construction sectors depend on immigrant workers, and the uncertainty created by aggressive federal enforcement has disrupted economic activity and driven families into hiding.

      The Lt. Gov. has limited formal authority over immigration enforcement — which is primarily a federal and local law enforcement matter — but the office's convening power and bully pulpit can be used to organize advocacy, support local jurisdictions defending sanctuary policies, and coordinate state resources for immigrant legal services. Fryday has also connected immigration to his service and workforce development agenda: many undocumented Californians are skilled workers who would benefit from and contribute to trade credentialing and workforce development programs, and removing legal barriers to participation in those programs would strengthen the state's labor supply.`,
      citations: ["lg10", "lg3"],
    },
    wildfire: {
      text_long: `Fryday would use the State Lands Commission to build climate resilience infrastructure — prioritizing coastal and inland land-use decisions that reduce wildfire fuel loads, protect watersheds, and support managed fire breaks. His climate nonprofit background gives him a framework for understanding wildfire as a systemic consequence of climate change rather than a failure of forest management alone. He supports investment in prevention infrastructure through the Lt. Gov.'s land management authority.

      His most specific wildfire-adjacent proposal is on the insurance side: he has said the Lt. Gov. would work with the insurance commissioner to reduce premiums for homeowners who take preventive mitigation measures — building a connection between the home hardening programs that fire safety agencies recommend and the pricing incentives that insurers use. This cross-agency coordination is exactly the kind of facilitation that a Lt. Gov. with relationships across state government can provide, even without direct regulatory authority. He has also noted that his College Corps model could be deployed for wildfire resilience work — creating a service year pathway where young Californians do fuel reduction, controlled burns, and defensible space work on public lands.`,
      citations: ["lg3", "lg2"],
    },
    budget: {
      text_long: `Fryday's approach to the state budget is indirect: his core argument is that investing upfront in housing, clean energy, and workforce development produces long-term fiscal savings by reducing the costs of homelessness, energy price volatility, and workforce shortages. The Lt. Gov. does not control the state budget, but the office can use its board seats and convening power to push UC, CSU, and community colleges to generate revenue through private campus partnerships, public land development, and workforce program expansion — reducing their reliance on the general fund.

      His universal service year program is explicitly designed as a fiscally efficient alternative to traditional education subsidies: participants receive value (tuition, down payments, credentials) in exchange for service that has measurable public benefit, rather than receiving unconditional grants. This self-funding model could scale significantly without proportional general fund increases. He has not taken a specific position on the state's $35 billion structural deficit or proposed specific revenue measures, consistent with the Lt. Gov.'s limited budget authority.`,
      citations: ["lg3"],
    },
    healthcare: {
      text_long: `Healthcare is not among Fryday's primary focus areas for the Lt. Gov. office, and he has not proposed specific healthcare legislation or regulatory changes. His general commitment is to protecting the public programs — Medi-Cal, behavioral health services, county health departments — that Californians depend on, particularly in the context of potential federal funding cuts during the Trump administration. His service background includes leading COVID-19 food security responses and has given him direct experience with how healthcare disruptions cascade into food insecurity, housing instability, and economic crisis.

      His most relevant healthcare-adjacent work is through the College Corps and Climate Action Corps: participants in those programs gain access to health benefits, workforce training, and credentialing that can open pathways into healthcare careers. The community college credentialing pipeline he wants to expand includes healthcare — nursing, medical assisting, allied health — as well as construction and clean energy. He views workforce development through higher ed as the primary tool the Lt. Gov. has to affect healthcare workforce shortages.`,
      citations: ["lg3", "lg10"],
    },
    ai: {
      text_long: `Fryday has not released a detailed AI policy platform, but his tech and service background informs his general orientation: AI is a tool that, if deployed thoughtfully, can expand access to opportunity — and if deployed carelessly, can concentrate it. His universal service year concept implicitly addresses AI displacement: if automation eliminates certain entry-level jobs, having a structured service year with college and credential benefits gives young Californians an alternative path into the workforce. His clean energy focus also connects to AI: data centers powering AI development are massive energy consumers, and his push for clean energy infrastructure through the State Lands Commission and community college credentialing is in part a response to that demand.

      Through his role on the UC Regents and CSU Trustees, he would push California's higher education systems to develop AI literacy and AI ethics curricula, ensuring that graduates across all fields have the ability to use and critically evaluate AI tools. He would also use the Lt. Gov.'s convening role to bring together tech companies, labor unions, community colleges, and policymakers to develop standards for responsible AI use in hiring, housing, and public benefits — the high-stakes decisions where algorithmic bias has the most damaging effects.`,
      citations: ["lg3"],
    },
    education: {
      text_long: `Education is Fryday's most specific policy area as Lt. Gov. candidate. He wants to use his seats on all three higher education boards to drive down time-to-degree, reduce cost of attendance, and expand workforce housing as core campus infrastructure. He has created the College Corps — a service-based scholarship program that pays for community college while students serve their communities — and wants to expand it to reach far more students across the UC and CSU systems. His community college credentialing priority is concrete: California needs tens of thousands of electricians, plumbers, HVAC technicians, and solar installers to build the clean energy infrastructure the state has committed to, and community colleges are the fastest pipeline for those workers.

      He is the candidate most focused on connecting education to economic outcomes: not education as an abstract good, but education that leads directly to stable, well-paying employment. He would push the boards to conduct regular curriculum reviews tied to California's emerging industries, require that degrees translate into job offers, and expand industry partnerships that give students real work experience before graduation. He would also require the university systems to publish transparent data on student outcomes by program and institution — making it easier for prospective students to choose programs with strong employment records and for institutions to be held accountable for poor ones.`,
      citations: ["lg1", "lg3", "lg9"],
    },
    costliving: {
      text_long: `Fryday's cost-of-living agenda is built around three levers: more housing on public and campus land (which increases supply and reduces rents), free or subsidized higher education through the service year program (which reduces the debt burden on young workers), and lower electricity costs through clean energy investment (which reduces utility bills over time). All three fall within or adjacent to the Lt. Gov.'s formal authority over higher education, state lands, and clean energy development.

      His framing is that the cost-of-living crisis is at its core an infrastructure crisis: California has not built enough homes, has not built enough clean energy, and has not trained enough workers in the skills those industries need. The Lt. Gov. has more tools to address all three than most people realize — particularly through the higher education boards, where decisions about campus housing, curriculum, and tuition directly affect the cost of living for hundreds of thousands of students, staff, and faculty. He positions himself as the candidate who will use all of those tools, aggressively and publicly, rather than treating the office as ceremonial.`,
      citations: ["lg3", "lg2"],
    },
  },

  // ============================================================
  // FIONA MA (D — Moderate)
  // ============================================================
  ma_fiona: {
    housing: {
      text_long: `Ma's housing platform is built on her Treasurer's record: her office has issued hundreds of millions of dollars in housing bonds for university campuses, approved tax credits for low-income housing in counties devastated by wildfires, and released policy reports on affordable housing for community college students. She is the only Lt. Gov. candidate who has actually executed large-scale public housing finance in her current role, giving her a concrete track record rather than aspirational proposals. As Lt. Gov., she would extend this approach — using the board seats to require UC and CSU systems to treat student and workforce housing as core infrastructure, and leveraging private partnerships to generate revenue for construction without depleting the general fund.

      Her distinctive housing proposal is to find revenue outside the general fund: partnering with private companies to lease unused campus spaces — theaters, parking structures, dining facilities during off-peak hours — and directing those revenues to housing construction and student aid. This reflects her CPA background and her instinct for generating value from existing assets rather than always seeking new appropriations. The California Labor Federation and Teamsters have endorsed her in part because of her record financing union-built affordable housing projects as Treasurer.`,
      citations: ["lg1", "lg4", "lg11"],
    },
    homeless: {
      text_long: `Ma's homelessness approach flows naturally from her housing finance background: she expanded and reformed the state's affordable housing programs as Treasurer, approved tax credits for low-income housing in fire-affected counties, and worked with county housing agencies to deploy state funds more effectively. She frames homelessness as primarily a housing supply and affordability problem that must be attacked through construction — more affordable units, more campus housing, more workforce housing near transit — rather than through enforcement or clinical intervention.

      She has also focused on what she calls the "near-homeless" — people one financial shock away from losing their housing — as the population most efficiently served by prevention. Her CalSavers retirement savings program (which she launched as Treasurer) reflects the same logic applied to retirement security: building savings early is far cheaper than dealing with the consequences of financial collapse later. She would apply this prevention-first lens to homelessness, pushing the state to invest in rent assistance and eviction prevention as well as shelter construction.`,
      citations: ["lg11", "lg4"],
    },
    economy: {
      text_long: `Ma's economic credentials are the deepest of any Lt. Gov. candidate: as State Treasurer since 2019, she has managed the finances of the fourth-largest economy in the world, maintained California's credit rating through the pandemic disruption and subsequent recovery, and financed billions of dollars in infrastructure, affordable housing, and clean energy projects. She has lived the economic competitiveness challenge from the inside: attracting bond investors, managing the state's debt portfolio, and ensuring that California's financial standing supports rather than undermines its policy ambitions.

      Her economic approach as Lt. Gov. would use the office's statutory role in economic development and international trade to strengthen California's competitiveness — tracking job growth in key industries, expanding export partnerships, and using the higher education board seats to ensure that UC, CSU, and community college graduates are flowing into the industries that drive California's economy rather than leaving for states with lower costs of living. She is endorsed by the Teamsters specifically because of her record opposing the rush to put automated trucks on public roads without adequate safety and labor safeguards — a concrete example of her willingness to hold industry accountable even when it conflicts with technological enthusiasm.`,
      citations: ["lg4", "lg11"],
    },
    energy: {
      text_long: `As Treasurer, Ma funded clean energy projects across California — one of the primary tools a state treasurer has for advancing climate goals without direct regulatory authority. She would continue this financing approach as Lt. Gov., using the State Lands Commission and the higher education board seats to advance clean energy development on public land and require university campuses to meet ambitious energy efficiency and renewable generation targets. She is endorsed by union organizations representing construction workers who build clean energy infrastructure, which aligns her climate commitment with her labor commitment.

      She views climate and energy policy through an economic development lens: clean energy is not just an environmental imperative but a job creation opportunity, and California's competitive advantage in the clean energy economy depends on having the workforce, infrastructure, and financing tools in place. Her approach on the State Lands Commission would prioritize clean energy development on state-owned land over fossil fuel extraction, while managing the transition in a way that protects workers in affected industries.`,
      citations: ["lg11", "lg4"],
    },
    immigration: {
      text_long: `Ma is the daughter of Chinese immigrants and would be the first elected Asian American Lt. Governor in California history. She frames immigration as both a personal and an economic issue: immigrant families like hers built California through hard work and community contribution, and policies that undermine immigrant communities undermine the state's economic and social fabric. She supports California's sanctuary protections and views the Lt. Gov.'s convening power as a tool for organizing resources and support for immigrant communities facing federal enforcement pressure.

      The Treasurer's office, which she currently leads, has specific tools for supporting immigrant communities: financial literacy programs, access to banking for the unbanked (a disproportionately immigrant population), and bond financing for affordable housing in immigrant-dense communities. She would extend these tools as Lt. Gov. — not as direct immigration enforcement alternatives, but as economic support systems that make immigrant communities more resilient to policy disruption.`,
      citations: ["lg11"],
    },
    wildfire: {
      text_long: `Ma's Treasurer's office has direct experience with the wildfire crisis: she approved tax credits for low-income housing in counties devastated by the Camp, Tubbs, Thomas, and Mendocino Complex fires. She understands the post-fire financing challenge from the inside — the gap between what insurance pays and what it actually costs to rebuild, the difficulty of issuing bonds for fire-damaged communities with impaired credit, and the lengthy timeline between disaster and recovery.

      As Lt. Gov., she would use the State Lands Commission seat to convene stakeholders on housing, drought, and wildfire, identifying bottlenecks in the permitting and financing process that slow rebuilding. She has said she would work with the insurance commissioner to find ways to accelerate coverage for homeowners in fire-prone areas. Her approach is the most institutionally grounded in the field: rather than proposing new programs, she would use existing mechanisms — bonds, tax credits, state land management — more aggressively than her predecessors.`,
      citations: ["lg4", "lg2"],
    },
    budget: {
      text_long: `Ma's CPA background and Treasurer's experience make her the most fiscally credible candidate in the Lt. Gov. field. She has managed California's debt portfolio, maintained the state's credit rating through multiple economic disruptions, and overseen programs ranging from affordable housing tax credits to the CalSavers retirement savings program. Her approach to the state budget — which the Lt. Gov. does not directly control — is to find alternative revenue for public institutions so they rely less on the general fund.

      Her signature proposal is to generate revenue for UC and CSU by partnering with private companies to lease unused campus spaces. This reflects a broader philosophy: public institutions have more latent value in their assets than they typically monetize, and a fiscally sophisticated Lt. Gov. can help them unlock it. She is not proposing new taxes or new spending programs; she is proposing better management of existing assets. This approach is unlikely to close the state's $35 billion structural deficit on its own, but it could meaningfully reduce the fiscal pressure on higher education without new appropriations.`,
      citations: ["lg1", "lg4"],
    },
    healthcare: {
      text_long: `Healthcare is not Ma's primary focus area for the Lt. Gov. office, but she has a relevant record: her Treasurer's office financed healthcare facility construction through the California Health Facilities Financing Authority, and she understands how bond financing can expand the physical capacity of the healthcare system. She also launched the CalSavers retirement savings program, which is particularly important for healthcare workers in small practices and nonprofit organizations who do not have access to employer-sponsored retirement plans.

      She is endorsed by the United Nurses Associations of California — who praised her solidarity during a labor dispute — and by other healthcare unions, which reflects her record of backing healthcare workers in collective bargaining and legislative fights. Her approach to healthcare as Lt. Gov. would be to use the higher education board seats to align nursing, medical, and allied health degree programs with the state's workforce needs, ensuring that graduation rates and program capacity match the actual shortage of healthcare workers.`,
      citations: ["lg11", "lg4"],
    },
    ai: {
      text_long: `Ma has specifically engaged with the AI question through a labor lens: her Teamsters endorsement was driven in part by her opposition to the rush to put automated trucks on roads without adequate safety and labor protections. She frames AI and automation as economic competitiveness issues — California should be a leader in developing and deploying these technologies — but also as labor rights issues where the speed of deployment must be governed by standards that protect workers.

      On the education side, she would use the higher education board seats to ensure that UC, CSU, and community college curricula are updated to develop AI literacy across all fields, preparing students for an economy where AI tools are ubiquitous. She would also push the systems to create partnerships with industry that give students hands-on experience with real AI applications, reducing the gap between what is taught in school and what is needed in the workforce. Her CPA and financial management background gives her a pragmatic view of AI: it is a productivity tool that must be governed by fiduciary standards, not just market enthusiasm.`,
      citations: ["lg4"],
    },
    education: {
      text_long: `Ma is the only elected official in California with a seat on all three higher education boards simultaneously — UC Regents, CSU Trustees, and Community College Board of Governors — a position she holds as State Treasurer. This makes her the candidate with the deepest existing knowledge of all three systems, their governance structures, their budgets, and their political dynamics. She knows who the key administrators are, which campuses have surplus land suitable for housing, which programs are oversubscribed, and which are producing graduates without employment pathways.

      Her education platform focuses on what she can actually accomplish within those board structures: reduce cost of attendance through private partnerships and alternative revenue, build more student and workforce housing, align curricula with California's emerging industries, and advocate for California's higher education systems in budget negotiations. She is more specific than most candidates about the mechanisms — leasing unused campus spaces, issuing bonds for student housing, conducting regular industry-curriculum alignment reviews — and more credible about the constraints, having spent years navigating the political dynamics of all three boards as Treasurer.`,
      citations: ["lg1", "lg4", "lg9"],
    },
    costliving: {
      text_long: `Ma frames the cost-of-living crisis as fundamentally a financial stability and access-to-capital problem. When families cannot access affordable credit, cannot save for down payments, cannot afford tuition, and cannot build retirement security, the result is economic fragility that compounds across generations. Her CalSavers program addresses one piece of this — helping workers in jobs without retirement benefits build savings — and her affordable housing bond financing addresses another. As Lt. Gov., she would use the higher education boards to reduce tuition, the State Lands Commission to expand campus housing, and the economic development commission to attract investment that creates good-paying jobs.

      She is the most institutionally oriented candidate in the field: her cost-of-living proposals do not require new legislation or new programs, but better use of existing tools. This is both a strength and a limitation: she can deliver real, measurable results within the Lt. Gov.'s formal authority, but she is unlikely to produce the structural economic changes that more progressive candidates are promising. For voters who want a competent administrator who delivers results within constraints, she is the clearest choice; for voters who want a platform for sweeping reform, she is not.`,
      citations: ["lg11", "lg4"],
    },
  },

  // ============================================================
  // MICHAEL TUBBS (D — Progressive)
  // ============================================================
  tubbs: {
    housing: {
      text_long: `Tubbs grew up in housing insecurity in South Stockton — his childhood included periods of extreme poverty, food insecurity, and the absence of a father who is serving a life sentence in prison. This lived experience shapes his housing platform in ways that distinguish him from candidates who approach the issue analytically. His primary tool as Lt. Gov. would be the board seats on UC Regents, CSU Trustees, and the State Lands Commission, which he would use to build student and workforce housing funded through housing bonds. He notes that the average first-time homebuyer in California is now nearly a decade older than their 1980s counterpart — and that this delay has compounded wealth inequality across a generation.

      He would also push the boards to advance Black-owned business procurement in housing construction — ensuring that the jobs created by campus housing development flow to minority-owned contractors, not just large general contractors with existing state relationships. His experience creating Stockton's guaranteed income pilot, which gave cash directly to residents without conditions, informs his housing approach: he believes in direct, measurable interventions rather than complex bureaucratic programs, and would measure his housing progress by units built and families housed, not process metrics.`,
      citations: ["lg5", "lg6", "lg20"],
    },
    homeless: {
      text_long: `Tubbs is the only major Lt. Gov. candidate who pioneered a guaranteed income program — Stockton's SEED pilot, which gave 125 residents $500 a month with no strings attached for 18 months. The results showed that recipients were more likely to find full-time employment, had improved mental health outcomes, and were better able to meet housing costs. As Lt. Gov., he would advocate for guaranteed income programs for populations at highest risk of homelessness: people exiting the foster care system, people leaving incarceration, and low-wage workers who have been displaced by automation.

      He would also push the higher education systems to address the food and housing insecurity that affects the majority of their students: he has noted that more than 70% of California community college students and 50% of Cal State students report food insecurity. Using the board seats to require that all campuses have functional basic needs programs — food pantries, emergency financial aid, housing placement services — would address homelessness among students who are technically enrolled but economically unstable. He frames this as both a moral and an economic argument: students who cannot eat cannot learn, and the state's investment in higher education is wasted when students drop out for financial reasons.`,
      citations: ["lg5", "lg6"],
    },
    economy: {
      text_long: `Tubbs's economic philosophy, developed through years of antipoverty work in Stockton and as Newsom's special adviser for economic mobility, is that the California economy produces enormous wealth that is captured almost entirely by the top of the income distribution — and that structural reforms are needed to ensure that working people share in that prosperity. His specific revenue proposals are Prop 13 split-roll reform (taxing commercial properties at market value), extending Prop 55's income taxes on high earners, and a data dividend — a fee on AI and tech company profits, on the theory that California's data and workforce power those profits and California residents deserve a share.

      He also wants to move away from what he calls being "tough and dumb" on crime and toward being "smart on crime" — investing in prevention through youth jobs, mental health services, and economic mobility programs that reduce the conditions that drive people toward criminal activity. He is endorsed by SEIU and backed by an independent expenditure committee funded by Snap CEO Evan Spiegel and Reed Hastings's partner Patty Quillin, which reflects his ability to attract both progressive labor and Silicon Valley philanthropic support.`,
      citations: ["lg6", "lg5"],
    },
    energy: {
      text_long: `Tubbs has not released a detailed energy policy platform, which reflects both his campaign's limited resources for issue development and his core focus on economic equity and poverty. His general orientation is supportive of the clean energy transition as a job creation opportunity — he has noted that clean energy projects can create good-paying union jobs in communities like Stockton that have historically been left out of California's economic growth. He would use the State Lands Commission to support clean energy development on public land.

      His most relevant energy-adjacent position is on the data dividend: data centers powering AI development are massive electricity consumers, and Tubbs's proposal to collect a fee on AI and tech profits would indirectly incentivize those companies to internalize their energy costs rather than shifting them to ratepayers. He has not taken specific positions on nuclear energy, natural gas, or the timeline for phasing out fossil fuel vehicles — his campaign has been more focused on economic equity and higher education than on energy regulatory details.`,
      citations: ["lg5"],
    },
    immigration: {
      text_long: `Tubbs has addressed immigration primarily through the lens of economic inclusion and civil rights. He supports California's sanctuary protections and frames immigration enforcement as a civil rights issue: the communities most affected by aggressive ICE enforcement are the same communities — Black, Latino, immigrant — that have been most systematically excluded from economic opportunity. He would use the Lt. Gov.'s platform to advocate for immigrant rights and to ensure that workforce development programs are accessible to all California residents regardless of immigration status.

      His guaranteed income work in Stockton reached residents across income, race, and immigration status — demonstrating that direct economic support can create stability for some of the most vulnerable people in a community. As Lt. Gov., he would push for workforce development programs, community college credentialing, and guaranteed income pilots that serve immigrant communities as well as citizens, reducing the barriers that prevent immigrant workers from accessing the economic mobility programs that could lift them out of poverty.`,
      citations: ["lg5"],
    },
    wildfire: {
      text_long: `Tubbs has not released detailed wildfire policy, consistent with his campaign's focus on economic equity and higher education. His relevant position is on the State Lands Commission, where he would support smarter land management and climate resilience infrastructure — framing these as equity issues, since the communities most harmed by wildfire and the subsequent insurance crisis tend to be lower-income communities that cannot afford to relocate or rebuild without assistance.

      His guaranteed income framework is relevant here too: families with a financial cushion — from guaranteed income, emergency savings, or adequate insurance — are far better positioned to survive a wildfire economically than families living paycheck to paycheck. He views disaster resilience as inseparable from economic stability, and his antipoverty agenda is his primary contribution to wildfire resilience.`,
      citations: ["lg5"],
    },
    budget: {
      text_long: `Tubbs is the Lt. Gov. candidate with the most explicit revenue platform: Prop 13 split-roll reform, extending Prop 55, and the data dividend. He frames the state's budget challenge as a political problem rather than a math problem: California has the wealth to fund its public institutions without cutting services, but corporate lobbying and structural tax advantages for the wealthy have prevented the revenue reforms that would make this possible. He is explicitly opposed to austerity solutions and would not cut higher education, social services, or healthcare to close the deficit.

      On the higher education budget specifically — which the Lt. Gov. can directly influence through the board votes — he would push for more aggressive use of private partnerships and alternative revenue (similar to Ma's approach) while also advocating for increased state investment through his split-roll and Prop 55 proposals. He views underfunding of higher education as a poverty trap: the states that invest most in public education produce the most economic mobility, and cutting higher education to balance the budget is false economy.`,
      citations: ["lg6"],
    },
    healthcare: {
      text_long: `Healthcare access is central to Tubbs's antipoverty framework. He has specifically called out the food and housing insecurity affecting the majority of California community college and CSU students as a healthcare issue — students who cannot meet basic needs experience worse health outcomes, higher rates of mental illness and substance abuse, and lower academic performance. He would use his board seats to require that every California public campus has functioning basic needs programs including healthcare navigation, mental health services, and emergency financial assistance.

      He supports expanding mental health services as a public safety measure — drawing on his experience in Stockton, where investing in intervention programs to reduce gun violence produced measurable results. His approach to healthcare is rooted in the social determinants model: if people have stable housing, adequate income, access to food, and connection to community, their healthcare needs are lower and their outcomes are better. His guaranteed income and workforce development proposals are as much healthcare interventions as they are economic ones.`,
      citations: ["lg5", "lg6"],
    },
    ai: {
      text_long: `The data dividend is Tubbs's most distinctive and specific AI policy proposal. The premise is straightforward: California residents' data powers the AI and tech industry's profits, and those residents deserve a direct financial stake in those profits. This is similar in structure to Alaska's Permanent Fund, which distributes a portion of oil revenue to Alaska residents — but applied to data rather than natural resources. He has proposed that the data dividend proceeds fund guaranteed income programs, workforce development, and public services.

      He is also the candidate most focused on AI as a labor displacement issue: his experience in Stockton showed that automation had already hit the city's manufacturing and warehouse sectors hard before the pandemic, and he views the next wave of AI-driven displacement as a continuation of that trend that demands proactive policy response. His approach is not to slow AI development but to ensure that the productivity gains are shared — through the data dividend, through guaranteed income, and through workforce training programs that give displaced workers new skills.`,
      citations: ["lg6", "lg5"],
    },
    education: {
      text_long: `Education is the personal and political heart of Tubbs's candidacy. He was the first in his family to attend college — on a scholarship to Stanford — and traces his ability to escape poverty directly to that educational opportunity. His platform is built around ensuring that every Californian has the same chance he had: he would not vote to raise tuition (a firm commitment), would cut administrative bloat to keep costs down, would slash remedial coursework that forces students to spend money on courses that don't count toward graduation, and would build more student and workforce housing on campus land.

      He would use his board seats to advance Black-owned business procurement in university contracting — ensuring that the economic activity generated by the university systems flows to communities that have historically been excluded. He also wants to streamline programs in high-demand fields like nursing, software development, and skilled trades — reducing time-to-credential and ensuring that students graduate into jobs rather than debt. His campaign is backed by former Obama adviser Valerie Jarrett, Rep. Lateefah Simon, and former Senator Laphonza Butler, reflecting his standing in the progressive wing of the Democratic Party that views education equity as a civil rights issue.`,
      citations: ["lg5", "lg6", "lg1"],
    },
    costliving: {
      text_long: `Tubbs's cost-of-living agenda is the most explicitly redistributive of any Lt. Gov. candidate. He would freeze tuition at UC and CSU, build more campus housing through bonds, advocate for guaranteed income programs that give low-income Californians a financial floor, address food insecurity on campuses, and collect a data dividend from AI and tech companies to fund public services. The underlying theory is that California's economy produces enormous surplus value that is captured by a small number of corporations and individuals, and that the Lt. Gov. — through the bully pulpit, the board votes, and the advocacy role — can shift some of that value back toward working people.

      He is also clear-eyed about what the Lt. Gov. cannot do: the office cannot pass legislation, cannot appropriate funds, and cannot compel the governor or legislature to act. His impact would depend on coalition-building, persuasion, and using the board seats strategically. His model — piloting in Stockton what he hopes to scale statewide — suggests he understands this constraint and has developed a strategy for working within it.`,
      citations: ["lg5", "lg6"],
    },
  },

  // ============================================================
  // GLORIA ROMERO (R — Conservative)
  // ============================================================
  romero: {
    housing: {
      text_long: `Romero's housing platform is built around the State Lands Commission and Coastal Commission — the two offices where the Lt. Gov. has the most direct influence over land use. She would push both commissions to open more public land for housing development, streamlining approvals and cutting the bureaucratic process that she says currently takes longer than actual construction. She frames this as a cross-partisan issue: building more housing requires deregulation and efficiency that Democrats have been unable to deliver under one-party rule.

      She describes herself as the candidate who is not a "parking spot" for politicians waiting to run for governor — and education and wildfire, not housing, are her primary campaign focuses. Her housing approach is more limited than the Democratic candidates: she would use the commissions she sits on to remove obstacles, but she would not propose new financing programs or mandate that universities build student housing. Her housing argument is essentially the deregulatory Republican argument applied to the specific tools available to the Lt. Gov.`,
      citations: ["lg7", "lg2"],
    },
    homeless: {
      text_long: `Romero attributes California's homelessness crisis to Democratic one-party rule and the progressive policies that have dominated the state for the last decade. She does not have a detailed alternative policy platform for homelessness — her critique is that the current system has spent billions without accountability or results, and that basic common sense and results-orientation would improve outcomes. She is more emphatic about what she would stop (funding without accountability, policies that enable rather than treat addiction) than about what she would start.

      Her general approach would align with Hilton's: clear encampments, require sobriety as a condition of shelter, and demand accountability from service providers and local governments before releasing state funds. The Lt. Gov. has limited direct authority over homelessness policy, and Romero has been honest that the office is primarily a platform and a set of board seats — she would use that platform to advocate for accountability reforms and to push back on Democratic policies she views as enabling rather than solving the crisis.`,
      citations: ["lg7", "lg12"],
    },
    economy: {
      text_long: `Romero switched from Democrat to Republican in 2024 after years of expressing frustration with what she saw as the California Democratic Party's capture by progressive special interests — teachers unions, environmental groups, and social justice advocates — at the expense of ordinary working Californians. Her economic message aligns with Hilton's: lower taxes, less regulation, attract businesses back to California, and hold government accountable for results rather than process. She is running on a joint ticket with Hilton, which means her economic proposals are largely extensions of his.

      Within the Lt. Gov.'s specific economic development mandate, she would use the Commission for Economic Development to focus on job creation in industries that California's progressive regulatory environment has made difficult: energy production, manufacturing, and small business development. She would oppose new regulations and taxes that she views as adding cost without commensurate benefit. Her appeal to disillusioned moderate Democrats and working-class Latino voters is based on the argument that Democratic economic policy has failed those constituencies and that accountability without ideology is the answer.`,
      citations: ["lg12", "lg1"],
    },
    energy: {
      text_long: `Romero would use her State Lands Commission seat to support new oil exploration on state-owned land — a position that puts her sharply to the right of every Democratic candidate in the field. She views California's progressive energy mandates as a primary driver of the state's high energy costs and views the Lt. Gov.'s land management authority as a tool for expanding, not contracting, fossil fuel production during what she sees as a necessary transition period. She supports clearing underbrush and improving forest management as the primary wildfire prevention tool, rejecting the framing that climate change is the root cause.

      She is skeptical of the timeline and feasibility of California's clean energy mandates and would use her board seats to push for more pragmatic energy policies that balance environmental goals with economic affordability. Her joint ticket with Hilton means her energy position is effectively an extension of his: fossil fuels as a transition fuel, rollback of environmental regulations, and cooperation with rather than resistance to the Trump administration's energy agenda.`,
      citations: ["lg2", "lg7"],
    },
    immigration: {
      text_long: `Romero endorsed Trump and is running on a joint ticket with Hilton, whose immigration position is full cooperation with ICE and repeal of California's sanctuary law. Her own immigration views align with this position: she supports enforcing federal immigration law, is skeptical of sanctuary policies, and frames immigration enforcement as a public safety rather than a civil rights issue. Her background as a former East LA Democrat who represented heavily immigrant constituencies makes her political conversion on immigration particularly striking.

      She has argued that the Democratic Party's failure to enforce immigration law has hurt working-class Latino communities by suppressing wages and straining public services. This is a contested empirical claim, but it is the argument she uses to explain her switch. The Lt. Gov. has limited direct authority over immigration enforcement, but Romero's platform would use the office's bully pulpit to advocate for cooperation with federal enforcement and to oppose state policies that she views as protecting criminal aliens at the expense of public safety.`,
      citations: ["lg12"],
    },
    wildfire: {
      text_long: `Wildfire is one of Romero's two signature issues, alongside education. Her campaign website describes her rejection of what she calls a "Let Them Burn" approach — blaming California's progressive environmental policies for restricting the forest management, prescribed burns, and fuel reduction work that she says would have made the LA fires smaller and slower. She would restructure and streamline the State Lands and Coastal Commissions — which she says currently answer to Sacramento special interests rather than to the communities whose land they manage — and would use that authority to accelerate fire prevention work and post-fire rebuilding.

      From Paradise to Malibu to Pacific Palisades and Altadena, she argues that families have paid the price for bad policy, slow permitting, and leaders who care more about process than people. She would collaborate with federal partners — Trump's administration — where it makes sense, cut red tape that is slowing rebuilding permits, and push for smarter land management that puts people and communities ahead of environmental review processes. This is the area where she believes she can have the most direct, measurable impact as Lt. Gov.`,
      citations: ["lg7", "lg2"],
    },
    budget: {
      text_long: `Romero's budget philosophy, aligned with Hilton's, is that California government has grown fat, inefficient, and beholden to special interests that extract value from taxpayers without delivering results. She would use the Lt. Gov.'s positions on the higher education boards to push for reduced administrative bloat — the growth in university administrators, diversity officers, and non-teaching staff that she and other conservatives argue has driven up tuition without improving educational outcomes.

      She would not propose new taxes or spending programs and would likely oppose the revenue measures that Democratic Lt. Gov. candidates are backing. Within the boards she sits on, she would push for private partnerships and alternative revenue sources to reduce reliance on state general fund, consistent with the Republican preference for market solutions over government spending. Her approach is more about stopping what she sees as wasteful spending than building new programs.`,
      citations: ["lg12", "lg7"],
    },
    healthcare: {
      text_long: `Healthcare is not among Romero's primary focuses for the Lt. Gov. race. Her general orientation — aligned with Hilton's — is skeptical of state-run healthcare expansion and opposed to single-payer systems that she views as government takeovers. She would protect existing programs for the most vulnerable Californians but would not advocate for expanded Medi-Cal eligibility or new healthcare mandates.

      Her most relevant healthcare-adjacent position is on the higher education boards: she would push for curricula that lead to employment in healthcare fields, supporting the community college-to-healthcare-career pipeline as a workforce development strategy. Her focus on academic standards and merit-based admissions, however, puts her in tension with the progressive approach to expanding access for underrepresented students who are disproportionately represented in healthcare and social work programs.`,
      citations: ["lg7"],
    },
    ai: {
      text_long: `Romero has not released a detailed AI policy platform. Her general pro-business, anti-regulation disposition implies opposition to new AI fees or mandates that would burden California's tech sector. She has not specifically addressed AI in the context of the Lt. Gov. race and has focused her public positioning on education, wildfire, and her break with the Democratic Party.

      On the higher education boards, she would likely support using AI tools to improve institutional efficiency — reducing administrative costs, streamlining enrollment and credentialing processes — without requiring the curriculum overhauls or faculty retraining that a more aggressive AI integration agenda might demand. Her approach is likely to be permissive toward AI in education where it reduces cost and improves outcomes, and resistant to regulatory requirements that she views as adding compliance burden without commensurate benefit.`,
      citations: ["lg7"],
    },
    education: {
      text_long: `Education is Romero's defining issue and the reason she entered politics in the first place. As California Senate Majority Leader — the first woman to hold that role — she championed charter school legislation, school choice, and teacher accountability reforms that put her at odds with the California Teachers Association even when she was a Democrat. She switched parties in part because she felt the Democratic Party had become captive to teacher unions and was no longer willing to put students' interests ahead of adult employment interests.

      Her specific proposals for the Lt. Gov. role include: restoring merit in admissions to UC and CSU (opposing race-conscious admissions practices), protecting academic standards (opposing what she calls the lowering of standards to achieve diversity), slashing remedial coursework that she says sets students up for failure by admitting them to programs they are unprepared for, supporting school vouchers that let parents use taxpayer dollars for private schools, and creating a K-12 to higher education pipeline focused on academic preparation rather than social engineering. These positions put her in direct conflict with the teachers unions that have endorsed other candidates and are the clearest ideological contrast in the race.`,
      citations: ["lg1", "lg7", "lg9"],
    },
    costliving: {
      text_long: `Romero's cost-of-living message is an extension of her broader critique of one-party Democratic rule: California's high costs are a product of failed progressive policies, and the solution is accountability, common sense, and deregulation rather than new programs and new taxes. She would use the State Lands Commission to open more land for housing and energy development, the Coastal Commission to streamline permitting for rebuilding and development, and the higher education boards to reduce administrative bloat and generate private revenue.

      Her joint-ticket alignment with Hilton means her cost-of-living proposals are effectively his: lower taxes (including gas and income taxes), fewer regulations, open more land for housing and fossil fuel production. Within the specific authority of the Lt. Gov., she would push those positions through the commissions and boards she sits on. She frames herself as the accountability candidate — the one who will ask hard questions and challenge the status quo — rather than the candidate with a detailed legislative agenda.`,
      citations: ["lg12", "lg7"],
    },
  },

  // ============================================================
  // JANELLE KELLMAN (D — Progressive)
  // ============================================================
  kellman: {
    housing: {
      text_long: `Kellman's housing platform draws on her decade in Sausalito local government — planning commission, city council, and mayor — where she worked on the intersection of sea-level rise, climate resilience, and housing affordability in one of the Bay Area's most expensive and environmentally vulnerable communities. As mayor, she secured nearly $2 million in funding for coastal resilience and housing equity projects. She would use the Lt. Gov.'s higher education board seats to commit at least one million units of student and workforce housing on public and campus land, and the State Lands Commission to manage coastal land in ways that support rather than obstruct housing development.

      Her climate attorney background gives her a specific lens on housing that other candidates lack: she understands that sea-level rise, wildfire, and extreme heat will make some locations increasingly expensive to insure and inhabit over the coming decades, and that housing policy must account for this. Rather than simply building more housing everywhere, she advocates for building in locations that are climate-resilient — near transit, away from the highest fire and flood risk — and for investing in the mitigation infrastructure that makes existing housing safer and more insurable.`,
      citations: ["lg14", "lg15"],
    },
    homeless: {
      text_long: `As Sausalito mayor, Kellman declared a local state of emergency for a homeless encampment that had grown on the shores of Richardson Bay and led a humanitarian response — providing services, transitional housing, and eventual relocation — that reduced local homelessness by more than half. This hands-on experience distinguishes her from candidates who address homelessness primarily through legislative proposals. She understands the operational complexity of moving people from encampments into services, the political resistance from neighboring communities, and the gap between state-level policy and local implementation.

      She frames homelessness as downstream of both housing costs and climate disruption: the people most likely to become homeless are those with the fewest financial resources, and climate-driven insurance costs, utility bills, and natural disasters are now pushing more moderate-income families into housing instability for the first time. Her response is to attack both the supply problem — more campus and public land housing — and the stability problem — resilience infrastructure that reduces the frequency of climate disasters that destroy people's financial stability.`,
      citations: ["lg13", "lg14"],
    },
    economy: {
      text_long: `Kellman's economic platform centers on the blue economy and clean tech — sectors where California has a natural competitive advantage and where she has direct expertise. She founded an international blue economy job creation program with Barcelona and the World Ocean Council, and would use the Lt. Gov.'s economic development commission role to expand California's maritime and ocean technology sectors. She would also push for clean energy apprenticeships and skilled trade credentialing through community colleges, creating a direct pathway from high school to well-paying employment in the industries that California's climate commitments will require.

      Her universal service year concept is similar to Fryday's but with a specific blue economy orientation: young Californians who do a year of coastal restoration, ocean monitoring, or sea-level rise infrastructure work would receive tuition credits and job credentials that open pathways into the emerging ocean economy. She sees this as both a workforce development strategy and a civic investment — building a generation of Californians with direct experience in the climate crisis and the skills to address it.`,
      citations: ["lg15", "lg14"],
    },
    energy: {
      text_long: `Energy is Kellman's deepest policy area and the most developed part of her platform. She would cut electricity bills in half over the next decade by changing how wildfire prevention is funded — shifting those costs off electricity ratepayers and onto the general fund or other revenue sources. This is her most specific and distinctive proposal in the field: other candidates talk about lowering electricity bills but without specifying how; Kellman has identified the wildfire prevention cost pass-through as the specific mechanism driving bill increases and proposed a specific fix.

      She serves on the Board of Marin Clean Energy — a community choice aggregator — giving her direct experience with how electricity rates are set, how clean energy procurement works, and how the relationship between utilities and local governments shapes ratepayer costs. She is endorsed by California Environmental Voters, the same organization that has endorsed Fryday in this race, and she would prioritize clean energy permitting through the State Lands Commission and coastal land-use decisions through the Coastal Commission. Her foundation work on sea-level rise informs her energy approach: coastal infrastructure, including undersea cables and port facilities, needs to be hardened against rising seas while the state decarbonizes its energy supply.`,
      citations: ["lg13", "lg16"],
    },
    immigration: {
      text_long: `Kellman is a member of the LGBTQ community and received endorsements from the LGBTQ Stonewall Democratic Club and the California Legislative Jewish Caucus. She supports California's sanctuary protections and frames immigration as a community inclusion and workforce issue. She has not made immigration a primary focus of her campaign, which is centered on climate, housing, and energy.

      Her most relevant immigration-adjacent position is on workforce development: many of the construction, clean energy, and maritime jobs she wants to credential through community colleges are filled by immigrant workers, and she supports expanding access to training and credentialing programs regardless of immigration status. She views the threat of aggressive federal immigration enforcement as an economic disruption — it takes workers off job sites, reduces labor supply in shortage occupations, and creates fear in communities that undermines social cohesion.`,
      citations: ["lg14", "lg15"],
    },
    wildfire: {
      text_long: `Wildfire is inseparable from Kellman's core issue set. Her sea-level rise and coastal resilience nonprofit was founded on the premise that climate change is already reshaping where and how Californians can safely live, and wildfire is the inland expression of that same transformation. She would work with the insurance commissioner to reduce premiums for homeowners who take preventive mitigation measures — her specific contribution to the insurance crisis — and would use the State Lands Commission to invest in climate resilience infrastructure that reduces fuel loads and creates fire breaks on public land.

      Her electricity cost reduction proposal — shifting wildfire prevention costs off electricity bills — is directly relevant to the wildfire insurance crisis: if utilities' wildfire liability is managed through the general fund rather than rate increases, and if ratepayers' bills come down as a result, the insurance market dysfunction caused by the interconnection of utility liability, climate risk, and rate setting becomes more manageable. She is thinking about wildfire as a systemic problem that requires a systemic financial solution, not just better fire management.`,
      citations: ["lg13", "lg16"],
    },
    budget: {
      text_long: `Kellman's most fiscally specific proposal — shifting wildfire prevention costs off electricity ratepayers — is also a budget proposal: it would require either a general fund appropriation or a new dedicated revenue source to replace what utilities currently charge customers. She has not specified where that revenue would come from, which is the central gap in her electricity cost reduction plan. She is generally supportive of progressive revenue measures and opposes austerity solutions.

      On the higher education budget, she would pursue the same private partnership and alternative revenue strategies as Ma and other candidates — making universities generate more of their own revenue through private leasing and industry partnerships. She does not have the same depth of fiscal experience as Ma, but she has been engaged with local government finance in Sausalito for a decade and understands the practical constraints that limit what public institutions can do with limited budgets.`,
      citations: ["lg13"],
    },
    healthcare: {
      text_long: `Kellman has not developed a detailed healthcare platform for the Lt. Gov. race. Her general commitment is to protecting access to healthcare for all Californians and to using the Lt. Gov.'s convening power to address the healthcare workforce shortage through community college credentialing. Her climate background is relevant here: extreme heat, wildfire smoke, and flooding create significant public health burdens that are not currently fully accounted for in healthcare planning, and she would push for climate-health integration in the programs overseen by the higher education boards.

      She has also noted that she would work to ensure that Lt. Gov. board votes on the UC and CSU systems support student health programs — mental health services, basic needs programs, and healthcare navigation — that address the documented crisis of student well-being in California's higher education institutions.`,
      citations: ["lg15"],
    },
    ai: {
      text_long: `Kellman's AI position, like her other economic development positions, is focused on industries with natural advantages in California's economy. She would use the Lt. Gov.'s economic development role to support AI development in sectors where California leads — climate modeling, ocean data analysis, clean energy optimization — while ensuring that the benefits flow broadly rather than concentrating in a small number of companies. She has not proposed specific AI fees or regulations.

      Her climate work is increasingly AI-dependent: sea-level rise models, wildfire prediction systems, and energy grid optimization all rely on machine learning. She views AI as a critical tool for the climate crisis and would push the university systems to develop AI expertise across all fields, particularly in the environmental and engineering programs most relevant to California's climate challenges.`,
      citations: ["lg15"],
    },
    education: {
      text_long: `Kellman's education platform is organized around two priorities: making community college free for all California residents and expanding vocational and career-aligned training in clean energy, housing construction, and skilled trades. Free community college addresses the access barrier that prevents many Californians — particularly from lower-income families, first-generation students, and working adults — from building the skills that lead to economic mobility. Career-aligned vocational training addresses the content barrier: programs that lead directly to jobs in growing industries rather than generic degrees with uncertain economic value.

      She would also push for campus communities that are safe and inclusive — using the board seats to require campuses to have functioning Title IX processes, anti-discrimination policies, and mental health services. Her LGBTQ identity and endorsements from LGBTQ organizations reflect a personal stake in these institutional accountability requirements. She would measure educational success not by enrollment statistics but by employment outcomes and student loan default rates — holding institutions accountable for the economic value they deliver.`,
      citations: ["lg13", "lg16"],
    },
    costliving: {
      text_long: `Kellman's most integrated cost-of-living argument is that climate resilience and economic resilience are the same thing: preventing wildfires reduces insurance costs, preventing sea-level rise protects property values, and investing in clean energy reduces utility bills over time. Her specific proposal to cut electricity bills in half by shifting wildfire prevention costs off ratepayers is the most concrete cost-of-living commitment in the Lt. Gov. field. Free community college would reduce the cost of higher education. More campus and public land housing would reduce rents and increase housing supply.

      She is running as the candidate who understands that California's cost-of-living crisis is partly a climate crisis in disguise — that the insurance dysfunction, the utility bill spikes, and the post-disaster rebuilding costs are all downstream of the failure to invest adequately in climate resilience. Her solution is to make those investments proactively, using the Lt. Gov.'s specific tools, rather than continuing to pay the much higher costs of climate failure after the fact.`,
      citations: ["lg13", "lg15"],
    },
  },

  // ============================================================
  // OLIVER MA (D — Progressive / Democratic Socialist)
  // ============================================================
  oliver_ma: {
    housing: {
      text_long: `Oliver Ma's housing platform is the most structurally radical of any Lt. Gov. candidate. He would ban corporate landlords from buying single-family homes — using the Lt. Gov.'s chair role on the Economic Development Commission to advocate for this policy — and supports repealing Costa-Hawkins (which prevents cities from expanding rent control), repealing the Ellis Act (which allows landlords to evict tenants when exiting the rental market), statewide rent control, a right to counsel for tenants in eviction proceedings, and banning no-fault evictions. He frames housing as a human right, not a commodity, and views the concentration of single-family home ownership in corporate hands as one of the primary drivers of housing unaffordability for working families.

      He would use the State Lands Commission to protect California's public lands from fossil fuel extraction — viewing the two as connected: land used for fossil fuel extraction is land that could be used for housing, clean energy, or ecological preservation. His vision for the State Lands Commission is explicitly anti-fossil fuel: he would vote against new oil and gas leases on state land and for redirecting those acres toward housing construction and ecological restoration. He is the first statewide candidate to be endorsed by the California Democratic Socialists of America.`,
      citations: ["lg17", "lg18", "lg19"],
    },
    homeless: {
      text_long: `Ma frames homelessness as inseparable from California's housing affordability crisis: the same forces that prevent renters from finding affordable housing — corporate landlord consolidation, inadequate rent protections, no-fault evictions — push people into homelessness when they are displaced. His solutions are structural: statewide rent control to prevent the rent increases that trigger housing instability, a right to counsel to prevent evictions that lead to homelessness, and a ban on no-fault evictions that are disproportionately used against lower-income tenants.

      He would also use the State Lands Commission to prevent fossil fuel extraction on state land and redirect those resources toward community benefit — which he connects to homelessness through the climate crisis: fossil fuel production contributes to the climate disruption that makes wildfires more destructive, which destroys homes and displaces families, increasing homelessness. His campaign does not accept corporate PAC money, which he frames as evidence of his independence from the landlord and real estate development interests he is targeting with his housing platform.`,
      citations: ["lg17", "lg18"],
    },
    economy: {
      text_long: `Ma's economic platform is the most explicitly pro-worker and anti-corporate of any Lt. Gov. candidate. He supports AB 288 and a California alternative to the National Labor Relations Board — arguing that federal labor law under Trump is no longer protecting workers' organizing rights and that California needs its own enforcement mechanism. He also supports statewide fair scheduling laws (requiring employers to give workers advance notice of shifts), prioritizing labor peace agreements in state grants and contracts, and strict limits on employer surveillance and AI-based monitoring tools.

      He would use the Lt. Gov.'s Economic Development Commission role to redirect state economic development investment away from industries that suppress wages, undermine unions, or exploit workers, and toward cooperatives, worker-owned enterprises, and businesses with strong labor standards. He has committed to accepting no corporate PAC money, which he frames as a structural commitment to independence from the corporate interests whose economic practices he is challenging.`,
      citations: ["lg17", "lg19"],
    },
    energy: {
      text_long: `Ma's energy position is organized around the State Lands Commission: he would vote to protect California's lands and coastlines from fossil fuel companies, opposing new oil and gas leases on state land and supporting the transition of existing lease areas toward clean energy development. He is the most explicitly fossil fuel-abolition candidate in the Lt. Gov. field — where other candidates talk about "transition" timelines, Ma wants to end fossil fuel extraction on state land immediately.

      He frames this as both a climate and an environmental justice issue: the communities most harmed by fossil fuel extraction — from oil spills to refinery emissions to drilling noise and light pollution — are disproportionately communities of color and low-income communities. Ending extraction on state land is a specific, concrete action the Lt. Gov. can take that would deliver immediate environmental benefits to those communities while also accelerating the clean energy transition.`,
      citations: ["lg17", "lg18"],
    },
    immigration: {
      text_long: `Immigration is the defining issue of Ma's career. He spent years as an immigrant rights attorney taking ICE to federal court — and winning. He sued the Trump administration over illegal ICE raids and obtained court orders protecting California residents from unconstitutional enforcement. As Lt. Gov., he would use every available platform to hold ICE accountable for illegal raids, shut down for-profit immigration detention centers in California, support community rapid response networks that alert residents to ICE activity, and reinforce the anti-commandeering doctrine that limits state and local law enforcement's obligation to assist federal immigration enforcement.

      He is the candidate who has most clearly operationalized immigrant rights as a legal strategy rather than just a policy position. His experience in federal court gives him credibility with immigrant communities who have seen advocacy organizations promise protection and deliver uncertain results. He views the Lt. Gov.'s bully pulpit as a tool for amplifying the legal rights that immigrants already have but are often too afraid to exercise — and for making clear that California's state government will not be complicit in federal enforcement that violates the Constitution.`,
      citations: ["lg17", "lg18", "lg19"],
    },
    wildfire: {
      text_long: `Ma connects wildfire directly to fossil fuel extraction: the companies that have extracted oil and gas in California for a century are, in his framing, materially responsible for the climate conditions that have made wildfire so much more destructive. He would use the State Lands Commission to end new fossil fuel extraction on state land and to redirect state land management toward ecological restoration and fire-resilient land use. He would also oppose any public investments that support fossil fuel infrastructure expansion, including pipeline approvals and refinery permits that come through the State Lands Commission.

      He has not proposed specific wildfire prevention programs or insurance market reforms — his contribution to the wildfire debate is structural: end the fossil fuel extraction that is driving the climate crisis, and the wildfire problem gets less severe over time. Critics argue this is too long-term to address the immediate insurance and rebuilding crisis facing California homeowners; his supporters argue that without addressing the root cause, every other intervention is just managing decline.`,
      citations: ["lg17"],
    },
    budget: {
      text_long: `Ma's budget proposals center on divesting the UC and CSU endowments — which total more than $32 billion — from fossil fuel companies and from companies linked to Israeli settlement activity in the occupied territories, and redirecting those investment dollars toward community benefit: schools, clinics, affordable housing, and climate resilience infrastructure. This is the most distinctive and controversial budget proposal in the Lt. Gov. race, reflecting his Democratic Socialist politics and his active engagement with anti-war and Palestinian rights movements.

      He also opposes corporate and billionaire political spending and would push for greater transparency in how UC and CSU endowments are invested. He accepts no corporate PAC money and frames this as a structural commitment: if the Lt. Gov. is funded by the same corporations whose divestment he is demanding, he cannot credibly demand it. His broader revenue philosophy — consistent with his DSA endorsement — is that the wealth currently concentrated in corporate endowments and billionaire fortunes should be democratized through taxation, divestment, and community investment.`,
      citations: ["lg17", "lg19"],
    },
    healthcare: {
      text_long: `Ma supports implementing single-payer healthcare in California and would use the Lt. Gov.'s Senate president role to advance universal coverage legislation — using tie-breaking authority when needed to move single-payer bills that are blocked by corporate-aligned Democrats. He frames single-payer as inseparable from his broader economic platform: as long as healthcare is tied to employment and ability to pay, workers are less able to organize, change jobs, or refuse exploitative conditions without risking their health coverage.

      He has also pledged to accept no corporate PAC money from pharmaceutical companies or insurance companies — the industries that have most consistently blocked single-payer in the California legislature. His campaign's financial independence from those industries is his primary credential for healthcare reform: voters who believe single-payer has been blocked by corporate money, not by policy logic, see his funding model as evidence that he would actually fight for it.`,
      citations: ["lg17", "lg18"],
    },
    ai: {
      text_long: `AI is an economic and labor rights issue for Ma, not a tech policy issue. He supports strict limits on workplace AI that monitors, profiles, or automates disciplinary and firing decisions — arguing that employer surveillance tools built on AI are being used to suppress organizing, optimize exploitation, and undermine worker dignity. He would use the Lt. Gov.'s economic development role to scrutinize state grants and contracts with companies whose AI tools are used for employer surveillance or military applications.

      He would also push the university systems to develop AI ethics curricula that address the political economy of AI — who benefits, who is harmed, and what governance structures are needed to ensure that AI serves human flourishing rather than shareholder returns. His data dividend proposal — requiring AI companies to share their profits with the workers and communities whose data powers their products — is similar to Tubbs's, and reflects the DSA's broader view that the value created by platform economies should be socialized rather than captured by private shareholders.`,
      citations: ["lg17"],
    },
    education: {
      text_long: `Education reform, through the specific lens of higher education governance, is Oliver Ma's most actionable policy area as Lt. Gov. He would vote to make UC, CSU, and community college tuition completely free — a flat commitment with no income testing — funded by the divestment of endowments from fossil fuels and other harmful investments and redirected toward student support. He would also push for divesting from companies tied to Israeli apartheid, reflecting his active engagement with Palestinian rights advocacy.

      He would use the board seats to cosponsor legislation protecting immigrant students and undocumented students on campus — extending sanctuary protections into the higher education institutions that enroll hundreds of thousands of students with uncertain immigration status. He would also push for Black-owned business contracting in university procurement and for faculty and staff hiring that reflects California's demographic diversity. His education platform is the most explicitly political of any Lt. Gov. candidate — he sees the university systems as sites of political struggle, not just administrative institutions.`,
      citations: ["lg17", "lg18", "lg19"],
    },
    costliving: {
      text_long: `Ma's cost-of-living agenda is structured as a redistribution of wealth from corporations and the wealthy to working Californians. Free tuition funded by endowment divestment. Statewide rent control. A ban on corporate landlords buying single-family homes. Single-payer healthcare that eliminates premiums and medical debt. A data dividend that gives residents a share of tech company profits. These proposals, if enacted, would dramatically reduce the cost burden on working families — but they require either legislative action or a governor aligned with his platform, since the Lt. Gov. cannot pass legislation independently.

      He is explicit about the constraints of the office: the Lt. Gov. has the bully pulpit, the board seats, and the Senate tie-breaking vote, but cannot compel the legislature or the governor to act. His strategy is to use the office as a platform to build the political coalition needed for structural reform — organizing working people, immigrant communities, and the progressive left into a force that can win legislative majorities for the policies he is proposing. He is running, in part, to demonstrate that a Democratic Socialist can win statewide office in California.`,
      citations: ["lg17", "lg18"],
    },
  },

};
