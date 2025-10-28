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
