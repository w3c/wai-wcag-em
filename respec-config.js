var respecConfig = {
	noRecTrack: true,
	tocIntroductory: true,
	specStatus: "ED",
	maxTocLevel: 3,
	shortName: "wcag-em-2",
	
	//publishDate:  "",
	copyrightStart: "2022",
	license: "document",
	
	previousPublishDate:  "2014-07-10",
	previousMaturity:  "NOTE",
	otherLinks: [
		{
			key: "Previous Version",
			data: [
				{
					href: "https://www.w3.org/TR/2014/NOTE-WCAG-EM-20140710/",
				},
			],
		},
	],
	// if there a publicly available Editors Draft, this is the link
	edDraftURI: "https://w3c.github.io/wai-wcag-em/",
	
	editors: [
		{
			name: "Hidde de Vries",
			mailto: "hidde.vries@logius.nl",
			company: "Logius",
			companyURI: "https://www.logius.nl",
			w3cid: 46880,
		},
		{
			name: "Jeroen Hulscher",
			mailto: "jeroen.hulscher@logius.nl",
			company: "Logius",
			companyURI: "https://www.logius.nl",
			w3cid: 72541,
		},
		{
			name: "Steve Faulkner",
			mailto: "sfaulkner@tetralogical.com",
			company: "Tetralogical",
			companyURI: "https://tetralogical.com/",
			w3cid: 35007
		}
	],
	
	formerEditors: [
		{
			name: "Eric Velleman",
			company: "Accessibility Foundation",
			companyURI: "https://www.accessibility.nl",
		},
		{
			name: "Shadi Abou-Zahra",
			company:"W3C/WAI",
			companyURI: "https://www.w3.org",			
		},
    ],
	
	localBiblio: {
		"Easy Checks" : {
		  title: "Easy Checks - A First Review of Web Accessibility",
		  href: "https://www.w3.org/WAI/eval/preliminary",
		  publisher: "Lawton Henry S, ed (2014). W3C.",
		},
		"Essential Components of Web Accessibility" : {
		  title: "Easy Checks - A First Review of Web Accessibility",
		  href: "https://www.w3.org/WAI/fundamentals/components/",
		  publisher: "Lawton Henry S, ed (2005). Essential Components of Web Accessibility. Version 1.3. W3C.",
		},
		"How People with Disabilities Use the Web" : {
		  title: "How People with Disabilities Use the Web.",
		  href: "https://www.w3.org/WAI/people-use-web/",
		  publisher: "Abou-Zahra S, ed (2012). Draft. W3C.",
		},
		"Involving Users in Evaluating Web Accessibility" : {
		  title: "Involving Users in Evaluating Web Accessibility",
		  href: "https://www.w3.org/WAI/test-evaluate/involving-users/",
		  publisher: "Lawton Henry S, ed (2010). Involving Users in Evaluating Web Accessibility. W3C.",
		},
		"Selecting Web Accessibility Evaluation Tools" : {
		  title: "Selecting Web Accessibility Evaluation Tools",
		  href: "https://www.w3.org/WAI/test-evaluate/tools/selecting/",
		  publisher: "Abou-Zahra S, ed (2005). W3C.",
		},
		"Using Combined Expertise to Evaluate Web Accessibility" : {
		  title: "Using Combined Expertise to Evaluate Web Accessibility",
		  href: "https://www.w3.org/WAI/test-evaluate/combined-expertise/",
		  publisher: "Brewer J, ed (2002). W3C.",
		},
		"UWEM" : {
		  title: "D-WAB4 Unified Web Evaluation Methodology (UWEM 1.2 Core)",
		  href: "https://link.springer.com/chapter/10.1007/978-3-540-73283-9_21",
		  publisher: "Velleman E.M, Velasco C.A, Snaprud M, eds (2007). Wabcluster.",
		},
		"WCAG2-Overview" : {
		  title: "Web Content Accessibility Guidelines (WCAG) Overview",
		  href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
		  publisher: "Lawton Henry S, ed (2012). W3C.",
		},
		"WCAG22-TECHS" : {
		  title: "Techniques and Failures for Web Content Accessibility Guidelines 2.2",
		  href: "https://www.w3.org/WAI/WCAG22/Techniques/",
		  publisher: "Campbell A, Adams C, Montgomery RB, Cooper M, eds (2025). Techniques and Failures for Web Content Accessibility Guidelines 2.2. W3C.",
		},
		"Understanding-WCAG22" : {
		  title: "Understanding WCAG 2.2 - A guide to understanding and implementing Web Content Accessibility Guidelines 2.2",
		  href: "https://www.w3.org/WAI/WCAG22/Understanding/",
		  publisher: "Campbell A, Adams C, Montgomery RB, Cooper M, eds (2025). W3C.",
		},
	 },
	//authors:  [
	//    { name: "Your Name", url: "https://example.org/",
	//      company: "Your Company", companyURI: "https://example.com/" },
	//],
	
	/*
	 alternateFormats: [
	 { uri: 'wcag21-diff.html', label: "Diff from Previous Recommendation" } ,
	 { uri: 'wcag21.ps', label: "PostScript version" },
	 { uri: 'wcag21.pdf', label: "PDF version" }
	 ],
	 */
	group: "ag",
	github: "w3c/wai-wcag-em",
	
	maxTocLevel: 4,
	
	postProcess: [
		() => {
			// Remove stray <p> elements added by Markdown between dt/dd elements
			document.querySelectorAll("dl > p:empty").forEach((el) => el.remove());
		}
	]
};
