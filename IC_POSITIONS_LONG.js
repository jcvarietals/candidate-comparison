// ============================================================
// INSURANCE COMMISSIONER — LONG-FORM POSITION DESCRIPTIONS
// text_long field for popup detail view.
// Claude Code: merge text_long into matching INS_POSITIONS
// objects. Includes all 7 candidates.
//
// The Insurance Commissioner regulates the largest
// property/casualty insurance market in the nation.
// Sets rates, licenses carriers, handles complaints,
// and oversees the FAIR Plan (insurer of last resort).
// All positions are grounded in these actual powers.
// ============================================================

export const INS_POSITIONS_LONG = {

  // ============================================================
  // BEN ALLEN (D — Progressive)
  // State Senator, SD-24; district devastated by LA wildfires
  // ============================================================
  allen: {
    ins_homeowner: {
      text_long: `Allen is the only major candidate whose state senate district was directly devastated by the 2025 Los Angeles wildfires — he has watched constituents lose their homes, fight State Farm for claims payments, and struggle to find replacement coverage in a market that has largely abandoned them. This personal and political experience gives him a different urgency than candidates who approach the issue analytically. He has called State Farm's 400 documented violations of California claims law "grotesque malfeasance" and says the Department of Insurance is "too lax regulating insurer behavior, yet too strict controlling market access" — with customers losing on both counts.

      He would reorganize the Department of Insurance around consumer advocacy: appointing a dedicated consumer advocate inside the department, banning commissioners from transitioning to industry employment after leaving office (the revolving door that he argues has made regulators too sympathetic to the companies they oversee), and requiring that the Department publish an annual transparency report grading insurers on claims performance, premium growth, and consumer complaints. He is endorsed by California Professional Firefighters, who have seen firsthand the devastation that inadequate insurance causes for communities after disasters.`,
      citations: ["ic1", "ic5"],
    },
    ins_fair: {
      text_long: `Allen's FAIR Plan strategy has two phases: emergency stabilization and long-term market restoration. In the near term, he supports implementing AB 226, which would authorize the FAIR Plan to issue bonds to finance claims — giving it a much larger claims-paying capacity than its current assessment-based model allows. He also wants to expand the FAIR Plan's coverage offerings beyond basic fire protection, allowing it to compete with private carriers on the full range of homeowner coverage needs.

      For the long term, his goal is to move FAIR Plan customers back to the private market by making private coverage more available and available at reasonable prices. He would accomplish this through a combination of stronger insurer accountability requirements — carriers that want to sell any insurance in California must maintain a meaningful homeowner's market presence — and home hardening grants and financing that make high-risk properties more insurable in private markets. He judges long-term success by a specific set of metrics: faster rate approvals, more insurers in the market, fewer FAIR Plan policies, and strong consumer protections.`,
      citations: ["ic2", "ic5"],
    },
    ins_wildfire: {
      text_long: `Allen's approach to wildfire risk and insurance rate-setting starts from the premise that the current system is broken in both directions: it has allowed insurers to leave the market without adequate consumer protection, and it has failed to create the right incentives for home hardening and community-level risk reduction. His proposed fix operates on both sides of that equation: tighten accountability for carriers that exit or non-renew (requiring more notice, more documentation, and more justification), and create a structured program of grants and low-interest financing that helps homeowners in high-risk areas actually implement the fire safety measures that insurers say they want to see.

      He is particularly focused on the gap between what Cal Fire and the Insurance Department recommend for home hardening and what insurers actually use in their underwriting decisions. Currently, homeowners can do everything the government says to do and still find their rates unchanged or their policy cancelled — because the link between publicly recommended mitigation and actuarial credit for those measures is weak. He would require insurers to provide meaningful, quantified discounts for mitigation measures, creating the financial incentive that currently does not exist.`,
      citations: ["ic1", "ic5"],
    },
    ins_climate: {
      text_long: `Allen is the most explicitly climate-accountability-oriented candidate in the race. He supports revealing insurers' fossil fuel investments and using that information in rate review proceedings — arguing that companies that profit from the industries causing climate risk should not also be able to raise rates on the communities bearing that risk without acknowledging the connection. He would require insurers to use forward-looking, science-based climate models in their actuarial analyses rather than backward-looking historical data that understates future risk.

      He is endorsed by California Environmental Voters and the Sierra Club, the two most prominent state-level environmental organizations, which reflects his alignment with the climate advocacy community's view that the insurance crisis is a climate crisis and must be addressed as such. He would also explore the commissioner's authority to require disclosure of insurers' climate risk management strategies — similar to the Securities and Exchange Commission's climate disclosure rules — as a way of making climate risk visible to investors and policymakers as well as regulators.`,
      citations: ["ic1", "ic3"],
    },
    ins_prop103: {
      text_long: `Allen views Prop 103 as a fundamentally sound consumer protection framework that needs updating rather than replacement. He supports streamlining the rate review process — expediting reviews of straightforward, justified rate requests while maintaining rigorous scrutiny of rate increases that seem excessive or unjustified — so that carriers have more certainty about their rate timeline without losing the public's right to participate in the process. He has been critical of how the current rate review process has been gamed by both insurers (who file incomplete applications to restart the clock) and intervenors (who raise objections strategically to delay approvals).

      He would use the commissioner's authority to modernize the rate-filing process: requiring complete, well-documented applications as a condition of initiating review, setting binding timelines for department response, and ensuring that consumer advocates have the resources and access needed to participate meaningfully without the process becoming purely adversarial. He believes the right answer is a modernized Prop 103, not its repeal — and he is positioned as the candidate who best understands both the law's original intent and its current dysfunction.`,
      citations: ["ic7", "ic5"],
    },
    ins_claims: {
      text_long: `Claims performance is Allen's second signature issue, alongside fossil fuel accountability. He has authored multiple pieces of legislation aimed at the claims process: bills penalizing unnecessary claims delays, requiring increased payout minimums on contents coverage after total loss, and mandating more notice and documented reasons before insurers drop policies. These are specific, operational interventions — not just principles — that reflect his years of working on insurance consumer protection issues in the state Senate.

      He would use the commissioner's authority to create a mandatory public claims performance report — grading every insurer on how quickly they open and close claims, what percentage of claims are disputed, and how often they invoke each type of denial. This report would be provided to consumers at the point of purchase, giving them information they currently cannot easily find. He views the State Farm case — 400 documented violations, eventually settled, but with no criminal accountability — as evidence that civil enforcement alone is insufficient and that the commissioner needs stronger tools to sanction carriers for systematic claims abuse.`,
      citations: ["ic1", "ic5"],
    },
    ins_auto: {
      text_long: `Allen has not made auto insurance a primary campaign focus, which reflects both his district's specific context (the LA wildfire communities are his primary constituency) and his overall framing of the race as primarily about homeowner insurance market reform. He supports competitive, available, and affordable auto insurance and would apply the same consumer protection principles — transparent pricing, fair claims handling, accountability for bad actors — to auto as to homeowner insurance.

      California's auto insurance market has its own significant problems: the state's requirement that insurers use only three rating factors (miles driven, years of experience, and accident history, but not credit score or ZIP code) has led to pricing anomalies and market exits. Allen has not proposed specific reforms to the auto market but would likely apply his general framework of streamlining Prop 103 compliance to make the auto market more competitive and more transparent.`,
      citations: ["ic1"],
    },
    ins_highriskareas: {
      text_long: `Allen's approach to insurance availability in high-risk areas is the most investment-oriented in the field. He would create a structured grant and financing program — potentially funded through a small assessment on all California insurance premiums — to help homeowners in the highest fire risk areas implement the fire safety measures that would make them more insurable in the private market. This program would operate over a five-year window, with annual targets and public reporting on progress.

      He is also interested in community-level approaches: rather than requiring individual homeowners to harden their own properties, he would support pilot programs where neighborhoods collectively implement fire safety measures — creating defensible space at scale — with state financing and insurance incentives. The idea is that the risk reduction from community-wide hardening is greater than the sum of individual measures, and that pooled financing and collective action can reach households that cannot afford mitigation on their own.`,
      citations: ["ic2", "ic5"],
    },
    ins_carriers: {
      text_long: `Allen's carrier attraction strategy works through the demand side: if the Department of Insurance creates a more transparent, accountable, and efficiently regulated market, carriers that want to serve California homeowners can do so with confidence that their rates will be reviewed fairly and promptly. He would modernize the rate review process — not gut it — to provide the predictability that carriers need to plan their market presence. He would also require carriers that want to sell commercial, auto, or other lines in California to maintain a meaningful presence in the homeowner market, using the state's market access as a lever to prevent carriers from cherry-picking only the profitable lines.

      He distinguishes between carriers that are leaving because the regulatory environment makes honest business impossible — those can be brought back with regulatory reform — and carriers that are leaving because California is genuinely too risky at any price — those require longer-term risk reduction through mitigation and climate action. His approach is to fix the regulatory problems first and see how much of the market exit was regulatory rather than actuarial.`,
      citations: ["ic7", "ic9"],
    },
    ins_accountability: {
      text_long: `Allen's accountability framework is the most comprehensive in the field. He would appoint a dedicated consumer advocate within the Department of Insurance — someone whose job is to represent policyholders in rate proceedings, not to balance industry and consumer interests — and ban the commissioner and senior department staff from working for the insurance industry for a specified period after leaving public service. He views the revolving door as a structural problem that has made regulation systematically more permissive than it should be.

      On individual company accountability, he would use State Farm's 400 claims violations as the test case for a more aggressive enforcement approach: not just civil penalties, but denial of rate increases until documented violations are remedied, enhanced monitoring requirements, and public disclosure of enforcement actions. He believes the current enforcement toolkit is insufficient for the scale of the claims abuse problem, and that the commissioner needs both stronger penalties and faster procedures to be an effective consumer protector.`,
      citations: ["ic5", "ic1"],
    },
  },

  // ============================================================
  // STEVEN BRADFORD (D — Moderate)
  // Former State Senator; worked for Southern California Edison
  // ============================================================
  bradford: {
    ins_homeowner: {
      text_long: `Bradford approaches the homeowner insurance crisis as a market stabilization problem, not a consumer advocacy problem — a framing that reflects his pragmatic center-left politics and his years working in the energy sector, where market design and regulatory balance are constant challenges. He views the current situation as a failure of market structure: the combination of prior price suppression under Prop 103, unexpected climate-driven losses, and the resulting carrier exits has created a doom loop that only structural reform can break. His approach is to design a market that works for both consumers and carriers, rather than treating those interests as fundamentally opposed.

      He is backed by Teamsters, building trades unions, and other labor organizations that represent workers in the construction and service industries who depend on a functioning insurance market. He emphasizes that "faster approvals, more insurers, fewer FAIR Plan policies, and strong consumer protections" are his benchmarks for success — a formulation that explicitly includes both market access and consumer protection as co-equal goals.`,
      citations: ["ic1", "ic3"],
    },
    ins_fair: {
      text_long: `Bradford's FAIR Plan strategy is to use it as a transitional backstop while building the private market capacity to absorb its customers over time. In the near term, he supports implementing AB 226 to allow the FAIR Plan to issue bonds — giving it financial stability without requiring immediate restructuring. He is also open to allowing the FAIR Plan to offer more comprehensive coverage, which he argues would make it a more useful product for the customers who depend on it while also reducing the gap between FAIR Plan coverage and full homeowner protection.

      For the medium term, he wants to link FAIR Plan pricing to the private market in a structured way — so that as private market rates normalize (through his risk-sharing partnership), FAIR Plan customers have an incentive to return to private coverage without experiencing a sudden cliff in price. He judges success by the FAIR Plan's trajectory: it should be shrinking, not growing, as a share of California's insured properties.`,
      citations: ["ic2", "ic7"],
    },
    ins_wildfire: {
      text_long: `Bradford's most distinctive wildfire proposal is connecting insurance to land-use and planning: communities that build in the highest fire risk areas should factor insurance costs into their planning decisions from the outset, rather than building first and discovering the insurance problem later. He would push for state land-use policies that integrate insurance availability as a criterion in housing development approvals — not blocking development in fire-risk areas, but requiring that communities planning new development in those areas have a viable insurance strategy before breaking ground.

      He also supports a voluntary buyout program for homeowners in the very highest risk areas — giving people who want to leave the option to exit with state assistance — which he views as a compassionate alternative to leaving them stranded with uninsurable properties. This is consistent with his broader market stabilization approach: reduce the concentration of insured risk in the highest-risk areas over time, while ensuring that the people affected by that transition have meaningful choices.`,
      citations: ["ic1", "ic3"],
    },
    ins_climate: {
      text_long: `Bradford accepts that climate change is a real driver of increasing wildfire risk and supports incorporating forward-looking climate models into rate-setting — but he is more cautious than Allen about how that information is used. He worries that requiring climate model disclosure without giving carriers adequate rate flexibility to price the resulting risk will simply accelerate the market exit that is already happening. His approach is to allow actuarially sound rate increases that reflect genuine climate risk, while maintaining the consumer protection mechanisms that prevent price gouging.

      He is willing to work with insurers on climate risk modeling as a collaborative exercise — helping both sides understand the risk better — rather than treating it as an adversarial process. His Edison background gives him experience with long-term climate risk planning in a regulated industry, and he views the insurance commissioner's role as similar to a public utility regulator: setting the rules for a market that must balance public access with private investment.`,
      citations: ["ic2", "ic7"],
    },
    ins_prop103: {
      text_long: `Bradford's most specific operational proposal is that the Department of Insurance has only 34 claims reviewers statewide — a staffing level that is wildly inadequate for the volume of rate filings and claims reviews the department is expected to process. He would prioritize modernizing the department's staffing and operational systems as an immediate first step, arguing that many of Prop 103's problems are not with the law itself but with the department's capacity to implement it. A department with 200 claims reviewers and modern data systems could process legitimate rate filings in 60 days rather than 18 months.

      He supports the Sustainable Insurance Strategy reforms that outgoing Commissioner Lara has pursued — particularly allowing insurers to factor reinsurance costs into rate calculations — as a practical improvement within the existing Prop 103 framework. He views the law as a constraint to work within rather than a barrier to overcome, and believes that most of the market dysfunction can be addressed through better implementation rather than fundamental legal change.`,
      citations: ["ic5", "ic7"],
    },
    ins_claims: {
      text_long: `Bradford supports stronger claims performance standards and would expand the Department of Insurance's capacity to monitor and enforce claims requirements. He views the State Farm situation — 400 documented violations without meaningful consequences — as evidence that the current enforcement system is too slow and too weak. He would pursue faster and more predictable enforcement: clear standards for what constitutes a claims violation, faster investigation timelines, and more meaningful penalties that actually deter systematic abuse.

      He would also modernize the department's consumer complaint data and make it publicly available in a searchable, comparable format — allowing consumers, journalists, and advocates to identify patterns of insurer misbehavior that individual complaint data may obscure. He views transparency as the first line of consumer protection: if consumers can easily see which carriers have the worst claims records, market pressure will push those carriers to improve.`,
      citations: ["ic5", "ic7"],
    },
    ins_auto: {
      text_long: `Bradford views auto insurance through the same market stabilization lens as homeowner insurance: the goal is a competitive, functional market where consumers can get affordable coverage and carriers can earn a reasonable return. He supports streamlining Prop 103's rate review process for auto — expediting approvals that are clearly justified and reserving intensive scrutiny for rate increases that seem excessive.

      He has not proposed fundamental changes to California's auto insurance rating restrictions (which prohibit using credit score and ZIP code as rating factors) but would focus on making the current system work more efficiently. He recognizes that California's auto market has its own dysfunction — rates have risen sharply, and some carriers have exited — but views it as a lower priority than the homeowner market, where the crisis is more acute and his expertise is deeper.`,
      citations: ["ic7"],
    },
    ins_highriskareas: {
      text_long: `Bradford's high-risk area approach combines his land-use planning proposal with his public-private risk-sharing partnership. By requiring that new development in high-risk areas have viable insurance strategies from the start, he would prevent the problem from growing. By creating a risk-sharing mechanism that allows private carriers to write policies in high-risk areas with some state backstop against catastrophic losses, he would address the existing problem of communities that are already built in those areas and cannot get coverage.

      He views the high-risk area problem as fundamentally a risk concentration problem: when too many insured properties are clustered in fire-prone areas, a single fire event creates losses that no private carrier can sustain alone. His risk-sharing partnership is designed to spread that concentration risk across a broader base — private carriers, state reinsurance, and policyholders — so that no single party bears an unsustainable burden.`,
      citations: ["ic1", "ic3"],
    },
    ins_carriers: {
      text_long: `Bradford's carrier retention and attraction strategy is his most distinctive proposal: a public-private risk-sharing partnership modeled on flood insurance programs in other states, where private carriers write and service policies but share catastrophic wildfire risk with a state-backed reinsurance entity. This model gives carriers the pricing certainty and risk relief they need to stay in the California market, while ensuring that policyholders maintain the service relationship with a private carrier rather than being handed to a state bureaucracy.

      He views the partnership model as the middle path between Kim's public fund (too far from the market) and Korsgaden's pure deregulation (not sufficient to address the fundamental market failure). His Edison background has given him direct experience with public-private partnerships in regulated industries, and he is confident that the right partnership structure can attract carriers back to the market within two to three years.`,
      citations: ["ic1", "ic3"],
    },
    ins_accountability: {
      text_long: `Bradford's accountability approach is operational and systemic rather than punitive: he would modernize the Department of Insurance's enforcement infrastructure — more staff, better data systems, faster investigation procedures — so that violations are detected and addressed more quickly and consistently. He views the State Farm situation as evidence of a department that lacks the capacity to detect systematic abuse before it becomes a crisis rather than a department that was asleep at the switch.

      He would also establish clearer, more predictable enforcement standards: what actions constitute a violation, what the range of penalties is for different severity of violations, and how the department decides when to escalate from administrative action to formal enforcement. This predictability helps carriers understand what compliance requires, which reduces inadvertent violations, while also ensuring that deliberate abuse is detected and punished more reliably.`,
      citations: ["ic5", "ic7"],
    },
  },

  // ============================================================
  // JANE KIM (D — Progressive)
  // Former SF Supervisor; California Working Families Party leader
  // ============================================================
  kim_jane: {
    ins_homeowner: {
      text_long: `Kim's analysis of the homeowner insurance crisis starts from a structural premise: the private market has failed, and no amount of regulatory tinkering will fix a fundamentally broken market structure. Her proposed solution — Natural Disaster Insurance for All — is a state-run fund that would guarantee wildfire and flood coverage for all California homeowners, regardless of location or prior claims history. Policyholders would continue to buy ordinary homeowner insurance from private carriers; the state fund would activate for disaster losses, removing catastrophic wildfire and flood risk from private carriers' books and allowing them to price and write ordinary coverage normally.

      She draws on international models that have worked in practice: France's Catastrophes Naturelles scheme, which has operated since 1982; New Zealand's Earthquake Commission; and Spain's CCS (Consorcio de Compensación de Seguros), which covers a range of natural hazards through a mandatory surcharge on all insurance policies. She argues that California's problem is not unique in the world — many countries face concentrated natural disaster risk — and that the solutions other countries have developed offer tested templates that California can adapt.`,
      citations: ["ic1", "ic4", "ic6"],
    },
    ins_fair: {
      text_long: `Kim views the FAIR Plan as a symptom rather than a solution. Its rapid growth — from roughly 150,000 policies in 2020 to over 400,000 by 2025 — is evidence that the private market has withdrawn from the risk it is supposed to cover, leaving the state's insurer of last resort as a de facto primary insurer for large segments of the market. Her Natural Disaster Insurance for All fund would absorb the FAIR Plan's function: once the state fund handles disaster losses, there is no longer a need for a separate insurer of last resort for disaster risk, and the FAIR Plan can be wound down or converted to a specialized program.

      She would fund the state disaster fund through a mandatory surcharge on all insurance policies written in California — similar to how the FAIR Plan is currently funded through assessments on private carriers, but more stable and predictable. This approach spreads the cost across the entire insurance market rather than concentrating it on high-risk policyholders who are already struggling with affordability.`,
      citations: ["ic1", "ic4"],
    },
    ins_wildfire: {
      text_long: `Kim's natural disaster fund is specifically designed to solve the wildfire rate-setting problem: by removing wildfire losses from private carriers' books, carriers can price ordinary homeowner coverage without needing to embed catastrophic wildfire risk in every policy. The result, she argues, would be dramatically lower premiums for homeowners in non-fire-prone areas — who are currently cross-subsidizing wildfire risk they don't bear — and available (if state-priced) coverage for homeowners in fire-prone areas who currently cannot get coverage at any private market price.

      She would fund the state disaster fund partially through a small surcharge on oil industry operations in California — consistent with her view that the fossil fuel industry bears moral and financial responsibility for the climate conditions that are making wildfires more severe. This is the most explicit climate accountability mechanism in the race: making oil companies contribute to the fund that pays for the climate-driven disasters their products have exacerbated.`,
      citations: ["ic4", "ic6"],
    },
    ins_climate: {
      text_long: `Kim is the most explicitly climate-justice-oriented candidate in the race. She frames the insurance crisis not as a market failure or a regulatory failure but as a consequence of fossil fuel companies' decades-long campaign of climate denial — and she believes those companies should bear financial responsibility for the resulting harm. Her oil industry surcharge for the disaster fund is the specific mechanism, but her broader orientation is that California's insurance commissioner should be a climate accountability officer as well as a market regulator.

      She supports requiring forward-looking climate models in rate-setting, mandatory disclosure of insurers' fossil fuel investments, and using the commissioner's authority to scrutinize the climate implications of all regulated insurance products. She is backed by SEIU and the California Teachers Association — organizations that have made climate justice a political priority and view the insurance commissioner as a front-line office in the climate fight.`,
      citations: ["ic4", "ic2"],
    },
    ins_prop103: {
      text_long: `Kim views Prop 103 as having correctly identified the need for rate regulation but having been systematically undermined by loopholes that insurers have exploited to raise rates or exit the market while maintaining the appearance of compliance. She would close those loopholes: specifically, she would eliminate the prior approval exception for products insurers claim are "experimental," which has allowed some rate increases to proceed without full Prop 103 review; strengthen the standards for what constitutes a valid actuarial justification for a rate increase; and give the public intervenors in rate proceedings more resources and access to carrier data.

      She also supports adding a minimum loss ratio requirement to Prop 103: insurers must pay out at least 65% of homeowner premiums in claims, so that the regulatory framework ensures that the pricing relationship between premiums and expected losses is maintained. This would prevent carriers from booking large profits in low-claims years without passing those savings to consumers through rate reductions.`,
      citations: ["ic2", "ic4"],
    },
    ins_claims: {
      text_long: `Kim's claims accountability proposal is the most financially specific in the field: a mandatory minimum loss ratio of 65% for homeowner insurance, which would require insurers to pay out at least 65 cents of every dollar in premiums in claims. This is currently lower than the actual loss ratios in wildfire-prone areas — where losses frequently exceed 100% of premiums — but would prevent carriers from booking excessive profits in low-claims years by requiring them to pass those savings to policyholders. Combined with her proposal to limit executive compensation and shareholder profits as conditions of rate approval, this would significantly change the economics of homeowner insurance in California.

      She would also mandate that insurers provide policyholders with a detailed breakdown of what they paid in premiums and what the carrier paid in claims — a simple disclosure that would make the loss ratio visible to consumers and create political pressure for carriers to maintain fair loss ratios. She is endorsed by consumer advocacy organizations that view the current claims process as systematically tilted toward insurers.`,
      citations: ["ic4", "ic8"],
    },
    ins_auto: {
      text_long: `Kim's auto insurance proposal — a public option for auto coverage — is the most expansive in the field and the one that most directly challenges the private insurance model. She argues that auto insurance is not a luxury or a financial product but a necessity — required by law and functionally equivalent to utilities like electricity and water — and that the state should provide a baseline public option that ensures every Californian can access affordable coverage regardless of their credit history, ZIP code, or driving record.

      A public auto option would not replace private auto insurance — carriers could still compete for customers who want additional coverage or services — but would ensure that no Californian is priced out of the legal requirement to carry insurance. This proposal reflects her broader political philosophy: when a product is a legal necessity, public provision is not an option but a responsibility. She is the only candidate in the race to propose a public auto insurance option.`,
      citations: ["ic1", "ic3"],
    },
    ins_highriskareas: {
      text_long: `Kim's Natural Disaster Insurance for All fund solves the high-risk area insurance problem structurally: if every homeowner is guaranteed disaster coverage through the state fund regardless of location, there is no such thing as an "uninsurable" area for disaster risk. Homeowners in Pacific Palisades and Paradise would receive the same disaster coverage guarantee as homeowners in Sacramento — priced appropriately for the risk through the state fund's actuarial mechanisms, but available without the private market's binary decision to insure or not insure.

      This is a fundamentally different approach than every other candidate's: rather than trying to convince private carriers to return to high-risk areas through regulatory incentives or risk-sharing partnerships, Kim removes the private carriers from the disaster equation entirely. The question of whether to build or insure in high-fire-risk areas becomes a land-use and community planning decision, not an insurance market decision — and the state, which makes land-use decisions, is also responsible for the disaster insurance consequences of those decisions.`,
      citations: ["ic4", "ic6"],
    },
    ins_carriers: {
      text_long: `Kim is less focused on attracting private carriers back to the California homeowner market than any other candidate. Her fundamental argument is that the private market has failed in its core function — providing affordable, available disaster coverage to California homeowners — and that the solution is to assign that function to the state rather than to try to make the private market work better for a risk that private markets have repeatedly struggled with globally.

      She does not oppose private insurance as a concept: she wants private carriers to continue writing ordinary homeowner coverage, which they are well-suited to do. She simply does not want the viability of that ordinary coverage to depend on private carriers also absorbing catastrophic disaster losses — a bundling of risks that she argues is inherently unstable. Separating the two functions — state for disaster, private for ordinary — is her core structural argument.`,
      citations: ["ic4", "ic6"],
    },
    ins_accountability: {
      text_long: `Kim's accountability framework is the most structural in the field. Minimum loss ratios, caps on executive compensation, limits on shareholder profits — these are not incremental improvements to the existing system but fundamental changes to the economics of homeowner insurance in California. She views the current system as having allowed insurers to extract value from California policyholders during good years and exit during bad years, leaving homeowners with inadequate coverage and the FAIR Plan as a residual claimant.

      On individual company accountability, she would investigate State Farm's 400 violations and impose consequences commensurate with the scale of the abuse — not just fines that insurers can treat as a cost of doing business, but limitations on rate approval, enhanced monitoring requirements, and potential license revocation for systematic, willful violations. She views the current enforcement system as insufficient for deterrence and would redesign it around the goal of making compliance more profitable than non-compliance.`,
      citations: ["ic4", "ic5"],
    },
  },

  // ============================================================
  // STACY KORSGADEN (R — Conservative)
  // 40-year insurance industry veteran; licensed agent; endorsed by CA GOP
  // ============================================================
  korsgaden: {
    ins_homeowner: {
      text_long: `Korsgaden is the only candidate in the Insurance Commissioner race who has spent her entire career on the insurance industry side — as a licensed agent for 40 years, advising clients on coverage, filing claims, and navigating the regulatory environment. This gives her a perspective on the crisis that is genuinely different from the legislators, attorneys, and consumer advocates who make up the rest of the field. She sees the crisis as fundamentally a product of government-created market distortions: Prop 103's price controls prevented insurers from charging actuarially appropriate premiums, which prevented them from building the reserves needed to pay wildfire claims at scale, which triggered the exits and non-renewals that have left so many California homeowners uninsured.

      Her solution is to restore a free and fair market through competition: attract new insurers by streamlining rate approvals, give existing insurers the pricing certainty they need to stay in the market, and reduce the regulatory friction that makes California less attractive than other large states. She is endorsed by the California Republican Party and frames herself as the candidate who will bring common sense — and industry expertise — to an office that has been run by politicians.`,
      citations: ["ic2", "ic8"],
    },
    ins_fair: {
      text_long: `Korsgaden's primary FAIR Plan strategy is to shrink it by growing the private market, rather than restructuring the FAIR Plan itself. She would create a new business division at the Department of Insurance within her first 100 days dedicated to fast-tracking new, qualified insurers into the California market — making it easier for carriers that want to write California homeowner policies to get licensed, get their rates approved, and start writing business. If private market capacity grows, FAIR Plan dependence falls naturally.

      She views the FAIR Plan's rapid growth as a symptom of regulatory failure rather than an inherent feature of the California market. If the Department of Insurance had approved actuarially sound rate increases more promptly over the past decade, carriers would not have needed to exit, FAIR Plan enrollment would not have grown, and consumers would have had more choices at more reasonable prices. Her FAIR Plan strategy is thus inseparable from her Prop 103 reform strategy.`,
      citations: ["ic1", "ic2"],
    },
    ins_wildfire: {
      text_long: `Korsgaden's wildfire risk strategy is the most prevention-oriented in the field. She would implement an emergency fire reduction plan through county Fire Safe Councils — the local, community-based organizations that coordinate wildfire prevention work in high-risk areas. Her plan would dramatically expand the scale of brush removal, dead wood clearing, mechanical thinning, prescribed burns, and grazing on public and private land in fire-prone areas. She argues that if California had maintained adequate fuel reduction programs over the past two decades, the 2025 LA fires would have been far less destructive.

      She is skeptical that insurance market reforms alone can solve the wildfire problem, arguing that if the underlying fire risk is not addressed, no regulatory or market mechanism can produce affordable coverage in high-risk areas at scale. Her sequencing is prevention first, market reform second: reduce the fuel loads and structure-to-structure ignition pathways that make California wildfires so destructive, and private carriers will be able to write policies in currently uninsurable areas at prices consumers can afford.`,
      citations: ["ic2", "ic5"],
    },
    ins_climate: {
      text_long: `Korsgaden is the only candidate in the race who explicitly challenges the dominant narrative that Prop 103's price controls — rather than climate change — are the primary driver of the insurance crisis. She argues that California's Prop 103 regulatory regime has prevented insurers from pricing climate risk appropriately since the 1990s, when the trajectory of wildfire seasons began to worsen. If insurers had been able to raise rates gradually as climate risk increased, they would not have needed to exit abruptly when losses became untenable.

      She supports market-based approaches to climate risk management: if insurers can price risk accurately, they have a financial incentive to support mitigation programs, home hardening, and community resilience investments that reduce their claims exposure. Government-mandated climate modeling requirements, in her view, add compliance burden without improving the underlying risk assessment that actuaries already do. She would not require insurers to disclose fossil fuel investments or hold them accountable for climate-driven losses — positions that put her sharply at odds with Allen and Kim.`,
      citations: ["ic2", "ic5"],
    },
    ins_prop103: {
      text_long: `Prop 103 is Korsgaden's primary target. She argues that the law's price control mechanism — which requires prior approval of all rate changes and gives the public the right to intervene in rate proceedings — has fundamentally broken the homeowner insurance market by preventing insurers from pricing risk accurately. The result, she says, was predictable: insurers charged artificially low premiums for years, accumulated insufficient reserves, and then faced losses they could not absorb when wildfire seasons worsened. The exits and non-renewals followed directly from this dynamic.

      Her proposed fix is to streamline the rate review process so that actuarially justified rate changes move quickly — within 60 days — while reserving intensive scrutiny for rate requests that appear excessive or manipulative. She would welcome competition from new entrants by making the rate approval process faster and more predictable, and would allow insurers to factor reinsurance costs into their rates — a change that the Sustainable Insurance Strategy has already partially implemented. She stops short of calling for Prop 103's repeal, but her reforms would significantly reduce its practical impact on rate-setting.`,
      citations: ["ic5", "ic2"],
    },
    ins_claims: {
      text_long: `Claims handling is an area where Korsgaden takes a more consensus position: she supports holding insurers accountable for unnecessary claims delays and bad-faith denial practices. Her approach would be to publish a consumer advocacy hub — a redesigned Department of Insurance website and complaint system that makes it easy for consumers to report problems, track their complaints, and see which carriers have the worst records. She would also strengthen fraud enforcement, arguing that insurance fraud drives up costs for all policyholders and that a focus on fraud prevention could reduce premiums across the market.

      She would demand accountability from utilities and local governments for their role in wildfire causation — particularly PG&E and other investor-owned utilities that have been found liable for igniting major fires through equipment failures. If utilities are held financially responsible for fire-caused claims, she argues, they will have stronger incentives to harden their infrastructure, reducing the fire risk that drives insurance costs up.`,
      citations: ["ic1", "ic5"],
    },
    ins_auto: {
      text_long: `Korsgaden supports free-market competition in auto insurance — new products, new entrants, and pricing flexibility — as the primary mechanism for keeping costs down. She would encourage insurers to develop new auto insurance products and pricing structures that the current regulatory environment has made difficult or impossible, including behavior-based telematics products and usage-based insurance. She opposes a public auto insurance option, viewing it as unnecessary government competition with a functioning private market.

      California's auto insurance market has specific regulatory features that differ from most states — notably the prohibition on using credit score and ZIP code as rating factors — that Korsgaden might push to revisit, though she has not explicitly called for changing those restrictions. Her general approach is to allow more actuarial freedom in pricing while maintaining accountability for bad-faith claims practices.`,
      citations: ["ic8", "ic7"],
    },
    ins_highriskareas: {
      text_long: `Korsgaden's approach to insurance availability in high-risk areas runs through her fire prevention and market reform strategies rather than through targeted high-risk area programs. If wildfire fuel loads are reduced through aggressive prevention programs, areas that are currently uninsurable become insurable. If the rate review process is streamlined and carriers are given pricing certainty, they can write policies in high-risk areas at actuarially appropriate prices. She argues that the combination of these two strategies can restore private market coverage in most currently uninsurable areas without requiring a state backstop.

      She supports home hardening and mitigation investments — both as a fire prevention measure and as an underwriting factor — and would require insurers to provide meaningful discounts for hardened homes. Currently, the link between mitigation and pricing is weak; she would strengthen it as a market incentive for homeowners to invest in fire safety.`,
      citations: ["ic2", "ic5"],
    },
    ins_carriers: {
      text_long: `Carrier attraction is Korsgaden's core policy lever. In her first 100 days, she would create a new business development division at the Department of Insurance dedicated entirely to recruiting qualified new insurers to write California homeowner policies. She would streamline the licensing process, fast-track rate approvals for new market entrants, and personally reach out to insurance carriers that have expressed interest in the California market but been deterred by the regulatory environment.

      She draws on her 40 years of experience working with insurance carriers to argue that many carriers that exited California did so not because the market was fundamentally uninsurable but because the regulatory environment made it impossible to price risk accurately. If that environment changes — faster approvals, actuarially appropriate pricing, fair enforcement — those carriers would return. She is the candidate most confident that regulatory reform can reverse the market exit without the structural changes that Kim and Farren are proposing.`,
      citations: ["ic1", "ic2"],
    },
    ins_accountability: {
      text_long: `Korsgaden's accountability approach distinguishes between systemic and individual bad actors. She supports accountability for individual carriers that commit fraud or engage in bad-faith claims practices, and would strengthen the Department of Insurance's enforcement tools for those specific violations. But she opposes the broader accountability frameworks that Kim and Allen have proposed — minimum loss ratios, fossil fuel disclosures, executive compensation caps — as government overreach that would drive more carriers out of the market rather than making them more accountable.

      Her accountability framework is market-based: if consumers have better information about carrier claims performance (through her consumer advocacy hub), they will choose better carriers, which will create competitive pressure on poor performers. If regulators have better tools for detecting and penalizing individual bad-faith violations, they can address those violations without imposing system-wide requirements that burden good actors along with bad ones.`,
      citations: ["ic5", "ic8"],
    },
  },

  // ============================================================
  // PATRICK WOLFF (D — Moderate)
  // Financial analyst; former Capital One insurance brokerage builder
  // SF Chronicle and OC Register endorsed; chess grandmaster
  // ============================================================
  wolff: {
    ins_homeowner: {
      text_long: `Wolff is running on the argument that the California Insurance Commissioner's office has been captured — not by corruption, but by the normal professional networks and political incentives of career politicians — and that the solution is an outsider with deep technical expertise. He got a California insurance license specifically to run for this office, and the San Francisco Chronicle's endorsement cited his knowledge of insurance regulation as exceeding any other candidate in the race. His core critique of the current situation is that the Department is simultaneously too lax on insurer misbehavior (allowing State Farm's 400 violations to go unaddressed) and too strict on market access (making it harder for insurers to enter and price the California market than in comparable states).

      He has no corporate donor ties — he self-funds and raises money from small donors — which he uses as evidence of his independence from both the insurance industry (which tends to support conservative candidates who favor deregulation) and from the trial lawyer and consumer advocate networks (which tend to support progressive candidates who favor strict regulation). His pitch is for technically sophisticated, independent regulation rather than ideologically driven regulation in either direction.`,
      citations: ["ic10", "ic11"],
    },
    ins_fair: {
      text_long: `Wolff's FAIR Plan strategy has three components: stabilize it in the short term, improve it in the medium term, and shrink it over the long term. Stabilization would come from implementing AB 226, which allows the FAIR Plan to issue bonds — giving it a much larger claims-paying buffer than its current assessment model. Improvement would mean allowing the FAIR Plan to price risk actuarially (currently its rates are set by statute at levels that may not reflect actual risk) and expanding its coverage offerings so that customers can get something closer to full homeowner protection rather than bare-bones fire coverage.

      Shrinking the FAIR Plan requires fixing the private market, which is the harder problem. His approach — streamlining Prop 103's rate review process, improving insurer accountability through the claims report card, and requiring insurer participation as a condition of selling other lines — is designed to make the private market more attractive for both carriers and consumers. He would measure FAIR Plan success by trajectory: if enrollment is declining and private market options are expanding, the reforms are working.`,
      citations: ["ic10", "ic11"],
    },
    ins_wildfire: {
      text_long: `Wolff's most novel wildfire insurance proposal is allowing insurers to issue group homeowner's insurance on a community basis — for example, covering all homeowners in a HOA or a fire safe zone collectively, rather than writing individual policies. This approach would allow insurers to diversify risk across a defined community, create incentives for collective fire risk reduction (if the community as a whole hardens its properties, the group rate improves), and make it feasible to write policies in high-risk areas that individual policies cannot support.

      He also wants to reform how smoke damage is handled — requiring that all home policies include meaningful smoke damage protection, and creating a science-based smoke claims evaluation process rather than the current system where insurers have discretion to evaluate smoke damage on their own terms. The 2025 LA fires caused massive smoke damage that many homeowners found their policies did not adequately cover. This gap, he argues, is both a consumer protection failure and an actuarial problem: smoke damage is a predictable consequence of wildfire that should be priced into every California home policy.`,
      citations: ["ic11", "ic13"],
    },
    ins_climate: {
      text_long: `Wolff's approach to climate risk modeling is pragmatic rather than ideological: he wants to understand what other Western states with comparable fire risk are doing, how their markets are functioning, and what California's regulatory environment is contributing to its market dysfunction relative to those states. His proposed public benchmarking report — comparing California's insurance market to Oregon, Washington, and Colorado, which face similar fire risks but have not experienced the same degree of market exit — would give voters and policymakers a calibrated view of how much of California's problem is climate-driven versus regulatory-driven.

      He supports using forward-looking climate models in rate-setting, but emphasizes that those models must be scientifically validated and independently reviewed — not just whatever model a carrier wants to use to justify its preferred rate increase. He would create a process for the Department of Insurance to evaluate and approve climate risk models, similar to how it evaluates actuarial methods, ensuring that climate modeling improves rate accuracy without becoming a vehicle for unjustified rate increases.`,
      citations: ["ic10", "ic11"],
    },
    ins_prop103: {
      text_long: `Wolff's Prop 103 reform proposal is the most precisely calibrated in the field. He would create a tiered review system: routine rate adjustments that fall within defined parameters (say, within 10% of the previously approved rate and supported by standard actuarial documentation) would receive an expedited review within 60 days with no right of public intervention; rate changes outside those parameters would receive full Prop 103 review with public participation. This would dramatically speed up routine filings while preserving intensive scrutiny for the changes that most affect consumers.

      He would also require that all rate filings be complete and actuarially documented before the review clock starts — currently, incomplete applications are filed strategically to restart timelines — and impose a binding timeline on the Department to respond. This creates symmetrical accountability: carriers must file complete applications, and the Department must act within a defined period. He views the current rate review dysfunction as a failure of process design that a technically sophisticated commissioner can fix without legislative changes.`,
      citations: ["ic10", "ic12"],
    },
    ins_claims: {
      text_long: `The claims performance report card is Wolff's signature proposal and the one that most directly reflects his financial analyst background. He would require every insurer writing homeowner policies in California to publish a claims performance report — graded on speed of claim opening, time to resolution, percentage of claims disputed, most common denial reasons, and average settlement as a percentage of policy limits — and mandate that this report be provided to consumers at the point of purchase. This information is currently available in aggregate through the Department's complaint data, but not in a carrier-specific, consumer-facing format that allows meaningful comparison.

      He chose this proposal because it addresses both the information asymmetry problem (consumers cannot easily evaluate claims performance before buying a policy) and the incentive problem (carriers that know their claims record is public have a competitive reason to improve it). He views transparency as more powerful than regulation in creating long-term market discipline, though he also supports stronger enforcement of existing claims laws for carriers that systematically violate them.`,
      citations: ["ic11", "ic12"],
    },
    ins_auto: {
      text_long: `Wolff's auto insurance position reflects his financial analyst background: he would allow carriers to use telematics and behavior-based data in underwriting, which he argues rewards safer drivers and allows more precise risk pricing. He built Capital One's auto and home insurance brokerage — one of the largest digital insurance distribution platforms in the country — and has direct knowledge of how auto insurance products are designed, priced, and distributed at scale. He views California's auto market as suffering from similar regulatory rigidity as the homeowner market, and would apply similar reforms: streamline Prop 103 compliance for auto, improve the Department's transparency and consumer information resources, and encourage new product development.

      He would also apply his claims report card concept to auto insurance — requiring carriers to publish their auto claims performance data, including time to settlement, dispute rates, and average settlement amounts. Auto insurance has a much higher volume of smaller claims than homeowner insurance, making the report card data particularly valuable for consumers who shop based on service quality as much as price.`,
      citations: ["ic5", "ic12"],
    },
    ins_highriskareas: {
      text_long: `Wolff's most innovative high-risk area proposal is aligning home hardening guidelines with how insurance companies actually underwrite. Currently, the state tells homeowners to do X to reduce fire risk, but insurers' underwriting models may not give credit for X — leaving homeowners who follow state guidance with no insurance benefit. He would require carriers to demonstrate that their underwriting models account for the specific mitigation measures that Cal Fire and the Department of Forestry recommend, and to provide quantified premium discounts for homes that have implemented those measures.

      This alignment would create a virtuous cycle: homeowners who harden their properties get meaningful price relief, which motivates more hardening, which reduces aggregate risk, which allows carriers to write more policies in high-risk areas. He views this as a more sustainable solution than FAIR Plan reform or public funds, because it operates through market incentives rather than government mandates or subsidies.`,
      citations: ["ic11"],
    },
    ins_carriers: {
      text_long: `Wolff's carrier attraction strategy works through the Sustainable Insurance Strategy that outgoing Commissioner Lara has pursued, which he would strengthen and accelerate. The key elements are: allowing insurers to factor reinsurance costs into rates (which restores their ability to manage catastrophic loss exposure), streamlining rate approvals (which reduces regulatory uncertainty), and creating a more transparent market through his report card and benchmarking proposals (which helps carriers understand how California's market compares to alternatives and what improvements would attract them back).

      He has specifically said he would "carry forward and strengthen" the Sustainable Insurance Strategy rather than replacing it with a new framework — a continuity argument that distinguishes him from candidates who want to restructure the market entirely. He views the strategy as a sound foundation that needs better implementation and stronger accountability mechanisms, not a failed approach that needs replacement.`,
      citations: ["ic10", "ic11"],
    },
    ins_accountability: {
      text_long: `Wolff's accountability framework is transparency-first: the claims report card, the benchmarking report, the redesigned Department website, and the expanded consumer complaint data are all tools that make insurer behavior visible to consumers, journalists, advocates, and regulators in ways it currently is not. He believes that sunlight is the most effective disinfectant for the bad-faith claims practices and pricing manipulation that have characterized some carriers' California operations.

      On State Farm specifically, he would investigate the 400 violations and use that investigation to establish clearer standards for what constitutes systematic bad-faith behavior — and what the consequences are. He supports meaningful penalties for systematic violations: not just fines, but limitations on rate approvals, enhanced monitoring, and public disclosure. He views the current enforcement system as insufficient for deterrence but thinks the right fix is better information and faster enforcement, not the structural changes that Kim is proposing.`,
      citations: ["ic10", "ic11"],
    },
  },

  // ============================================================
  // MERRITT FARREN (R — Conservative)
  // Former Amazon lawyer/Disney exec; Palisades fire survivor
  // Stanford Law + UC Berkeley Law; CAL Reinsure architect
  // ============================================================
  farren: {
    ins_homeowner: {
      text_long: `Farren lost his own home in the 2025 Palisades fire and formally intervened in State Farm's subsequent rate increase proceedings as a consumer advocate — making him the only candidate in the race with both direct personal experience of the insurance failure and the legal expertise to fight it in regulatory proceedings. He described watching the claims process unfold after the Palisades fire as confirming his view that the current system is "a full-on disaster — not working for consumers or insurance companies." He ran to fix it through structural reform rather than incremental regulation.

      His personal narrative — Amazon lawyer, Disney executive, Palisades homeowner, fire survivor, regulatory intervenor — gives him a credibility in this race that most candidates lack. He is not a politician who has studied the insurance crisis; he is a consumer who experienced it and used his legal and business expertise to design a solution. His donors reflect both his Republican affiliation and his business background, but he is positioning himself as a consumer advocate who happens to have a market-based solution rather than a regulatory one.`,
      citations: ["ic14", "ic16"],
    },
    ins_fair: {
      text_long: `Farren's most ambitious proposal is to eliminate the FAIR Plan entirely by replacing it with CAL Reinsure — a state-backed reinsurance authority that would serve as the catastrophic wildfire loss backstop for all private carriers writing homeowner insurance in California. Modeled on Florida's Citizens Property Insurance Corporation backstop mechanism and the UK's Flood Re program, CAL Reinsure would allow private carriers to cede a portion of their catastrophic wildfire exposure to the state authority, which would pool and spread that risk across the entire California insurance market.

      With catastrophic wildfire risk backstopped by CAL Reinsure, private carriers could write homeowner policies in fire-prone areas without needing to price catastrophic fire risk into every policy. The FAIR Plan — which exists precisely because private carriers cannot profitably absorb that risk — would become unnecessary and could be wound down. Policyholders would move from the FAIR Plan back to private carriers, getting better coverage, better service, and a more competitive market. He argues this is the only solution that actually fixes the market rather than managing its dysfunction.`,
      citations: ["ic14", "ic15", "ic13"],
    },
    ins_wildfire: {
      text_long: `Farren's wildfire risk strategy combines his structural CAL Reinsure proposal with operational prevention requirements. He would set minimum standards for fire response capacity — fire stations, equipment, and staffing — in cities and counties that have significant wildland-urban interface, arguing that currently there is no consistent statewide standard for the fire protection infrastructure that private insurance pricing depends on. He also supports aggressive forest and brush management: mechanical thinning, prescribed burns, and home hardening incentives, organized at the state level and funded through demonstrated insurance cost reductions.

      He is critical of the current Sustainable Insurance Strategy as "another misguided Band-Aid" — a set of incremental reforms that address symptoms without attacking the structural problem. His view is that the market design itself is wrong: bundling catastrophic community wildfire risk with ordinary individual home risk in a single private policy is inherently unstable, and no amount of rate regulation or carrier incentives can fix that fundamental design flaw. CAL Reinsure unbundles these risks, allowing each to be handled by the most appropriate institution.`,
      citations: ["ic14", "ic16"],
    },
    ins_climate: {
      text_long: `Farren's climate position is more implicit than explicit: he does not frame his campaign around climate accountability, but his entire structural reform proposal rests on the premise that California faces increasing concentrations of natural disaster risk that private markets cannot absorb at scale. CAL Reinsure is essentially a recognition that climate-driven catastrophe risk requires a public backstop — which is, in practice, a climate risk management policy even if he does not describe it in those terms.

      He is skeptical of the regulatory approach to climate risk — requiring insurers to use specific climate models, disclose fossil fuel investments, or hold oil companies accountable for climate damages — viewing these as political gestures that do not solve the underlying market structure problem. His preferred climate risk management tool is market design: create institutions that can handle climate-driven catastrophic risk at scale (CAL Reinsure), and let market competition handle the ordinary risk that private carriers are well-suited to price and manage.`,
      citations: ["ic2", "ic16"],
    },
    ins_prop103: {
      text_long: `Farren wants to revamp the regulatory framework built under Prop 103, stripping away the layers of law and regulation that he believes have compounded the market crisis. He does not call for Prop 103's repeal, but he wants to allow good companies that want to serve California homeowners to innovate and introduce new insurance products without the friction of the current prior-approval process. His tech sector background — at Amazon, which has disrupted multiple industries through product innovation — makes him the candidate most focused on enabling new product structures rather than regulating existing ones better.

      With CAL Reinsure as the catastrophic risk backstop, he argues that much of the regulatory framework built around managing catastrophic risk in private policies becomes unnecessary — clearing the way for a lighter-touch regulatory environment focused on ordinary coverage and claims performance rather than catastrophic risk management.`,
      citations: ["ic16", "ic14"],
    },
    ins_claims: {
      text_long: `Farren's claims proposal is the most specific and most aggressive in the field: a mandate that total structural losses be paid in full within 30 days, with no questions asked, as a condition of writing homeowner insurance in California. This is the anti-"delay and deny" proposal — designed specifically to end the practice of insurers stringing out large claims through repeated documentation requests, incomplete payments, and delayed site visits. He experienced this process after the Palisades fire and intervened legally to push back on State Farm's rate increase partly because of what he observed in the claims process.

      He would also create a premium "insurance product" — a new category of homeowner coverage that guarantees immediate full payout after total loss, with fewer adjustment procedures and faster settlement — for homeowners who want certainty after a disaster. This market-based product innovation would coexist with standard coverage options, giving consumers a choice between faster certainty and lower premiums. He views this as an example of what product innovation looks like when insurance is allowed to evolve: new structures that better serve consumers rather than forcing all coverage into the same regulatory box.`,
      citations: ["ic14", "ic13"],
    },
    ins_auto: {
      text_long: `Farren would bring the same tech-sector customer-centric innovation approach to auto insurance that he applies to homeowner coverage. He would allow new insurance product structures — usage-based, behavior-based, subscription-model — that are currently blocked or constrained by Prop 103's prior approval requirements. His Amazon background specifically informs this: Amazon disrupted industries not by doing the same thing cheaper but by designing fundamentally different customer experiences, and he believes the same logic applies to insurance.

      He would also apply his 30-day claims payment mandate to auto total losses — one of the most common consumer complaints in auto insurance is that the total loss claim process is slow, opaque, and adversarial. Faster, more transparent auto claims would improve the consumer experience and reduce the cost of disputes, which drives up auto insurance costs for everyone.`,
      citations: ["ic14", "ic16"],
    },
    ins_highriskareas: {
      text_long: `CAL Reinsure solves the high-risk area availability problem at its root. Once catastrophic wildfire risk is removed from individual insurer balance sheets and pooled in the state reinsurance authority, private carriers can write homeowner policies in Pacific Palisades, Paradise, and Altadena with the same confidence they write policies in Sacramento or San Diego. The uninsurability of high-risk areas in the current market is a product of risk concentration in private balance sheets, not of those areas being physically uninsurable — CAL Reinsure breaks that connection.

      Farren also supports wildfire prevention and home hardening as complementary strategies: CAL Reinsure creates the market structure to allow coverage, but reducing the underlying risk makes coverage more affordable over time. He views these as parallel tracks rather than alternatives — fix the market structure and reduce the risk simultaneously, rather than waiting for risk reduction before market reform.`,
      citations: ["ic14", "ic15"],
    },
    ins_carriers: {
      text_long: `CAL Reinsure is Farren's carrier attraction mechanism: by removing catastrophic wildfire risk from private carrier balance sheets, it makes the California market profitable for carriers that want to serve California homeowners but cannot sustainably absorb catastrophic fire losses. He does not need to persuade carriers to return to an unfixable market — he is proposing to fix the market so that it is profitable for them to return.

      He is also focused on product innovation as a carrier attraction strategy: if the regulatory environment allows carriers to design new insurance products tailored to California's specific risk profile — rather than forcing them to write standard coverage at regulated prices — more carriers will find the California market attractive. His Amazon background makes him confident that the right regulatory environment can attract innovation and investment rather than driving it away.`,
      citations: ["ic14", "ic16"],
    },
    ins_accountability: {
      text_long: `Farren's accountability framework centers on the 30-day claims payment mandate as the primary consumer protection mechanism — if insurers must pay total loss claims in full within 30 days, the "delay and deny" playbook becomes impossible. He intervened specifically against State Farm's rate increase, arguing that a company seeking a major rate increase while simultaneously abusing its claims process with 400 documented violations deserves regulatory consequence. His legal background — having litigated complex cases at Amazon and in private practice — gives him specific tools for the kind of regulatory combat that effective insurance enforcement requires.

      He also supports structural accountability: CAL Reinsure would require participating carriers to meet minimum underwriting and claims performance standards as a condition of accessing the reinsurance facility. This creates a market-based accountability mechanism — carriers that abuse their customers lose access to CAL Reinsure, making the California market less profitable for them — that operates independently of the department's enforcement capacity.`,
      citations: ["ic14", "ic16"],
    },
  },

  // ============================================================
  // ROBERT HOWELL (R — Conservative)
  // Cybersecurity CEO; 2022 Republican IC nominee; no industry money
  // ============================================================
  howell: {
    ins_homeowner: {
      text_long: `Howell's central pitch is independence: he pledges to never accept political donations from insurance companies or special interests, which he argues is the structural cause of the regulatory capture that has made the Insurance Commissioner's office ineffective. His 2022 run against incumbent Ricardo Lara gave him statewide experience and name recognition in Republican circles, and he is running the same campaign in 2026 — watchdog independence, no industry money, and practical business experience over political career.

      His cybersecurity CEO background informs his approach to insurance regulation: in cybersecurity, the question is always how to manage risk with incomplete information under adversarial conditions — exactly the challenge facing the Insurance Commissioner. He views the department's problem as one of insufficient information and weak enforcement rather than structural market failure, and believes that better data, stronger accountability, and independent leadership can fix the market without the structural overhauls that Kim and Farren are proposing.`,
      citations: ["ic18", "ic3"],
    },
    ins_fair: {
      text_long: `Howell's primary FAIR Plan proposal is to tie homeowner insurance market participation to broader market access: if a carrier operates in California and sells commercial, auto, or other lines of insurance, it should be required to maintain a meaningful homeowner market presence in the regions where it operates. This approach would reduce the FAIR Plan's enrollment by requiring private carriers to absorb some of the customers who have been pushed into the FAIR Plan by market exits.

      He also supports implementing AB 226 to allow the FAIR Plan to issue bonds — giving it more financial stability — and would explore allowing the FAIR Plan to offer more comprehensive coverage that reduces the gap between FAIR Plan policies and private market homeowner coverage. His goal is to make the FAIR Plan a functional backstop rather than an inadequate last resort.`,
      citations: ["ic3", "ic17"],
    },
    ins_wildfire: {
      text_long: `Howell's wildfire insurance approach is accountability-first: he would investigate and hold insurance executives accountable for what he calls "exploitative wildfire claim procedures" — the delay, denial, and low-ball settlement practices that have left many fire survivors with inadequate compensation. He frames this as both a consumer protection issue and a market integrity issue: if consumers cannot trust that their insurance will actually pay claims after a wildfire, the market loses its fundamental function.

      He supports his Insurance Payers Bill of Rights as the framework for wildfire claims specifically: clear timelines for claim response, mandatory written explanations for any denial or partial payment, and access to an independent review process for disputed claims. He would also require insurers to provide pre-loss replacement cost estimates to policyholders — so that people know whether their coverage is adequate before a fire, rather than discovering underinsurance in the claims process.`,
      citations: ["ic3", "ic18"],
    },
    ins_climate: {
      text_long: `Howell has not developed a detailed position on climate risk modeling requirements. His general approach — market competition and accountability over government mandates — extends to climate risk: he would allow insurers to develop and use their own climate risk models rather than imposing government-specified models, while requiring that those models be transparent enough for actuarial review. He is skeptical that mandating specific climate models will improve rate accuracy, arguing that actuarially sophisticated carriers already use forward-looking climate data and that mandating specific approaches would add compliance burden without improving outcomes.

      His silence on the fossil fuel accountability positions that Allen and Kim have advanced reflects his Republican affiliation and his general view that the insurance crisis is a regulatory and market design problem rather than a climate accountability problem. He would focus the Insurance Commissioner's office on regulating insurance rather than on climate policy.`,
      citations: ["ic18"],
    },
    ins_prop103: {
      text_long: `Howell supports streamlining the rate review process — making routine filings faster, reducing the adversarial dynamics that make the current process inefficient for everyone — while maintaining the public's right to participate in reviews of significant rate increases. He specifically supports allowing insurers to factor reinsurance costs into their rates, which the Sustainable Insurance Strategy has partially implemented and which he views as the single most important regulatory change for restoring market stability.

      His cybersecurity background gives him a specific lens on regulatory process: he views the current rate review system as having too many adversarial dynamics and too little collaborative information exchange. Better data sharing between carriers and the department, clearer standards for what information is required in rate filings, and faster departmental response would improve the process for all parties without requiring changes to the underlying law.`,
      citations: ["ic3", "ic18"],
    },
    ins_claims: {
      text_long: `The Insurance Payers Bill of Rights is Howell's signature policy proposal — a set of structural consumer protections that would apply to all insurance claims in California: clear timelines for claim response and resolution, mandatory written explanations for any denial or reduction, access to an independent review process for disputed claims, and protection from retaliatory non-renewal for policyholders who file claims. He frames this as codifying the basic consumer expectations that most people assume they already have but that current law inadequately protects.

      He pledges never to take donations from insurance companies or special interests — a structural commitment to independence that he uses to validate his willingness to impose meaningful accountability on the industry. His investigative mandate would focus specifically on carriers with systematic patterns of claims abuse: carriers that regularly delay claims, underpay settlements, or retaliate against policyholders for filing claims would face enhanced monitoring, public disclosure, and potential market access restrictions.`,
      citations: ["ic3", "ic18"],
    },
    ins_auto: {
      text_long: `Howell supports free-market competition in auto insurance — new entrants, new products, and streamlined rate approvals — as the primary mechanism for keeping costs competitive. He would apply his Bill of Rights to auto claims as well as homeowner claims, establishing clear timelines and explanation requirements for auto claim denials and settlements. His cybersecurity background is directly relevant to auto insurance: telematics data, which tracks driving behavior for usage-based insurance products, raises significant privacy and data security questions that his background equips him to address.

      He would be more open than most Republican candidates to behavioral data-based auto pricing (which can benefit safe drivers) while ensuring that the data collection and storage practices comply with California's strong privacy laws. This reflects his dual expertise in technology and insurance: he understands both the potential of behavioral data to improve actuarial precision and the risks it poses to consumer privacy.`,
      citations: ["ic18"],
    },
    ins_highriskareas: {
      text_long: `Howell's market participation requirement — tying homeowner insurance participation to broader market access — is his primary tool for maintaining coverage availability in high-risk areas. If carriers want to sell any insurance in a high-risk region, they must also write homeowner policies there. This approach creates a cross-subsidy from more profitable lines to homeowner coverage, which he argues is a reasonable requirement for carriers that benefit from California's large insurance market overall.

      He also supports home hardening and fire prevention as complementary strategies: reducing the underlying risk makes high-risk areas more insurable in the private market, while his market participation requirement ensures that some private market coverage remains available even in the areas where risk reduction has not yet fully materialized.`,
      citations: ["ic3", "ic17"],
    },
    ins_carriers: {
      text_long: `Howell's carrier attraction strategy is built on his independence and watchdog brand: he argues that carriers that have left California because of regulatory unpredictability and inconsistent enforcement would return to a market with a truly independent, non-politically-affiliated commissioner who applies rules consistently and without industry capture. His no-industry-money pledge is the centerpiece of this argument — he is not beholden to the carriers he regulates, which he argues makes him both more credible as a regulator and more attractive to carriers that want consistent, fair treatment.

      He would also streamline the rate approval process and support market participation requirements that create a more stable market structure for carriers. Unlike Kim and Farren, he does not propose to restructure the market fundamentally — he proposes to regulate the existing market better, with more accountability, more transparency, and more independence.`,
      citations: ["ic3", "ic18"],
    },
    ins_accountability: {
      text_long: `Accountability is the core of Howell's campaign. No insurance company donations — ever. An Insurance Payers Bill of Rights. Systematic investigation of carriers with bad claims records. Public disclosure of enforcement actions. His pitch is that the Insurance Commissioner's office has been captured by the industry it regulates — through the revolving door, political donations, and the general dynamics of regulatory agencies that interact daily with the businesses they oversee — and that an outsider without industry ties can restore genuine consumer protection.

      His cybersecurity CEO background is relevant here: he manages a company that monitors threats and responds to breaches, which requires the kind of systematic pattern recognition and adversarial thinking that effective insurance enforcement demands. He views the Department of Insurance's enforcement failures — particularly on claims abuse — as an intelligence failure: the department does not have the data systems or analytical capacity to detect systematic abuse before it becomes a crisis. He would invest in those systems as a first-term priority.`,
      citations: ["ic3", "ic18"],
    },
  },

};
