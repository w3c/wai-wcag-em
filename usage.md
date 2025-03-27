## Using This Methodology

This methodology is used for thorough evaluation of websites using WCAG 2.0. Before evaluating an entire website it is usually good to do a preliminary evaluation of different web pages from the target website to identify obvious accessibility barriers and develop an overall understanding of the accessibility of the website. [Easy Checks - A First Review of Web Accessibility](http://www.w3.org/WAI/eval/preliminary) describes such an approach for preliminary evaluation that is complementary to this methodology.

### Required Expertise

Users of this methodology are assumed to have solid understanding of how to evaluate web content using WCAG 2.0, accessible web design, assistive technologies, and of how people with different disabilities use the Web. This includes an understanding of web technologies; accessibility barriers that people with disabilities experience; assistive technologies and adaptive approaches that people with disabilities use; and evaluation techniques, tools, and methods to identify barriers for people with disabilities. In particular, it is assumed that users of this methodology are deeply familiar with all the resources listed in [Background Reading](#reading).

### Combined Expertise (Optional)

This methodology can be carried out by an individual evaluator with the skills described in the previous section ([Required Expertise](#expertise)), or a team of evaluators with collective expertise. Using the combined expertise of different evaluators may sometimes be necessary or beneficial when one evaluator alone does not possess all of the required expertise. [Using Combined Expertise to Evaluate Web Accessibility](http://www.w3.org/WAI/eval/reviewteams) provides further guidance on using combined expertise of review teams, which is beyond the scope of this document.

### Involving Users (Optional)

Involving people with disabilities including people with aging-related impairments (who are not experienced evaluators or part of a review team) may help identify additional accessibility barriers that are not easily discovered by expert evaluation alone. While not required for using this methodology, it may sometimes be necessary for evaluators to involve real people with a wide range of abilities during the evaluation process. [Involving Users in Web Accessibility Evaluation](http://www.w3.org/WAI/eval/users) provides further guidance on involving users in web accessibility evaluation, which is beyond the scope of this document.

### Evaluation Tools (Optional)

This methodology is independent of any particular web accessibility evaluation tool, web browser, and other software tool. While most accessibility checks are not fully automatable, evaluation tools can significantly assist evaluators during the evaluation process and contribute to more effective evaluation. For example, some web accessibility evaluation tools can scan entire websites to help identify relevant pages for manual evaluation. Tools can also assist during manual (human) evaluation of accessibility checks. [Selecting Web Accessibility Evaluation Tools](http://www.w3.org/WAI/eval/selectingtools) provides further guidance on using tools which is beyond the scope of this document.

## Scope of Applicability

This methodology is designed for evaluating full, self-enclosed [websites](#website). That is, for every [web page](#webpage) it is unambiguous whether it is part of the website or not. This includes websites of organizations, entities, persons, events, products, and services.

### Examples of Websites

Specific examples of websites include:

*   "The public website of Example Org. located at http://www.example.org"
*   "The intranet website of Example Org. located at http://intranet.example.org"
*   "The online shop of Example Org. located at http://www.example.org/shop/"
*   "Release version 1.5.3 of Online Reservations System (ORS) application"
*   "Mobile version of the Example Org. website located at http://m.example.org"
*   "Dutch version of the Example Org. website located at http://nl.example.org"

A website can be part of a larger website, such as the online shop in the preceding examples. A website can also be a clearly separable version of the website such as the mobile or Dutch language versions of the website, as shown in the preceding examples. This methodology can be applied to any such determinable website, regardless of whether or not it is part of a larger website. The exact definition of a target website to be evaluated is determined as part of [Step 1.a](#step1a).

### Principle of Website Enclosure

When a target website is defined for evaluation, it is essential that all web pages, web page states, and functionality within the scope of this definition are considered for evaluation. Excluding such aspects of a website from the scope of evaluation would likely conflict with the WCAG 2.0 conformance requirements for [full pages](http://www.w3.org/TR/WCAG20/#cc2) and [complete processes](http://www.w3.org/TR/WCAG20/#cc3), or otherwise distort the evaluation results.

#### Example of Website Enclosure

![Diagram of a University Website explained in the following paragraph.](website.png)

The preceding diagram shows a university website comprised of distinct areas; "Information for Students", "Information for Lecturers", "Courseware Application", and "Library Application". The "Courseware Application" includes "Physics Courses", "Medical Courses", and "History Courses" that are aggregated into the application. The university website also has individual web pages such as legal notices, sitemap, and other web pages that are common to all areas.

In the preceding example, if the university website in its entirety is defined as the target for evaluation, then all of the depicted areas are within the scope of the evaluation. This includes any aggregated and embedded content such as maps of the campus, forms for online payments, and discussion boards, including when such parts originate from third-party sources. If only a specific website area, such as the "Courseware Application", is defined as the target for evaluation then all the parts of this area are within the scope of the evaluation. In this case, the scope of evaluation would include all depicted courses, as well as the individual web pages that are common to all areas of the university. See also the definition for [Common Web Pages](#common).

### Particular Types of Websites

This methodology is applicable to the broad variety of website types. The following provides considerations for particular situations, noting that websites may combine several aspects. Thus the following list is non-exclusive and non-exhaustive:

Small Websites
: For websites with few web pages the sampling procedure defined in [Step 3: Select a Representative Sample](#step3) will likely result in selecting most or all of the web pages from the target website. In cases where all web pages can be evaluated, the sampling procedure can be skipped and the selected sample is considered to be the entire website in the remaining steps.

Web Applications
: Web applications are generally composed of dynamically generated content and functionality (see [web page states](#states)). Web applications tend to be more complex and interactive. Some examples of web applications include webmail clients, document editors, and online shops. Web applications may be part of a larger website but can also constitute a website of their own in the context of this methodology. That is, an individual and separable entity for evaluation.

**Note:** Due to the many possibilities of generating content and functionality in web applications it is sometimes not feasible to exhaustively identify every possible web page, web page state, and functionality. Web applications will typically require more time and effort to evaluate, and they will typically need larger web page samples to reflect the different types of content, functionality, and processes.

Website with Separable Areas
: In some cases websites may have clearly separable areas where using one area does not require or depend on using another area of the website. For example, an organization might provide an extranet for its employees only that is linked from the public website but is otherwise separate, or it might have sub-sites for individual departments of the organization that are each clearly distinct from one another. Such separable areas can be considered as individual websites each for evaluation. In some cases there may be [common web pages](#common), such as legal notices, that need to be considered as part of each website area.

**Note:** Some websites provide additional or different content and functionality depending on the user (typically after a log-in). This additional content and functionality is generally part of the essential purpose and functionality of the website and is thus not considered to be a separable website area.

Website in Multiple Versions
: Some websites are available in multiple versions that are independent of one another in use, that is, using one version does not require or depend on using another version of the website. For example, a website may have a mobile version and there may be versions of a website in different languages that meet this characteristic. Usually each such website version has a different set of URIs. Such website versions can be considered as individual websites for evaluation.

**Note:** Websites using responsive design techniques (i.e. adapting the presentation according to user hardware, software, and preferences) as opposed to redirecting the user to a different location are not considered to be independent website versions.

Website Using Responsive Design
: Responsive design techniques adjust the order, flow, and sometimes behavior of the content to best suit the device on which it is used. For example, to adjust the content and functionality according to the size of the viewport, screen resolution, orientation of the screen, and other aspects of a mobile device and the context in which it is being used. In this methodology such changes to the content, functionality, appearance, and behavior are not considered to be independent website versions but rather [web page states](#states) that need to be included in the evaluation scope.

**Note:** Considerations for mobile devices, operating systems, and assistive technologies need to be taken for websites using responsive design techniques, in particular during [Step 1.c: Define an Accessibility Support Baseline](#step1c).

### Particular Evaluation Contexts

This methodology is designed to be flexible to facilitate its applicability in different situations and contexts. The following considerations apply to particular situations and contexts for an evaluation:

Self-Assessment of Conformance
: In-house evaluators and evaluators who are part of the development process often have easier access to the website developers and maintainers, the development and hosting environments, the authoring tools, and the materials used for development and maintenance. Particularly use cases, design analysis, technical specifications and documentation, and testing resources can make evaluation more effective and should be leveraged where possible.

Third-Party Assessment of Conformance
: Independent external evaluators typically have less information about the websites internal software, areas, and functionality of a website as they have not been involved in its procurement and in how the website was designed and developed. Often evaluators in these situations need to contact the website owner or developer to get necessary information that make the evaluation more effective.

Evaluating During Development
: While this methodology has been primarily designed for reviewing websites that are already developed, it is critical to evaluate accessibility throughout the design and implementation stages of a website to ensure its conformance. The guidance provided in this methodology can be useful during these earlier stages of the design and development process, though some adaptation may be needed. However, it is important to be aware that evaluations carried out during these earlier stages can quickly become obsolete by implementing even minor changes. Consequently evaluations carried out during these stages should not be used for making statements nor conformance claims about the finalized website.

Evaluating Composite Websites
: When evaluating websites with [separable areas](#separable), such as online shop, blog area, and other sub-sites, it can be useful to first evaluate each website area separately according to this methodology, followed by an overall evaluation with samples from each website area and any common web pages. This would ensure more complete coverage of the website in its entirety as well as provide insights about how each website area performed, which may differ from one area to another.

Evaluating Aggregated Websites
: Websites that are generated using content that is combined from different sources, such as portals with portlets, are usually much more challenging to evaluate because of the many different content instances that can be generated. Generally it is not possible to evaluate the content from their sources separately but rather as displayed to the users when they are combined.

Evaluating Third-Party Content
: Third-party content is not under the control of the website or web service providers; for example content generated by website users in an online forum. WCAG 2.0 provides specific considerations for the conformance of such type of content in section [Statement of Partial Conformance](http://www.w3.org/TR/WCAG20/#conformance-partial). In such cases evaluators will need to determine whether such content is regularly monitored and repaired (within two business days), and whether non-conforming content is clearly identified as such in all the web pages in which it appears.

Re-Running Website Evaluation
: Website evaluation, according to this methodology, may be re-run after a short period; for example, when issues are identified and repaired by the website owner or website developer, or periodically to monitor progress. In such cases the evaluation can be carried out using a sample of web pages that include:

*   A sub-set of the web pages that were used in the preceding evaluation to facilitate comparability between the results;
*   A replaced sub-set of web pages from those that were used in the preceding evaluation to improve website coverage;

Unless significant changes were made to the website there is usually no need to change the size of the selected web page sample nor the approach used for sampling. The amount of replaced web pages in a fresh sample is typically about half of the initial sample, though this could be increased when web pages on a website mostly conform to WCAG 2.0.

Large-Scale Evaluation
: Carrying out mass evaluation of many websites, for example for national or international surveying, is typically carried out by primarily using automated evaluation tools. Relatively few web pages undergo full manual inspection. Such evaluations do not usually address the necessary qualitative depth of conformance review per website for which this methodology is designed.